// source/screen/Timetable/TimeTableRow.js


import React from 'react';
import { DataTable, Text } from 'react-native-paper';
import { useRecoilValue } from 'recoil';
import { timeTableState } from '../store/store';

const TimeTableRow = ({ timeNum, Edit }) => {
  const timeTableData = useRecoilValue(timeTableState);

  const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

  const renderCellContent = (day, timeNum) => {
    const dayLectures = timeTableData[day];
    if (!dayLectures) {
      // timeTableData[day]가 undefined인 경우 빈 배열을 반환합니다.
      return <DataTable.Cell key={day} style={{ padding: 0 }} />;
    }

    const lectures = dayLectures.filter(
      lecture => lecture.start <= timeNum && lecture.end > timeNum,
    );

    if (lectures.length === 0) {
      return <DataTable.Cell key={day} style={{ padding: 0 }} />;
    }

    const lecture = lectures[0]; // 첫 번째 겹치는 강의만 표시
    const isFirstHour = lecture.start === timeNum;
    const isLastHour = lecture.end === timeNum + 1;

    return (
      <DataTable.Cell
        key={lecture.id}
        onPress={() => Edit(day, lecture.id)}
        style={{
          backgroundColor: lecture.color,
          alignItems: 'center',
          justifyContent: isFirstHour ? 'center' : 'flex-start',
          height: '100%',
          borderTopWidth: isFirstHour ? 1 : 0,
          borderBottomWidth: isLastHour ? 1 : 0,
          borderColor: '#fff',
          borderLeftWidth: 1,
          borderRightWidth: 1,
        }}>
        {isFirstHour && <Text style={{ color: '#fff' }}>{lecture.name}</Text>}
      </DataTable.Cell>
    );
  };

  return (
    <>
      {days.map(day => (
        <React.Fragment key={day}>
          {renderCellContent(day, timeNum)}
        </React.Fragment>
      ))}
    </>
  );
};

export default TimeTableRow;
