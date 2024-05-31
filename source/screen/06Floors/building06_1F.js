import React , { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';

import floors from './building06Floor'
import Bottombar2 from '../../component/bottomBar2'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstFloorScreen = ({navigation}) => {
 

  const [currentImage] = useState(floors['1F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '060101') {
      additionalText = '\n창의공학설계실';
    } else if (room === '060102') {
      additionalText = '\n예비실';
    }else if (room === '060103') {
      additionalText = '\nAI융합학과 사무실';
    }else if (room === '060104') {
      additionalText = '\n교수연구실(임천석)';
    }else if (room === '060104') {
      additionalText = '\n교수연구실(홍성민)';
    }else if (room === '060106') {
      additionalText = '\n곽노섭(현장실습지원센터)';
    }else if (room === '060107') {
      additionalText = '\nPC실\n-파이썬 프로그래밍(실)(김준영)_월4,5\n-파이썬 프로그래밍(실)(김준영)_월6,7\n-기업가정신(김준영)_화9\n-머신러닝(김준영)_화D,목D\n-AI프로그래밍2(송진호)_월6/목7,8\n-딥러닝심화이론(송진호)_월B/목B\n-컴퓨터비전(송진호)_월E/수E\n-데이터시각화(윤성식)_목1,2,3';
    }else if (room === '060109') {
      additionalText = '\n현장실습지원센터 사무실';
    }else if (room === '060110') {
      additionalText = '\n회의실 및 교육실';
    }else if (room === '060111') {
      additionalText = '\n상담실';
    }else if (room === '060112') {
      additionalText = '\n범석훈(현장실습지원센터)';
    }else if (room === '060113') {
      additionalText = '\n환경미화원실';
    }else if (room === '060114') {
      additionalText = '\n강의실\n-일반물리1(조재흥)_월1,2,3';
    }else if (room === '060118') {
      additionalText = '\nipp산업단회의실';
    }else if (room === '060119') {
      additionalText = '\nipp센터사무실';
    }else if (room === '060120') {
      additionalText = '\n미화원휴계실';
    }else if (room === '060121') {
      additionalText = '\n생명나노과학대학 교수휴계실';
    }else if (room === '060122') {
      additionalText = '\n실습기재실(AI융합)';
    }else if (room === '060123') {
      additionalText = '\n조교 노조 사무실';
    }else if (room === '060124') {
      additionalText = '\n생명나노과학대학 학생회실';
    }else if (room === '060125') {
      additionalText = '\n예비실';
    }else if (room === '060126') {
      additionalText = '\n신소재공학과 사무실';
    }else if (room === '060127') {
      additionalText = '\n예비실';
    }else if (room === '060128') {
      additionalText = '\n창의 아이디어실';
    }else if (room === '060131') {
      additionalText = '\n강의실\n-';
    }else if (room === '060132') {
      additionalText = '\n세미나실(AI융합)';
    }else if (room === '060133') {
      additionalText = '\n인공신경망연구실';
    }else if (room === '060134') {
      additionalText = '\n인공지능 컴퓨터비전 연구실';
    }else if (room === '060135') {
      additionalText = '\n자율주행 실험실';
    }

    Alert.alert('알림', `${room} ${additionalText}`, [
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
    <View style={styles.container}>
      <Image style={styles.headerImage} source={currentImage} />
      {Object.keys(floors['1F'].rooms).map((roomId) => {
        const room = floors['1F'].rooms[roomId];
        const isRotated = ['060102', '060103', '060104','060105','060106','060109','060110','060111','060112','060113','060118','060105','060123','060124','060126','060132','060133','060134'].includes(roomId);
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

      <Bottombar2 />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    width: windowWidth,
    height: windowHeight,
    
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

export default FirstFloorScreen;

