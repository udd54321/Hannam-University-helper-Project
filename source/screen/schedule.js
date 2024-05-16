import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Schedule = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style = {style.container}>
                <View style = {{flex: 1}}>
                    <Text>시간표 페이지</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };
  
  export default Schedule;

  const style = StyleSheet.create({
    container: {
        width: windowWidth, 
        height: windowHeight, 
    },
  });