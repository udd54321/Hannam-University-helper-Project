import React, {useCallback, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {DataTable, Button, Portal, Provider} from 'react-native-paper';
import TimeTableRow from './Timetable/TimeTableRow';
import InputModal from './Timetable/InputModal';
import {timeTableState} from './store/store';
import {useRecoilValue} from 'recoil';

const hourData = Array.from({length: 11}, (_, i) => i + 9);

const Schedulepage = () => {
  const timeTableData = useRecoilValue(timeTableState);
  const [showModal, setShowModal] = useState(false);
  const [editInfo, setEditInfo] = useState({});

  const handleClose = useCallback(() => {
    setShowModal(false);
    setEditInfo({});
  }, []);

  const Edit = useCallback(
    (day, id) => {
      const {start, end, name, color} = timeTableData[day].find(
        lectureInfo => lectureInfo.id === id,
      );
      setEditInfo({
        dayData: day,
        startTimeData: start,
        endTimeData: end,
        lectureNameData: name,
        colorData: color,
        idNum: id,
      });
      setShowModal(true);
    },
    [timeTableData],
  );

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>강의시간표</Text>
        <Button
          mode="contained"
          icon="plus"
          onPress={() => setShowModal(true)}
          style={styles.addButton}>
          강의 추가
        </Button>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={styles.cell}>시간</DataTable.Title>
            <DataTable.Title style={styles.cell}>월</DataTable.Title>
            <DataTable.Title style={styles.cell}>화</DataTable.Title>
            <DataTable.Title style={styles.cell}>수</DataTable.Title>
            <DataTable.Title style={styles.cell}>목</DataTable.Title>
            <DataTable.Title style={styles.cell}>금</DataTable.Title>
          </DataTable.Header>
          {hourData.map((time, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell style={styles.cell}>{`${time}:00-${
                time + 1
              }:00`}</DataTable.Cell>
              <TimeTableRow timeNum={time} Edit={Edit} />
            </DataTable.Row>
          ))}
        </DataTable>
        <Portal>
          <InputModal
            showModal={showModal}
            handleClose={handleClose}
            {...editInfo}
          />
        </Portal>
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  addButton: {
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Schedulepage;
