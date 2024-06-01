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
import floors from './building02Floor'
import Bottombar from '../../component/bottomBar'; //하단 버튼 바

const SecondFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['2F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020202') {
      additionalText = '\n강의실\n-기초 일본어(신민철)_월B,목B\n-일본어리스닝1(마쓰시타 유미코)_목5,6';
    } else if (room === '020203') {
      additionalText = '\n강의실\n-일본어리스닝1(마쓰시타 유미코)_금2,3\n-일본어강독(신민철)_월C,목E\n-일본어회화1(마쓰시타 유미코)_월2,3\n-일본어프레젠테이션(마쓰시타 유미코)_수D,금D\n-자기계발과미래설계(정향재)_화7';
    }else if (room === '020204') {
      additionalText = '\n강의실\n-기초프랑스어연습1(조경희)_화목E\n-기초프랑스회화1(마리나위옹)_월수D\n-DELF3(마리나의옹)_월수B\n-한불문화콘텐츠산업연구(조경희)_화목B\n-프랑스시와샹숑(마리나위옹)_월목B\n-기초프랑스어연습1(마리나위옹)_수A,금A';
    }else if (room === '020205') {
      additionalText = '\n강의실';
    }else if (room === '020210') {
      additionalText = '\n강의실\n-일본어회화1(마쓰시타 유미코)_목2,3';
    }else if (room === '020211') {
      additionalText = '\n문과대세미나실1';
    }else if (room === '020212') {
      additionalText = '\n문과대세미나실2';
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
        const isRotated = [ '020209'].includes(roomId);
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
      <Bottombar />
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

export default SecondFloorScreen;
