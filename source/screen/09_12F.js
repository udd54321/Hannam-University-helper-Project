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

const TwelvethFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대12층.png'));

  const showInfoAlert = room => {
    let additionalText = '';
    if (room === '091201') {
      additionalText = '\n';
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
        style={[styles.button, {top: '23%', left: '44.8%'}]}
        onPress={() => showInfoAlert('091201')}>
        <Text style={[styles.buttonText, {fontSize: 8}]}>091201</Text>
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

export default TwelvethFloorScreen;
