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

import floors from './building04Floor'
import Bottombar2 from '../../component/bottomBar2'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FirstFloorScreen = ({navigation}) => {
 

  const [currentImage] = useState(floors['1F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '040101') {
      additionalText = '\n\n-';
    } else if (room === '020102') {
      additionalText = '\n';
    }else if (room === '020103') {
      additionalText = '\n';
    }else if (room === '020104') {
      additionalText = '\n';
    }else if (room === '020105') {
      additionalText = '\n';
    }else if (room === '020106') {
      additionalText = '\n';
    }else if (room === '020108') {
      additionalText = '\n';
    }else if (room === '020109') {
      additionalText = '\n';
    }else if (room === '020110') {
      additionalText = '\n';
    }else if (room === '020113') {
      additionalText = '\n';
    }

    Alert.alert('알림', `${room}  ${additionalText}`, [
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
        const isRotated = ['040103-A', '040106', '040108','040108-A'].includes(roomId);
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

export default FirstFloorScreen;

