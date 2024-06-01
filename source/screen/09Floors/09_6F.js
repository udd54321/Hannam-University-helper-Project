import React , { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import floors from './engineeringFloor'; 
import Bottombar from '../../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SixthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['6F'].image);

  const showInfoAlert = (room) => {
    let additionalText = '';
    if (room === '090201') {
      additionalText = '\n';
    } else if (room === '090202') {
      additionalText = '\n';
    }

    Alert.alert('알림', `${room} 강의실입니다. ${additionalText}`, [
      {
        text: '길 안내를 시작하시겠습니까?',
        onPress: () => {
          navigation.navigate('Gil', { roomId: room, startFloor: '6F', goalFloor: '6F' }); // startFloor와 goalFloor 전달
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
      >
      <ScrollView
        style={styles.outerContainer}
        contentContainerStyle={styles.innerContainer}
        horizontal = {true}
      >
      <Image style={styles.headerImage} source={currentImage} />
      {Object.keys(floors['6F'].rooms).map((roomId) => {
        const room = floors['6F'].rooms[roomId];
        const isRotated = [ '090601-A','090601','090602','090602-A','090602-B','090603','090604','090605','090606','090608','090609','090610','090611','090612','090613','090614','090615','090616'].includes(roomId);
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
      </ScrollView>
      </ScrollView>
      <Bottombar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
  outerContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  headerImage: {
    width: windowWidth * 1.5,
    height: windowHeight * 1.5,
    resizeMode: 'stretch',
    aspectRatio: 1,
    marginBottom: 200,
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

export default SixthFloorScreen;
