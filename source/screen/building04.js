import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import Bottombar04 from '../component/bottomBar04'; //하단 버튼 바

import FirstFloorScreen from './04Floors/building04_1F';
import SecondFloorScreen from './04Floors/building04_2F';
import ThirdFloorScreen from './04Floors/building04_3F';
import FourthFloorScreen from './04Floors/building04_4F';
import FifthFloorScreen from './04Floors/building04_5F';
import GilScreen from './gil'; // Import the Gil screen

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Building04 = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Building04Main"
            component={Building04Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="1FScreen"
            component={FirstFloorScreen}
            options={{title: '1층'}}
          />
          <Stack.Screen
            name="2FScreen"
            component={SecondFloorScreen}
            options={{title: '2층'}}
          />
          <Stack.Screen
            name="3FScreen"
            component={ThirdFloorScreen}
            options={{title: '3층'}}
          />
          <Stack.Screen
            name="4FScreen"
            component={FourthFloorScreen}
            options={{title: '4층'}}
          /><Stack.Screen
            name="5FScreen"
            component={FifthFloorScreen}
            options={{title: '5층'}}
          />
          <Stack.Screen
            name="Gil"
            component={GilScreen}
            options={{ title: '길 안내' }}
          />
        </Stack.Navigator>
    );
  };

const Building04Main = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={styles.outerContainer}
            contentContainerStyle={styles.innerContainer}>
            <FloorButton 
              floor="1F"
              details="문과 대학 1층"
              navigation={navigation} 
            />
            <FloorButton
              floor="2F"
              details="문과 대학 2층"
              navigation={navigation}
            />
            <FloorButton 
              floor="3F" 
              details="문과 대학 3층" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="4F" 
              details="문과 대학 4층" 
              navigation={navigation} 
            /><FloorButton 
              floor="5F" 
              details="문과 대학 5층" 
              navigation={navigation} 
          />
          </ScrollView>
        <Bottombar04 />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const showInfoAlert = ({details}) => {
  Alert.alert('세부 내용', `${details}`, [
    {
      text: '닫기',
      style: 'cancel',
    },
  ]);
};

const FloorButton = ({floor, details, navigation}) => {
  let screenName = `${floor}Screen`; // 스크린 이름 동적으로 설정

  return (
    <View style = {styles.floorContainer}>
      <TouchableOpacity
        style={styles.floor}
        onPress={() => navigation.navigate(screenName)} // 스크린 이름 변경
      >
        <View style={styles.floorNumber}>
          <Text style={styles.numberText}>{floor}</Text>
        </View>
        <View style={styles.floorInfo}>
          <Text numberOfLines={1} style={styles.infoText}>{details}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style = {styles.floorMoreInfo}
        onPress = {() => showInfoAlert({details})}
      >
        <Image
          style={styles.floorMoreInfoImage}
          source={require('../image/info.jpg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Building04;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#ffffff',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 200,
  },
  innerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  floorContainer: {
    width: windowWidth,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    gap: 10,
  },
  floor: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  floorNumber: {
    flex: 2,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb887',
  },
  floorInfo: {
    flex: 8,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  numberText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#a52a2a',
    textAlign: 'center',
  },
  infoText: {
    fontSize: 15,
    color: '#000000',
    textAlign: 'center',
  },
  floorMoreInfo: {
    width: windowWidth * 0.07,
    height: windowHeight * 0.05,
  },
  floorMoreInfoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
