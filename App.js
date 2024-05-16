import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './source/screen/home'; //홈페이지
import Search from './source/screen/search'; //검색
import Schedule from './source/screen/schedule'; //시간표
import Gps from './source/screen/gps'; //내비게이션
import Notice from './source/screen/notice'; //공지 사항
import Building09 from './source/screen/building09'; //9번 건물
import Building56 from './source/screen/building56'; //56번 건물

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;

const SchoolMapScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName = 'Homepage'
        screenOptions={{
          headerStyle: {width: windowWidth, backgroundColor: '#ffffff'},
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name = 'Homepage'
          component = {Home}
          options = {{
            headerTitleAlign: 'center',
            headerLeft: () => (
              <View style = {style.leftContainer}>
                  <Image
                    style = {style.headerImage}
                    source = {require('./source/image/symbol.jpg')}
              />
              </View>
            ),
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text style = {style.headerText}>HAI GPS</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'Searchpage'
          component = {Search}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  검색
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'Schedulepage'
          component = {Schedule}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  시간표
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'Gpspage'
          component = {Gps}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  내비게이션
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'Noticepage'
          component = {Notice}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  공지 사항
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = 'College of Engineering'
          component = {Building09}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  공과대학
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name = '56th Anniversary Memorial Hall'
          component = {Building56}
          options = {{
            headerTitle: () => (
              <View style = {style.titleContainer}>
                <Text 
                  numberOfLines={1} 
                  ellipsizeMode='tail'
                  style = {style.headerText}
                >
                  56주년 기념관
                </Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SchoolMapScreen;

const style = StyleSheet.create({
  leftContainer: {
    width: windowWidth * 0.1,
    height: 50,
  },
  headerImage: {
    width: 'auto',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  titleContainer: {
    width: windowWidth * 0.6,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 30,
  },
});