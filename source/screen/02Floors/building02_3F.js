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

const ThirdFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['3F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020301') {
      additionalText = '\n대학원강의실';
    } else if (room === '020302') {
      additionalText = '\n대학원논문연구실';
    }else if (room === '020303') {
      additionalText = '\n대학원논문연구실2';
    }else if (room === '020304') {
      additionalText = '\n대학원열람실';
    }else if (room === '020305') {
      additionalText = '\n강의실';
    }else if (room === '020306') {
      additionalText = '\n예비실';
    }else if (room === '020307') {
      additionalText = '\n예비실';
    }else if (room === '020301') {
      additionalText = '\n대학원논문연구실';
    }else if (room === '020308') {
      additionalText = '\n정보통신 산협 차신';
    }else if (room === '020309') {
      additionalText = '\n기록관리학과';
    }else if (room === '020310') {
      additionalText = '\n대학원 원우회실';
    }else if (room === '020311') {
      additionalText = '\n강의실';
    }else if (room === '020312') {
      additionalText = '\n강의실\n-기능성화장품및실험(김문중,임진아,강유리)_화2,3,5,6';
    }else if (room === '020313') {
      additionalText = '\n강의실';
    }

    Alert.alert('알림', `${room}  ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '3F', goalFloor: '3F' }); // startFloor와 goalFloor 전달
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
      {Object.keys(floors['3F'].rooms).map((roomId) => {
        const room = floors['3F'].rooms[roomId];
        const isRotated = [ '020303','020304', '020306','020308','020302','020307','020305','020302','020309','020310'].includes(roomId);
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

export default ThirdFloorScreen;
