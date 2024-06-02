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
import floors from './building04Floor'

const SecondFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['2F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020202') {
      additionalText = '\n';
    } else if (room === '020203') {
      additionalText = '\n';
    }else if (room === '020204') {
      additionalText = '\n';
    }else if (room === '020205') {
      additionalText = '\n';
    }else if (room === '020210') {
      additionalText = '\n';
    }else if (room === '020211') {
      additionalText = '\n';
    }else if (room === '020212') {
      additionalText = '\n';
    }

    Alert.alert('알림', `${room}  ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '2F', goalFloor: '2F' }); // startFloor와 goalFloor 전달
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
      {Object.keys(floors['2F'].rooms).map((roomId) => {
        const room = floors['2F'].rooms[roomId];
        const isRotated = [ '040201','040201-A','040201-B','040202','040202-A','040202-B','040203','040204','040205','040206','040207','040211','040211-A','040212','040212-A','040213','040214','040215','040216','040217','040218','040219','040220'].includes(roomId);
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
    marginTop: -300,
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

export default SecondFloorScreen;
