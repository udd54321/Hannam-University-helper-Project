import React from 'react';
import {DataTable, Text} from 'react-native-paper';
import {useRecoilValue} from 'recoil';
import {timeTableState} from '../store/store';

const TimeTableRow = ({timeNum, Edit}) => {
  const timeTableData = useRecoilValue(timeTableState);

  const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

  return (
    <>
      {days.map(day => (
        <DataTable.Cell key={day}>
          {timeTableData[day]
            .filter(
              lecture => lecture.start <= timeNum && lecture.end > timeNum,
            )
            .map(lecture => (
              <DataTable.Cell
                key={lecture.id}
                onPress={() => Edit(day, lecture.id)}
                style={{
                  backgroundColor: lecture.color,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff'}}>{lecture.name}</Text>
              </DataTable.Cell>
            ))}
        </DataTable.Cell>
      ))}
    </>
  );
};

export default TimeTableRow;
