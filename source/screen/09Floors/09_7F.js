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
import floors from './engineeringFloor';
import ClassInfoBottomBar from '../../component/ClassInfoBottomBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ThirdFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['09_7F'].image);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [startRoom, setStartRoom] = useState(null);

  const showInfoAlert = (room) => {
    setSelectedRoom(room);
    setStartRoom(room);
  };

  const setStartPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '09_7F', goalFloor: '09_7F' }); // startFloor와 goalFloor 전달
  };

  const setArrivalPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '09_7F', goalFloor: '09_7F' });
  };

const excludedRooms = ['097FS1', '097FS2', '097FS3'];

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
            {Object.keys(floors['09_7F'].rooms)
                           .filter((roomId) => !excludedRooms.includes(roomId)) // 제외할 방 필터링
                           .map((roomId) => {
              const room = floors['09_7F'].rooms[roomId];
              const isRotated = [

                '090716',
                '090715',
                '090712',
                '090711',
                '090710',
                '090709',
                '090708',
                '090707',
                '090706',
                '090705',
                '090704',
                '090703',
                '090702',
                '090701',
                '090717'

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
