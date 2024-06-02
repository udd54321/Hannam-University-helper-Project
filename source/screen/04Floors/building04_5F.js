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
import floors from './building04Floor'; 

const FifthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['5F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020401') {
      additionalText = '\n';
    } else if (room === '020402') {
      additionalText = '\n';
    }else if (room === '020403') {
      additionalText = '\n';
    }else if (room === '020404') {
      additionalText = '\n';
    }else if (room === '020405') {
      additionalText = '\n';
    }else if (room === '020406') {
      additionalText = '\n';
    }else if (room === '020407') {
      additionalText = '\n';
    }else if (room === '020408') {
      additionalText = '\n';
    }

    Alert.alert('알림', `${room}  ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '5F', goalFloor: '5F' }); // startFloor와 goalFloor 전달
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
      {Object.keys(floors['5F'].rooms).map((roomId) => {
        const room = floors['5F'].rooms[roomId];
        const isRotated = [ '040512','040513','040514','040515','040516','040517','040518','040519','040520','040521','040522','040523',].includes(roomId);
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
    marginTop: -280,
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

export default FifthFloorScreen;
