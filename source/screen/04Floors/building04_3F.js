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

const ThirdFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['3F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '020301') {
      additionalText = '\n';
    } else if (room === '020302') {
      additionalText = '\n';
    }else if (room === '020303') {
      additionalText = '\n';
    }else if (room === '020304') {
      additionalText = '\n';
    }else if (room === '020305') {
      additionalText = '\n';
    }else if (room === '020306') {
      additionalText = '\n';
    }else if (room === '020307') {
      additionalText = '\n';
    }else if (room === '020301') {
      additionalText = '\n';
    }else if (room === '020308') {
      additionalText = '\n';
    }else if (room === '020309') {
      additionalText = '\n';
    }else if (room === '020310') {
      additionalText = '\n';
    }else if (room === '020311') {
      additionalText = '\n';
    }else if (room === '020312') {
      additionalText = '\n';
    }else if (room === '020313') {
      additionalText = '\n';
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
        const isRotated = [ '040301','040302','040303','040304','040305','040306','040307','040387','040308','040309','040310','040311','040312','040320','040321','040322','040323','040324','040325','040326','040327','040328','040329','040330','040330-A'].includes(roomId);
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

export default ThirdFloorScreen;
