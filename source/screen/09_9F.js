import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet ,Text} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const NinthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대9층.png'));
  
  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '090915') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090914') {
      additionalText = '\ng';
    }

    Alert.alert(
      '알림',
      `${room} 강의실입니다. ${additionalText}`,
      [
        {
          text: '길 안내를 시작하시겠습니까?',
          onPress: () => {
            navigation.navigate('NavigationScreen');
          }
        },
        {
          text: '아니오',
          onPress: () => console.log('아니오 버튼이 눌렸습니다.'),
          style: 'cancel'
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={currentImage} 
      />
      
      <TouchableOpacity
          style={[styles.button, { top: '10%', left: '19.8%' }]}
          onPress={() => showInfoAlert('090915')}
        >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090915</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '10%', left: '33.3%' }]}
        onPress={() => showInfoAlert('090914')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090914</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '10%', left: '79.55%' }]}
        onPress={() => showInfoAlert('090911')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090911</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '86.55%' }]}
        onPress={() => showInfoAlert('090910')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090910</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '77.3%' }]}
        onPress={() => showInfoAlert('090909')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090909</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '68%' }]}
        onPress={() => showInfoAlert('090908')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090908</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '59.5%' }]}
        onPress={() => showInfoAlert('090907')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090907</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '50.7%' }]}
        onPress={() => showInfoAlert('090906')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090906</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '41.8%' }]}
        onPress={() => showInfoAlert('090905')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090905</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '32.8%' }]}
        onPress={() => showInfoAlert('090904')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090904</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '24.2%' }]}
        onPress={() => showInfoAlert('090903')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090903</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '15.5%' }]}
        onPress={() => showInfoAlert('090902')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090901</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '6.7%' }]}
        onPress={() => showInfoAlert('090901')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090901</Text>
      </TouchableOpacity>
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
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  button: {
    position: 'absolute',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default NinthFloorScreen;
