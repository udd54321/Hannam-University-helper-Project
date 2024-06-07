import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import floors from './building02Floor';
import ClassInfoBottomBar from '../../component/ClassInfoBottomBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ThirdFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['02_3F'].image);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [startRoom, setStartRoom] = useState(null);

  const showInfoAlert = (room) => {
    setSelectedRoom(room);
    setStartRoom(room);
  };

  const setStartPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '02_3F', goalFloor: '02_3F' }); // startFloor와 goalFloor 전달
  };

  const setArrivalPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '02_3F', goalFloor: '02_3F' });
  };

const excludedRooms = ['023FS1', '023FS2'];


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
            horizontal={true}
          >
            <Image style={styles.headerImage} source={currentImage} />
            {Object.keys(floors['02_3F'].rooms)
                           .filter((roomId) => !excludedRooms.includes(roomId)) // 제외할 방 필터링
                           .map((roomId) => {
              const room = floors['02_3F'].rooms[roomId];
              const isRotated = [
                '020301',
                '020302',
                '020303',
                '020304',
                '020305',
                '020306',
                '020307',
                '020308',
                '020309',
                '020310',
                '020311',
                '020312',
                '020313',
                'start'
              ].includes(roomId);
              return (
                <TouchableOpacity
                  key={roomId}
                  style={[styles.button, { top: `${room.y - 1}%`, left: `${room.x}%` }]} // Move slightly higher
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
        <ClassInfoBottomBar
          selectedRoom={selectedRoom}
          startRoom={startRoom}
          setStartPointer={setStartPointer}
          setArrivalPointer={setArrivalPointer}
        />
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

export default ThirdFloorScreen;
