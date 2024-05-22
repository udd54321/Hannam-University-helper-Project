import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {Button, Dialog, Portal, useTheme} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';
import {useRecoilState} from 'recoil';
import {Picker} from '@react-native-picker/picker';
import {timeTableState} from '../store/store';
import 'react-native-get-random-values';
import {v4 as uuidv1} from 'uuid';

const timeOptions = new Array(12).fill(null).map((e, i) => ({
  value: i + 9,
  label: `${i + 9}시`,
}));

const checkOverlap = (A, B) =>
  B.start < A.start ? B.end > A.start : B.start < A.end;

const InputModal = ({
  showModal,
  handleClose,
  dayData = 'mon',
  startTimeData = 9,
  endTimeData = 10,
  lectureNameData = '',
  colorData = '#FFFFFF',
  idNum,
}) => {
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: {errors},
  } = useForm();
  const [timeTableData, setTimeTableData] = useRecoilState(timeTableState);

  useEffect(() => {
    if (showModal) {
      reset({
        lectureName: lectureNameData,
        day: dayData,
        startTime: startTimeData,
        endTime: endTimeData,
        lectureColor: colorData,
      });
    }
  }, [
    showModal,
    reset,
    lectureNameData,
    dayData,
    startTimeData,
    endTimeData,
    colorData,
  ]);

  const onSubmit = useCallback(
    data => {
      const {lectureName, day, startTime, endTime, lectureColor} = data;
      let valid = true;
      for (let i = 0; i < timeTableData[day].length; i++) {
        if (
          checkOverlap(timeTableData[day][i], {start: startTime, end: endTime})
        ) {
          valid = false;
          break;
        }
      }

      if (!valid) {
        Alert.alert('해당 시간대에 이미 강의가 있습니다. 다시 확인해주세요.');
        return;
      }

      const newData = {
        start: startTime,
        end: endTime,
        name: lectureName,
        color: lectureColor,
        id: uuidv1(),
      };

      setTimeTableData(oldData => ({
        ...oldData,
        [day]: [...oldData[day], newData],
      }));

      handleClose();
    },
    [timeTableData, setTimeTableData, handleClose],
  );

  const onEdit = useCallback(
    data => {
      const {lectureName, day, startTime, endTime, lectureColor} = data;
      let valid = true;

      for (let i = 0; i < timeTableData[day].length; i++) {
        if (
          checkOverlap(timeTableData[day][i], {
            start: startTime,
            end: endTime,
          }) &&
          timeTableData[day][i].id !== idNum
        ) {
          valid = false;
          break;
        }
      }

      if (!valid) {
        Alert.alert('해당 시간대에 이미 강의가 있습니다. 다시 확인해주세요.');
        return;
      }

      const filteredDayData = timeTableData[dayData].filter(
        item => item.id !== idNum,
      );

      const updatedTimeTableData = {
        ...timeTableData,
        [dayData]: filteredDayData,
      };

      const newDayData = [
        ...updatedTimeTableData[day],
        {
          start: startTime,
          end: endTime,
          id: idNum,
          name: lectureName,
          color: lectureColor,
        },
      ];

      setTimeTableData({
        ...updatedTimeTableData,
        [day]: newDayData,
      });

      handleClose();
    },
    [timeTableData, setTimeTableData, handleClose, idNum, dayData],
  );

  return (
    <Portal>
      <Dialog visible={showModal} onDismiss={handleClose} style={styles.dialog}>
        <Dialog.Title>강의 정보 입력</Dialog.Title>
        <Dialog.Content>
          <ScrollView>
            <Controller
              control={control}
              name="lectureName"
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <TextInput
                  placeholder="강의명"
                  style={[
                    styles.input,
                    errors.lectureName && styles.errorInput,
                  ]}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.lectureName && (
              <Text style={styles.errorText}>어떤 강의인가요?</Text>
            )}

            <View style={styles.pickerContainer}>
              <Text>요일</Text>
              <Controller
                control={control}
                name="day"
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}>
                    <Picker.Item label="월" value="mon" />
                    <Picker.Item label="화" value="tue" />
                    <Picker.Item label="수" value="wed" />
                    <Picker.Item label="목" value="thu" />
                    <Picker.Item label="금" value="fri" />
                  </Picker>
                )}
              />
            </View>
            {errors.day && (
              <Text style={styles.errorText}>무슨 요일에 시작하나요?</Text>
            )}

            <View style={styles.pickerContainer}>
              <Text>시작 시간</Text>
              <Controller
                control={control}
                name="startTime"
                rules={{
                  required: true,
                  validate: value => getValues('endTime') > value,
                }}
                render={({field: {onChange, value}}) => (
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}>
                    {timeOptions.map(option => (
                      <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                )}
              />
            </View>
            {errors.startTime && (
              <Text style={styles.errorText}>몇시에 시작하나요?</Text>
            )}
            {errors.startTime?.type === 'validate' && (
              <Text style={styles.errorText}>시간 설정이 이상합니다.</Text>
            )}

            <View style={styles.pickerContainer}>
              <Text>종료 시간</Text>
              <Controller
                control={control}
                name="endTime"
                rules={{
                  required: true,
                  validate: value => getValues('startTime') < value,
                }}
                render={({field: {onChange, value}}) => (
                  <Picker
                    selectedValue={value}
                    onValueChange={onChange}
                    style={styles.picker}>
                    {timeOptions.map(option => (
                      <Picker.Item
                        key={option.value}
                        label={option.label}
                        value={option.value}
                      />
                    ))}
                  </Picker>
                )}
              />
            </View>
            {errors.endTime && (
              <Text style={styles.errorText}>몇시에 끝나나요?</Text>
            )}
            {errors.endTime?.type === 'validate' && (
              <Text style={styles.errorText}>시간 설정이 이상합니다.</Text>
            )}

            <View style={styles.colorPickerContainer}>
              <Text>시간표 색상:</Text>
              <Controller
                control={control}
                name="lectureColor"
                render={({field: {onChange, value}}) => (
                  <TextInput
                    style={styles.colorPicker}
                    onChangeText={onChange}
                    value={value}
                    placeholder="#FFFFFF"
                  />
                )}
              />
            </View>
          </ScrollView>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleClose}>취소</Button>
          <Button onPress={handleSubmit(idNum ? onEdit : onSubmit)}>
            입력
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: {
    maxHeight: '80%',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  pickerContainer: {
    marginVertical: 10,
  },
  picker: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
  },
  colorPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  colorPicker: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginLeft: 10,
    width: 100,
  },
});

export default InputModal;
