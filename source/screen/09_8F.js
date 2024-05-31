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

const EighthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대8층.png'));

  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '090816') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '090815') {
      additionalText = '\ng';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('home');
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
        style={[styles.button, {top: '8.5%', left: '18%'}]}
        onPress={() => showInfoAlert('090816')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090816</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '8.5%', left: '31.2%'}]}
        onPress={() => showInfoAlert('090815')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090815</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '8.5%', left: '74.2%'}]}
        onPress={() => showInfoAlert('090812')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090812</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '8.5%', left: '82.55%'}]}
        onPress={() => showInfoAlert('090811')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090811</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '82.55%'}]}
        onPress={() => showInfoAlert('090810')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090810</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '74.2%'}]}
        onPress={() => showInfoAlert('090809')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090809</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '65.9%'}]}
        onPress={() => showInfoAlert('090808')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090808</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '57.6%'}]}
        onPress={() => showInfoAlert('090807')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090807</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '49.4%'}]}
        onPress={() => showInfoAlert('090806')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090806</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '41.1%'}]}
        onPress={() => showInfoAlert('090805')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090805</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '32.8%'}]}
        onPress={() => showInfoAlert('090804')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090804</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '24.4%'}]}
        onPress={() => showInfoAlert('090803')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090803</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '16.1%'}]}
        onPress={() => showInfoAlert('090802')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090802</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, {top: '26.8%', left: '7.8%'}]}
        onPress={() => showInfoAlert('090801')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>090801</Text>
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

export default EighthFloorScreen;
