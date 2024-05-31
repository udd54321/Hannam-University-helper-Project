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
import floors from './building06Floor'

const SecondFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['2F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '060201') {
      additionalText = '\n강의실\n-고급AI실습1(송진호)_금5,6,7';
    } else if (room === '060202') {
      additionalText = '\n실헙준비실';
    }else if (room === '060203') {
      additionalText = '\n교수연구실(조재흥)';
    }else if (room === '060204') {
      additionalText = '\n교수연구실(윤성식)';
    }else if (room === '060205') {
      additionalText = '\n교수연구실(김준영)';
    }else if (room === '060206') {
      additionalText = '\n교수연구실(김선휘)';
    }else if (room === '060207') {
      additionalText = '\n교수연구실(장재승)';
    }else if (room === '060207-A') {
      additionalText = '\n교수연구실(이회혁)';
    }else if (room === '060208') {
      additionalText = '\n교수연구실(최승오)';
    }else if (room === '060209') {
      additionalText = '\n교수연구실(송진오)';
    }else if (room === '060210-A') {
      additionalText = '\n네트워크실';
    }else if (room === '060210') {
      additionalText = '\n스마트융합대학 부속실';
    }else if (room === '060211') {
      additionalText = '\n생활체육학과 사무실';
    }else if (room === '060212') {
      additionalText = '\n강의실\n-기능해부학(장재승)_화2,3,5,6\n-운동생리학(이희혁)_화B/목B\n-운동학습/제어 및 발달(최승오)_월2,3/수3\n-특수 체육론(최승오)_월1/수1,2';
    }else if (room === '060213') {
      additionalText = '\n강의실\n-수영지도법(장재승)_목4,5,6\n-수영지도법(장재승)_목7,8,9\n-전문실기1(이희혁)_금1,2,3\n-전문실기1(이희혁)_금4,5,6\n-운동역학(유경석)_월1,2,3,4\n-운동역학(유경석)_수1,2,3,4\n-전문실기2(장재승)_토1,2,3\n-전문실기2(장재승)_토4,5,6';
    }else if (room === '060214') {
      additionalText = '\n자연과학연구소';
    }else if (room === '060217') {
      additionalText = '\n세미나실(생나대)';
    }else if (room === '060218') {
      additionalText = '\n스마트융헙대학 학장실';
    }else if (room === '060219') {
      additionalText = '\n일반화학 전담 교수실';
    }else if (room === '060220') {
      additionalText = '\n일반화학 기자재실';
    }else if (room === '060221') {
      additionalText = '\n역학심리 실험실';
    }else if (room === '060222') {
      additionalText = '\n예비실';
    }else if (room === '060223') {
      additionalText = '\n인체실험실\n';
    }else if (room === '060224') {
      additionalText = '\n화학실험준비실';
    }else if (room === '060225') {
      additionalText = '\n일반화학실험실\n-일반화학및실험(오민석)_수6,7\n-일반화학및실험실(오민석)_수8,9';
    }else if (room === '060228') {
      additionalText = '\n강의실\n-최적화이론(윤성식)_화B/수B\n-딥러인심화이론(송진호)_월B/수B\n';
    }else if (room === '060229') {
      additionalText = '\n광전자물리실험실';
    }else if (room === '060230') {
      additionalText = '\n광전자물리실험실';
    }else if (room === '060231') {
      additionalText = '\n캡스톤디자인실';
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
        const isRotated = [ '060202','060203','060204','060205','060206','060207','060207-A','060208','060209','060210','060210-A','060211','060224','060229','060231'].includes(roomId);
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

export default SecondFloorScreen;
