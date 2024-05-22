import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet ,Text} from 'react-native'; 
import { useNavigation } from '@react-navigation/native';

const TenthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(require('../../source/image/공대9층.png'));
  
  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '091015') {
      additionalText = '\n3시-ㅇㅇ교수님의 ㅇㅇ수업\n5시-ㄹㄹ교수님의 ㄴㄴ강의';
    } else if (room === '091014') {
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
          onPress={() => showInfoAlert('091015')}
        >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>0901015</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '10%', left: '33.3%' }]}
        onPress={() => showInfoAlert('091014')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091014</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '10%', left: '79.55%' }]}
        onPress={() => showInfoAlert('091011')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091011</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '86.55%' }]}
        onPress={() => showInfoAlert('091010')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091010</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '77.3%' }]}
        onPress={() => showInfoAlert('091009')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091009</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '69%' }]}
        onPress={() => showInfoAlert('091008')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091008</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '59.5%' }]}
        onPress={() => showInfoAlert('091007')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091007</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '50.7%' }]}
        onPress={() => showInfoAlert('091006')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091006</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '41.8%' }]}
        onPress={() => showInfoAlert('091005')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091005</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '32.8%' }]}
        onPress={() => showInfoAlert('091004')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091004</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '24.2%' }]}
        onPress={() => showInfoAlert('091003')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091003</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '15.5%' }]}
        onPress={() => showInfoAlert('091002')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091002</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { top: '29%', left: '6.7%' }]}
        onPress={() => showInfoAlert('091001')}
      >
        <Text style={[styles.buttonText, { fontSize: 8 }]}>091001</Text>
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

export default TenthFloorScreen;
