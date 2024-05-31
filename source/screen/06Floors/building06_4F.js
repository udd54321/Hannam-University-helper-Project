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

const FourthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['4F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '060401') {
      additionalText = '\n포트폴리오 보관실';
    } else if (room === '060402') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오1(김학래)_월6,7,8,9/수6,7,8,9';
    } else if (room === '060403') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오1(이양훈)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060404') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오1(구본건)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060405') {
      additionalText = '\n2학년 설계실\n-건축설계 스튜디오1(박인규)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060406-A') {
      additionalText = '\n2학년 설계실\n-건축설계 스튜디오3(정재훈)_월6,7,8,9,10/목6,7,8,9,10';
    }else if (room === '060406-B') {
      additionalText = '\n2학년 설계실\n-건축설계 스튜디오3(조정희)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060407') {
      additionalText = '\n4학년 설계실\n-건축설계 스튜디오3_월6,7,8,9/수6,7,8,9';
    }else if (room === '060408') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오5(한필원)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060409') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오5(한도완)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060410') {
      additionalText = '\n1학년 설계실\n-건축설계 스튜디오5(정승환)_월6,7,8,9/수6,7,8,9';
    }else if (room === '060411') {
      additionalText = '\n교수연구실(김정아)';
    }else if (room === '060412') {
      additionalText = '\n교수연구실(정병온)';
    }else if (room === '060413') {
      additionalText = '\n교수연구실(김천희)';
    }else if (room === '060414') {
      additionalText = '\n교수연구실(김윤희)';
    }else if (room === '060415') {
      additionalText = '\n교수연구실(김정신)';
    }else if (room === '060416') {
      additionalText = '\n교수연구실(이은영)';
    }else if (room === '060417') {
      additionalText = '\n패션디자인실';
    }else if (room === '060418') {
      additionalText = '\n패션디자인학과 사무실';
    }else if (room === '060419') {
      additionalText = '\n의복설계실';
    }else if (room === '060420') {
      additionalText = '\n의복구성실';
    }else if (room === '060421') {
      additionalText = '\n특수의복구성실';
    }else if (room === '060424') {
      additionalText = '\n드레이핑실';
    }else if (room === '060425') {
      additionalText = '\n전통복식실';
    }else if (room === '060426') {
      additionalText = '\n한국복식보관실';
    }else if (room === '060427') {
      additionalText = '\n서양복구성 재료실';
    }else if (room === '060428') {
      additionalText = '\n서양복보관 정리실';
    }else if (room === '060429') {
      additionalText = '\n네트워크실';
    }else if (room === '060431') {
      additionalText = '\n의복재료실험실\n-고감성텍스타일감성(정우영)_목6,7,8,9';
    }else if (room === '060432') {
      additionalText = '\n의복환경실험실';
    }else if (room === '060433') {
      additionalText = '\nCAD실\n-디자인CAD(최윤희)_월1,2,3\n-디자인CAD(최윤희)_월4,5,6\n-디지털텍스타일디자인(정우영)_목2,3,4\n';
    }else if (room === '060434') {
      additionalText = '\n염색 실습실';
    }else if (room === '060435') {
      additionalText = '\n염색실습준비실';
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
        const isRotated = [ '060401','060402','060403','060404','060405','060406-A','060406-B','060407','060408','060409','060410','060411','060412','060413','060414','060415','060416','060418','060432','060435',].includes(roomId);
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
