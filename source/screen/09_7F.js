import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GilScreen from './gil';  // gil.js import 추가

const NinthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대7층.png'));

  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '090717') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090716') {
      additionalText = '\n기타 정보';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room }); // navigation.navigate 사용
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
    <View style={styles.container}>
      <Image style={styles.headerImage} source={currentImage} />
      {[
        { id: '090716', top: '7.5%', left: '26.9%' },
        { id: '090715', top: '7.5%', left: '34.9%' },
        { id: '090712', top: '7.5%', left: '78.2%' },
        { id: '090711', top: '7.5%', left: '86.55%' },
        { id: '090710', top: '26.5%', left: '86.55%' },
        { id: '090709', top: '26.5%', left: '78.2%' },
        { id: '090708', top: '26.5%', left: '69.6%' },
        { id: '090707', top: '26.5%', left: '61.2%' },
        { id: '090706', top: '26.5%', left: '52.7%' },
        { id: '090705', top: '26.5%', left: '43.9%' },
        { id: '090704', top: '26.5%', left: '35.2%' },
        { id: '090703', top: '26.5%', left: '26.6%' },
        { id: '090702', top: '26.5%', left: '18.1%' },
        { id: '090701', top: '26.5%', left: '9%' },
        { id: '090717', top: '7.5%', left: '18%' },
      ].map(room => (
        <TouchableOpacity
          key={room.id}
          style={[styles.button, { top: room.top, left: room.left }]}
          onPress={() => showInfoAlert(room.id)}
        >
          <Text style={[styles.buttonText, { fontSize: 8 }]}>{room.id}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // 이미지의 비율을 유지
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default NinthFloorScreen;
