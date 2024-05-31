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
import floors from './building06Floor'; 

const ThirdFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['3F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '060301') {
      additionalText = '\n건축학과사무실';
    } else if (room === '060301-A') {
      additionalText = '\n건축학과전용도서실';
    }else if (room === '060301-B') {
      additionalText = '\n인증자료실';
    }else if (room === '060302') {
      additionalText = '\n조형실실습실';
    }else if (room === '060303') {
      additionalText = '\n기자재창고';
    }else if (room === '060303-A') {
      additionalText = '\n교수연구실(백한열)';
    }else if (room === '060304') {
      additionalText = '\n예비실';
    }else if (room === '060305') {
      additionalText = '\n교수연구실(신현준)';
    }else if (room === '060306') {
      additionalText = '\n교수연구실(강인호)';
    }else if (room === '060307') {
      additionalText = '\n교수연구실(한필원)';
    }else if (room === '060308') {
      additionalText = '\n교수연구실(정재훈)';
    }else if (room === '060309') {
      additionalText = '\n교수연구실(김학래)';
    }else if (room === '0n60310') {
      additionalText = '\n교수연구실(신현보)';
    }else if (room === '060311') {
      additionalText = '\n평가 및 전시실';
    }else if (room === '060312') {
      additionalText = '\n교수연구실(유경석)';
    }else if (room === '060313') {
      additionalText = '\n교수연구실(이회영)';
    }else if (room === '060314') {
      additionalText = '\n교수연구실(한동유)';
    }else if (room === '060315') {
      additionalText = '\n교수연구실(김경민)';
    }else if (room === '060316') {
      additionalText = '\n교수연구실(김상배)';
    }else if (room === '060317') {
      additionalText = '\n교수연구실(김화정)';
    }else if (room === '060318') {
      additionalText = '\n교수연구실(노금환)';
    }else if (room === '060319') {
      additionalText = '\n교수연구실(최은미)';
    }else if (room === '060320') {
      additionalText = '\n교수연구실(유천성)';
    }else if (room === '060321') {
      additionalText = '\n교수연구실(김지현)';
    }else if (room === '060322') {
      additionalText = '\n수학과 사무실';
    }else if (room === '060323') {
      additionalText = '\n수리자료실';
    }else if (room === '060325') {
      additionalText = '\n생나대 열람실';
    }else if (room === '060326') {
      additionalText = '\nPC실';
    }else if (room === '060327') {
      additionalText = '\n스마트융합대학 학생회';
    }else if (room === '060329') {
      additionalText = '\n예비실';
    }else if (room === '060330') {
      additionalText = '\n응용수학과실습실';
    }else if (room === '060331') {
      additionalText = '\n시청각실 실습실';
    }else if (room === '060332') {
      additionalText = '\n수학과 실습실';
    }else if (room === '060333') {
      additionalText = '\n수학과 실습실';
    }else if (room === '060334') {
      additionalText = '\n강의실\n-과학교과교육론_수10,11,12\n-스포츠영어(한동유)_금5,6,7\n-스포츠 경영(한동유)_화D/목D\n-자기계발과미래설계(임찬석)_월5\n-유기화학1(정종진)_화G/목G\n-인간과 과학기술(정종진)_화6/금2,3\n-대학수학1(김영록)_화3/목2,3';
    }else if (room === '060335') {
      additionalText = '\n강의실\n-파이썬 프로그래밍1(김준영)_수5,6\n-선형대수학(윤성식)_월A/수A\n-인공신경망개론(윤성식)_월B/화A\n-AI프로그래밍2(송진호)_월6/목7,8\n-컴퓨터비전(송진호)_월E/수E\n';
    }else if (room === '060336') {
      additionalText = '\n예비실';
    }else if (room === '060337') {
      additionalText = '\n강의실\n';
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
        const isRotated = [ '060334','060301','060301-A','060301-B','060302','060306','060303','060304','060305','06030','060307','060308','060309','060310','060312','060313','060314','060315','060316','060317','060318','060319','060320','060321','060322',].includes(roomId);
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
