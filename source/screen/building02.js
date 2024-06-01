import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

import FirstFloorScreen from './02Floors/building02_1F';
import SecondFloorScreen from './02Floors/building02_2F';
import ThirdFloorScreen from './02Floors/building02_3F';
import FourthFloorScreen from './02Floors/building02_4F';
import GilScreen from './gil'; // Import the Gil screen

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

const Building02 = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Building02Main"
            component={Building02Main}
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
          />
          <Stack.Screen
            name="Gil"
            component={GilScreen}
            options={{ title: '길 안내' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

const Building02Main = ({navigation}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={styles.outerContainer}
            contentContainerStyle={styles.innerContainer}>
            <FloorButton 
              floor="1F"
              details="탈메이지1층"
              navigation={navigation} 
            />
            <FloorButton
              floor="2F"
              details="탈메이지2층"
              navigation={navigation}
            />
            <FloorButton 
              floor="3F" 
              details="탈메이지3층" 
              navigation={navigation} 
            />
            <FloorButton 
              floor="4F" 
              details="탈메이지4층" 
              navigation={navigation} 
            />
          </ScrollView>
        <Bottombar />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const FloorButton = ({floor, details, navigation}) => {
  let screenName = `${floor}Screen`; // 스크린 이름 동적으로 설정
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text numberOfLines={2} style={styles.infoText}>{details}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity 
        style = {styles.floorMoreInfo}
        onPress = {() => setModalVisible(true)}
      >
        <Image
          style={styles.floorMoreInfoImage}
          source={require('../image/info.jpg')}
        />
      </TouchableOpacity>
      <Modal
        animationType='fade'
        visible={modalVisible}
        transparent={true}
      >
        <View style = {styles.modalContainer}>
          <Text style = {styles.modalText}>{details}</Text>
          <TouchableOpacity
            style = {styles.modalClose}
            onPress={() => setModalVisible(false)}
          >
            <Text style = {styles.modalCloseText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Building02;

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
    flex: 1.5,
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#deb887',
  },
  floorInfo: {
    flex: 8.5,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  numberText: {
    fontSize: 26,
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
  modalContainer: {
    width: '70%',
    height: '25%',
    backgroundColor: '#faebd7',
    marginTop: 250,
    marginLeft: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 15,
    color: '#000000',
  },
  modalClose: {
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 15,
    color: '#000000',
  },
});
