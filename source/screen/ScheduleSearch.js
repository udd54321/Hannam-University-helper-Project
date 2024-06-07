import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, SafeAreaView, Switch, TouchableOpacity, Alert } from 'react-native';
import subjectsData from '../../source/component/schedule.json'; // 스케줄 데이터 가져오기
import TimeTableActions from './TimeTableActions'; // TimeTableActions import
import InputModal from './Timetable/InputModal'; // InputModal import

const ScheduleSearch = () => {
  const [query, setQuery] = useState(''); // 검색어 상태
  const [selectedCheckbox, setSelectedCheckbox] = useState(null); // 선택된 체크박스 상태
  const [filteredSubjects, setFilteredSubjects] = useState([]); // 필터된 과목 상태
  const [selectedSubject, setSelectedSubject] = useState(null); // 선택된 과목 상태
  const [showModal, setShowModal] = useState(false); // 모달 상태

  useEffect(() => {
    handleSearch(); // 초기 렌더링 시 검색 필드가 비어 있을 때 전체 목록을 보여줍니다.
  }, []);

  // 검색 함수
  const handleSearch = () => {
    const filtered = subjectsData.filter(subject => {
      if (query.length >= 2) {
        // 검색어 길이가 2 이상이어야 합니다.
        if (
          selectedCheckbox === 'subject' &&
          subject.subject.toLowerCase().includes(query.toLowerCase())
        ) {
          return true; // 과목명 검색
        }
        if (
          selectedCheckbox === 'professor' &&
          subject.professor.toLowerCase().includes(query.toLowerCase())
        ) {
          return true; // 교수명 검색
        }
        if (
          selectedCheckbox === 'code' &&
          subject.code.toLowerCase().includes(query.toLowerCase())
        ) {
          return true; // 과목코드 검색
        }
        if (
          selectedCheckbox === 'location' &&
          subject.location.toLowerCase().includes(query.toLowerCase())
        ) {
          return true; // 장소 검색
        }
      }
      return false;
    });

    setFilteredSubjects(filtered.slice(0, 50)); // 최대 50개의 검색 결과를 보여줍니다.
  };

  // 체크박스 변경 이벤트 핸들러
  const handleCheckboxChange = item => {
    setSelectedCheckbox(prevItem => (prevItem === item ? null : item));
  };

  // 과목을 선택하여 추가하는 함수
  const addToTimeTable = subject => {
    setSelectedSubject(subject);
    setShowModal(true);
  };

  // 팝업을 표시하는 함수
  const showConfirmationPopup = (subject, type) => {
    const message = type === 'add' 
      ? `${subject.subject}을(를) 추가하시겠습니까?`
      : type === 'delete'
      ? `${subject.subject}을(를) 삭제하시겠습니까?`
      : type === 'start'
      ? "출발지로 선택할까요?"
      : "도착지로 선택할까요?";
    
    Alert.alert(
      "확인",
      message,
      [
        { text: "취소", style: "cancel" },
        { text: "확인", onPress: () => handleAction(subject, type) }
      ]
    );
  };

  // 시간표에 추가 또는 삭제하는 함수
  const handleAction = (subject, type) => {
    if (type === 'add') {
      console.log(`추가된 과목: ${subject.subject}, 시간: ${subject.time}`);
      // 시간표에 추가하는 로직을 구현하세요.
      console.log(`${subject.subject} 추가됨`);
    } else if (type === 'delete') {
      // 시간표에서 삭제하는 로직을 구현하세요.
      console.log(`${subject.subject} 삭제됨`);
    } else if (type === 'start') {
      // 출발지로 선택하는 로직을 구현하세요.
      console.log(`${subject.subject} 출발지로 선택됨`);
      Alert.alert(
        "출발지",
        subject.location,
        [
          { text: "확인", style: "cancel" },
        ]
      );
    } else if (type === 'end') {
      // 도착지로 선택하는 로직을 구현하세요.
      console.log(`${subject.subject} 도착지로 선택됨`);
      Alert.alert(
        "도착지",
        subject.location,
        [
          { text: "확인", style: "cancel" },
        ]
      );
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSubject(null);
  };

  const handleLocationButtonClick = location => {
    // 각 버튼을 클릭하면 해당 과목의 장소 정보가 출력됩니다.
    console.log(`선택한 장소: ${location}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxItem}>
          <Text
            style={[
              styles.checkboxLabel,
              selectedCheckbox === 'subject' && styles.checkedLabel,
            ]}>
            과목명
          </Text>
          <Switch
            value={selectedCheckbox === 'subject'}
            onValueChange={() => handleCheckboxChange('subject')}
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text
            style={[
              styles.checkboxLabel,
              selectedCheckbox === 'professor' && styles.checkedLabel,
            ]}>
            교수명
          </Text>
          <Switch
            value={selectedCheckbox === 'professor'}
            onValueChange={() => handleCheckboxChange('professor')}
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text
            style={[
              styles.checkboxLabel,
              selectedCheckbox === 'code' && styles.checkedLabel,
            ]}>
            과목코드
          </Text>
          <Switch
            value={selectedCheckbox === 'code'}
            onValueChange={() => handleCheckboxChange('code')}
          />
        </View>

        <View style={styles.checkboxItem}>
          <Text
            style={[
              styles.checkboxLabel,
              selectedCheckbox === 'location' && styles.checkedLabel,
            ]}>
            장소
          </Text>
          <Switch
            value={selectedCheckbox === 'location'}
            onValueChange={() => handleCheckboxChange('location')}
          />
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요 (두 글자 이상)"
        value={query}
        onChangeText={text => {
          setQuery(text);
          handleSearch();
        }}
      />
      <Button title="검색" onPress={handleSearch} />
      <FlatList data={filteredSubjects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => addToTimeTable(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>과목명: {item.subject}</Text>
              <Text style={styles.itemText}>교수: {item.professor}</Text>
              <Text style={styles.itemText}>과목 코드: {item.code}</Text>
              <Text style={styles.itemText}>장소: {item.location}</Text>
              <Text style={styles.itemText}>시간: {item.time}</Text>
              {selectedSubject?.id === item.id && (
                <>
                  <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => showConfirmationPopup(item, 'start')}>
                    <Text style={styles.buttonText}>출발</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.locationButton}
                    onPress={() => showConfirmationPopup(item, 'end')}>
                    <Text style={styles.buttonText}>도착</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      {selectedSubject && (
        <InputModal
          showModal={showModal}
          handleClose={handleCloseModal}
          dayData={selectedSubject.day}
          startTimeData={parseInt(selectedSubject.startTime, 10)}
          endTimeData={parseInt(selectedSubject.endTime, 10)}
          lectureNameData={selectedSubject.subject}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'flex-start', // 체크박스를 왼쪽 정렬
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 0.3, // 더 작은 체크박스 사이 간격
  },
  checkboxLabel: {
    fontSize: 16,
    marginHorizontal: 0.3, // 더 작은 체크박스 레이블의 좌우 여백
  },
  checkedLabel: {
    color: 'red',
    fontWeight: 'bold', // 선택된 항목을 더 강조하기 위해 볼드체로 변경
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  locationButton: {
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ScheduleSearch;
