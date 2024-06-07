import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';
import {Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './source/screen/home'; // Homepage
import ScheduleSearch from './source/screen/ScheduleSearch'; // Search
import Timetable from './source/screen/timetable'; // Timetable
import Gps from './source/screen/gps'; // Navigation
import Notice from './source/screen/notice'; // Notices
import Building09 from './source/screen/building09'; // Building 9
import Building56 from './source/screen/building56'; // Building 56
import Building02 from './source/screen/building02'; // Building 02
import Building06 from './source/screen/building06'; // Building 06
import Building04 from './source/screen/building04'; // Building 04
import Building05 from './source/screen/building05';
import Building08 from './source/screen/building08'; // Building 08
import Building10 from './source/screen/building10';
import Building11 from './source/screen/building11';
import Building03 from './source/screen/building03';
import Building061 from './source/screen/building061';
import Building01 from './source/screen/building01';

import TestScreen from './source/screen/test'; // Test screen

const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HeaderTitle = React.memo(({text}) => (
  <View style={styles.titleContainer}>
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerText}>
      {text}
    </Text>
  </View>
));

const App = () => {
  return (
    <RecoilRoot>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Homepage"
            screenOptions={{
              headerStyle: {width: windowWidth, backgroundColor: '#ffffff'},
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="Homepage"
              component={Home}
              options={{
                headerTitleAlign: 'center',
                headerLeft: () => (
                  <View style={styles.leftContainer}>
                    <Image
                      style={styles.headerImage}
                      source={require('./source/image/campusSymbol.jpg')}
                    />
                  </View>
                ),
                headerTitle: () => (
                  <View style={styles.titleContainer}>
                    <Text style={styles.headerText}>HAI GPS</Text>
                  </View>
                ),
              }}
            />
            <Stack.Screen
              name="ScheduleSearch"
              component={ScheduleSearch}
              options={{
                headerTitle: () => <HeaderTitle text="검색" />,
              }}
            />
            <Stack.Screen
              name="Schedulepage"
              component={Timetable}
              options={{
                headerTitle: () => <HeaderTitle text="시간표" />,
              }}
            />
            <Stack.Screen
              name="Gpspage"
              component={Gps}
              options={{
                headerTitle: () => <HeaderTitle text="내비게이션" />,
              }}
            />
            <Stack.Screen
              name="Noticepage"
              component={Notice}
              options={{
                headerTitle: () => <HeaderTitle text="공지 사항" />,
              }}
            />
            <Stack.Screen
              name="building09"
              component={Building09}
              options={{
                headerTitle: () => <HeaderTitle text="공과대학" />,
              }}
            />
            <Stack.Screen
              name="building56"
              component={Building56}
              options={{
                headerTitle: () => <HeaderTitle text="56주년 기념관" />,  
              }}
            />
            <Stack.Screen
              name="building02"
              component={Building02}
              options={{
                headerTitle: () => <HeaderTitle text="탈메이지 기념관" />,
              }}
            />
            <Stack.Screen
              name="building06"
              component={Building06}
              options={{
                headerTitle: () => <HeaderTitle text="계의돈 기념관" />,
              }}
            />
            <Stack.Screen
              name="building04"
              component={Building04}
              options={{
                headerTitle: () => <HeaderTitle text="문과 대학" />,
              }}
            />
            <Stack.Screen
              name="building05"
              component={Building05}
              options={{
                headerTitle: () => <HeaderTitle text="경상 대학" />,
              }}
            />
             <Stack.Screen
              name="building08"
              component={Building08}
              options={{
                headerTitle: () => <HeaderTitle text="학생회관" />,
              }}
            />
            <Stack.Screen
              name="building11"
              component={Building11}
              options={{
                headerTitle: () => <HeaderTitle text="인사례 교양동" />,
              }}
            />
            <Stack.Screen
              name="building10"
              component={Building10}
              options={{
                headerTitle: () => <HeaderTitle text="중앙 도서관" />,
              }}
            />
            <Stack.Screen
              name="building03"
              component={Building03}
              options={{
                headerTitle: () => <HeaderTitle text="사범 대학" />,
              }}
            />
            <Stack.Screen
              name="building061"
              component={Building061}
              options={{
                headerTitle: () => <HeaderTitle text="성지관" />,
              }}
            />
              <Stack.Screen
              name="building01"
              component={Building01}
              options={{
                headerTitle: () => <HeaderTitle text="인돈기념관" />,
              }}
            />
            
            <Stack.Screen
              name="TestScreen"
              component={TestScreen}
              options={{
                headerTitle: () => <HeaderTitle text="Test Screen" />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
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
    fontSize: windowHeight * 0.25 * 0.2 * 0.6,
  },
});
