import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Gps = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style = {style.container}>
                <View style = {{flex: 1}}>
                    <Text>내비게이션 페이지</Text>
                </View>
                <Bottombar n = {navigation}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };
  
  export default Gps;

  const style = StyleSheet.create({
    container: {
        width: windowWidth, 
        height: windowHeight, 
    },
  });