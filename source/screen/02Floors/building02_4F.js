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
import floors from './building02Floor'; 

const FourthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['4F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020401') {
      additionalText = '\n강의실\n-ICT와4차산업혁명(손호선)_목4,5,6\n-대학수학1(정남순)_수5,6,화,2';
    } else if (room === '020402') {
      additionalText = '\n강의실';
    }else if (room === '020403') {
      additionalText = '\n강의실';
    }else if (room === '020404') {
      additionalText = '\n수교과교구실';
    }else if (room === '020405') {
      additionalText = '\n강의실';
    }else if (room === '020406') {
      additionalText = '\n강의실';
    }else if (room === '020407') {
      additionalText = '\n강의실';
    }else if (room === '020408') {
      additionalText = '\n강의실';
    }

    Alert.alert('알림', `${room}  ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '4F', goalFloor: '4F' }); // startFloor와 goalFloor 전달
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
      {Object.keys(floors['4F'].rooms).map((roomId) => {
        const room = floors['4F'].rooms[roomId];
        const isRotated = [ '020404'].includes(roomId);
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
    marginTop: -350,
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
  rotatedText: {
    transform: [{ rotate: '90deg' }],
  },
});

export default FourthFloorScreen;
