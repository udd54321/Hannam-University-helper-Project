import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from 'react-native';

const subjects = [
  {
    id: '1',
    subject: '모바일프로그래밍',
    professor: '이극',
    code: '24844',
    location: '090519',
    time: '수7,8',
  },
  {
    id: '2',
    subject: '모바일프로그래밍(실01)',
    professor: '이극',
    code: '22166',
    location: '090210',
    time: '금5,6',
  },
  {
    id: '3',
    subject: '모바일프로그래밍(실02)',
    professor: '이극',
    code: '22166',
    location: '090210',
    time: '금7,8',
  },
  {
    id: '4',
    subject: '시스템보안',
    professor: '이극',
    code: '24491',
    location: '090520/090519',
    time: '화6,7(090520) / 수9(090519)',
  },
  {
    id: '5',
    subject: '.net프로그래밍',
    professor: '이만희',
    code: '23300',
    location: '090106',
    time: '화7,8',
  },
  {
    id: '6',
    subject: '4차산업혁명과창업',
    professor: '이한석',
    code: '23751',
    location: '110210',
    time: '금4,5',
  },
  {
    id: '7',
    subject: '4차산업혁명과경영',
    professor: '김장현',
    code: '24598',
    location: '050709',
    time: '화7,8',
  },
  {
    id: '8',
    subject: '4차산업혁명과경영',
    professor: '정충영',
    code: '24598',
    location: '050616',
    time: '월2,3',
  },
  {
    id: '9',
    subject: '가상현실과미래사회',
    professor: '권선영',
    code: '25488',
    location: '040223',
    time: '월F/목A',
  },
  {
    id: '10',
    subject: '기록관리론',
    professor: '김보일',
    code: '21281',
    location: '040223',
    time: '화B/금B',
  },
  {
    id: '11',
    subject: '기업가정신',
    professor: '권선영',
    code: '25089',
    location: '040223',
    time: '화1',
  },
  {
    id: '12',
    subject: '정보자료구성론',
    professor: '권선영',
    code: '18054',
    location: '040223',
    time: '화D / 목D',
  },
];

const Schedule = () => {
  const [query, setQuery] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);

  const handleSearch = () => {
    const filtered = subjects.filter(
      subject =>
        subject.subject.includes(query) ||
        subject.professor.includes(query) ||
        subject.code.includes(query) ||
        subject.location.includes(query),
    );
    setFilteredSubjects(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="검색" onPress={handleSearch} />
      <FlatList
        data={filteredSubjects}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.subject}</Text>
            <Text style={styles.itemText}>교수: {item.professor}</Text>
            <Text style={styles.itemText}>과목 코드: {item.code}</Text>
            <Text style={styles.itemText}>장소: {item.location}</Text>
            <Text style={styles.itemText}>시간: {item.time}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Schedule;
