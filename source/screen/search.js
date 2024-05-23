import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import ScheduleSearch from './ScheduleSearch'; // ScheduleSearch 화면을 import

const Search = () => {
  const openScheduleSearch = () => {
    // ScheduleSearch 화면을 렌더링
    return <ScheduleSearch />;
  };

  return (
    <View style={styles.container}>
      <Text>검색 페이지</Text>
      <Button title="시간표 검색" onPress={openScheduleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Search;
