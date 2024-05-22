import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const EleventhFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대9층.png'));

  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '091115') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '091114') {
      additionalText = '\ng';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('NavigationScreen');
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

      <TouchableOpacity
        style={[styles.button, {top: '10%', left: '19.8%'}]}
        onPress={() => showInfoAlert('091115')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>0901115</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '10%', left: '33.3%'}]}
        onPress={() => showInfoAlert('091114')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091114</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '10%', left: '79.55%'}]}
        onPress={() => showInfoAlert('091111')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091111</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '86.55%'}]}
        onPress={() => showInfoAlert('091110')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091110</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '77.3%'}]}
        onPress={() => showInfoAlert('091109')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091109</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '69%'}]}
        onPress={() => showInfoAlert('091108')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091108</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '59.5%'}]}
        onPress={() => showInfoAlert('091107')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091107</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '50.7%'}]}
        onPress={() => showInfoAlert('091106')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091106</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '41.8%'}]}
        onPress={() => showInfoAlert('091105')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091105</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '32.8%'}]}
        onPress={() => showInfoAlert('091104')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091104</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '24.2%'}]}
        onPress={() => showInfoAlert('091103')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091103</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '15.5%'}]}
        onPress={() => showInfoAlert('091102')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091102</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '29%', left: '6.7%'}]}
        onPress={() => showInfoAlert('091101')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091101</Text>
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

export default EleventhFloorScreen;
