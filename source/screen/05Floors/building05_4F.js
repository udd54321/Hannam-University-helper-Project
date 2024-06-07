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
import floors from './building05Floor';
import ClassInfoBottomBar from '../../component/ClassInfoBottomBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FourthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['05_4F'].image);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [startRoom, setStartRoom] = useState(null);

  const showInfoAlert = (room) => {
    setSelectedRoom(room);
    setStartRoom(room);
  };

  const setStartPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '05_4F', goalFloor: '05_4F' }); // startFloor와 goalFloor 전달
  };

  const setArrivalPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '05_4F', goalFloor: '05_4F' });
  };
const excludedRooms = ['054FS1', '054FS2', '054FS3', '054FS4'];
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
            {Object.keys(floors['05_4F'].rooms)
                           .filter((roomId) => !excludedRooms.includes(roomId)) // 제외할 방 필터링
                           .map((roomId) => {
              const room = floors['05_4F'].rooms[roomId];
              const isRotated = [
                '050401',
        '050402',
        '050403',
        '050404',
        '050405',
        '050406',
        '050409',
        '050410',
        '050411',
        '050412',
        '050413',
        '050414',
        '050415',
        '050416',
        '050417',
        '050418',
        '050419',
        '050420',
        '050421',
        '050422',
        '050423',
        '050424',
        '050425',
        '050426',
        '050430',
        '050431',
        '050432',
        '050433',
        '050434',
        '050435',
        '050436',
        '050440',
        '050441',
        '050442',
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

export default FourthFloorScreen;
