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
import floors from './building06Floor';
import ClassInfoBottomBar from '../../component/ClassInfoBottomBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FourthFloorScreen = () => {
  const navigation = useNavigation();
  const [currentImage] = useState(floors['4F'].image);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [startRoom, setStartRoom] = useState(null);

  const showInfoAlert = (room) => {
    setSelectedRoom(room);
    setStartRoom(room);
  };

  const setStartPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '4F', goalFloor: '4F' }); // startFloor와 goalFloor 전달
  };

  const setArrivalPointer = (room) => {
    navigation.navigate('Gil', { roomId: room, startFloor: '4F', goalFloor: '4F' });
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
            horizontal={true}
          >
            <Image style={styles.headerImage} source={currentImage} />
            {Object.keys(floors['4F'].rooms).map((roomId) => {
              const room = floors['4F'].rooms[roomId];
              const isRotated = [
                '060402',
        '060403',
        '060404',
        '060405',
        '060406-A',
        '060406-B',
        '060407',
        '060408',
        '060409',
        '060410',
        '060411',
        '060412',
        '060413',
        '060414',
        '060415',
        '060416',
        '060417',
        '060418',
        '060419',
        '060420',
        '060421',
        '060424',
        '060425',
        '060426',
        '060428',
        '060429',
        '060431',
        '060432',
        '060433',
        '060434',
        '060435',
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
