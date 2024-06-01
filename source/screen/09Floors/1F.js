import React , { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import floors from './engineeringFloor'
import Bottombar from '../../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstFloorScreen = ({navigation}) => {
 
  const [currentImage] = useState(floors['1F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '090117') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090116') {
      additionalText = '\n기타 정보';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '1F', goalFloor: '1F' }); // startFloor와 goalFloor 전달
        },
      },
      {
        text: '아니오',
        onPress: () => console.log('아니오 버튼이 눌렸습니다.'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
      >
      <ScrollView
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
        horizontal = {true}
      >
        <Image style={styles.headerImage} source={currentImage} />
        {Object.keys(floors['1F'].rooms).map((roomId) => {
          const room = floors['1F'].rooms[roomId];
          const isRotated = ['090103', '090104', '090105','090112','090113','090121','090124','090125'].includes(roomId);
          return (
            <TouchableOpacity
              key={roomId}
              style={[styles.button, { top: `${room.y}%`, left: `${room.x}%` }]}
              onPress={() => showInfoAlert(roomId)}
            >
              <Text style={[styles.buttonText, { fontSize: 8 }, isRotated && styles.rotatedText]}>
                {roomId}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      </ScrollView>
      <Bottombar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  headerImage: {
    height: windowHeight,
    resizeMode: 'contain',
    bottom: 100,
  },
  
  button: {
    position: 'absolute',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  rotatedText: {
    transform: [{ rotate: '90deg' }],
  },
});

export default FirstFloorScreen;