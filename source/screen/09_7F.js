import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet,Text } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const SeventhFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대7층.png'));

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '090717') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090716') {
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
        style={[styles.button, { top: '7.5%', left: '26.9%' }]}
        onPress={() => showInfoAlert('090716')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '7.5%', left: '34.9%' }]}
        onPress={() => showInfoAlert('090715')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '7.5%', left: '78.2%' }]}
        onPress={() => showInfoAlert('090712')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '7.5%', left: '86.55%' }]}
        onPress={() => showInfoAlert('090711')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '86.55%' }]}
        onPress={() => showInfoAlert('090710')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '78.2%' }]}
        onPress={() => showInfoAlert('090709')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '69.6%' }]}
        onPress={() => showInfoAlert('090708')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '61.2%' }]}
        onPress={() => showInfoAlert('090707')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '52.7%' }]}
        onPress={() => showInfoAlert('090706')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '43.9%' }]}
        onPress={() => showInfoAlert('090705')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '35.2%' }]}
        onPress={() => showInfoAlert('090704')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '26.6%' }]}
        onPress={() => showInfoAlert('090703')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '18.1%' }]}
        onPress={() => showInfoAlert('090702')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '26.5%', left: '9%' }]}
        onPress={() => showInfoAlert('090701')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '7.5%', left: '18%' }]}
        onPress={() => showInfoAlert('090717')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>090801</Text>
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

export default SeventhFloorScreen;
