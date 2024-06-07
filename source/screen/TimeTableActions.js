import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const TimeTableActions = ({ subject, showInputModal }) => {
  const handleAddToTimetable = () => {
    showInputModal(subject); // 시간표에 추가 버튼을 누르면 InputModal 다이얼로그 열기
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleAddToTimetable}>
        <Text style={styles.addButton}>시간표에 추가</Text>
      </TouchableOpacity>
    </View>
  );
};

TimeTableActions.propTypes = {
  subject: PropTypes.object.isRequired,
  showInputModal: PropTypes.func.isRequired, // showInputModal 함수를 props로 받음
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'left',
    marginTop: 3,
    marginRight: 20,
  },
});

export default TimeTableActions;
