import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import floors from './09Floors/engineeringFloor';  // Reference to engineeringFloor.js

const Gil = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { roomId, startFloor: initialStartFloor, goalFloor: initialGoalFloor } = route.params;

  const [path, setPath] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [destinationImage, setDestinationImage] = useState(null);
  const [startFloor, setStartFloor] = useState(initialStartFloor);
  const [goalFloor, setGoalFloor] = useState(initialGoalFloor);
  const [startRoom, setStartRoom] = useState(roomId);
  const [goalRoom, setGoalRoom] = useState(roomId);
  const [startRoomInput, setStartRoomInput] = useState(roomId);
  const [goalRoomInput, setGoalRoomInput] = useState(roomId);

  useEffect(() => {
    const calculatePath = () => {
      const start = floors[startFloor]?.rooms[startRoom];
      const goal = floors[goalFloor]?.rooms[goalRoom];

      if (!start || !goal) {
        Alert.alert('Error', 'Invalid start or goal room.');
        return;
      }

      const newPath = calculateAStarPath(start, goal, startFloor, goalFloor);
      setPath(newPath);
    };

    calculatePath();
  }, [startRoom, goalRoom, startFloor, goalFloor]);

  const calculateAStarPath = (start, goal, startFloor, goalFloor) => {
    let path = [];

    if (startFloor === goalFloor) {
      const image = floors[startFloor]?.image;
      if (!image) {
        console.error(`Image not found for floor ${startFloor}`);
        return [];
      }
      setCurrentImage(image);

      const hallway = floors[startFloor]?.hallway || [];
      path = [
        { x: start.x, y: start.y },
        ...hallway,
        { x: goal.x, y: goal.y },
      ];
    } else {
      const startImage = floors[startFloor]?.image;
      const goalImage = floors[goalFloor]?.image;
      const stairsStart = floors[startFloor]?.staircases?.['S1'] || floors[startFloor]?.staircases?.['S2'];
      const stairsGoal = floors[goalFloor]?.staircases?.['S1'] || floors[goalFloor]?.staircases?.['S2'];

      if (!startImage) {
        console.error(`Image not found for floor ${startFloor}`);
        return [];
      }
      if (!goalImage) {
        console.error(`Image not found for floor ${goalFloor}`);
        return [];
      }
      if (!stairsStart) {
        console.error(`Stairs not found for floor ${startFloor}`);
        return [];
      }
      if (!stairsGoal) {
        console.error(`Stairs not found for floor ${goalFloor}`);
        return [];
      }

      setCurrentImage(startImage);
      setDestinationImage(goalImage);

      const hallwayStart = floors[startFloor]?.hallway || [];
      const hallwayGoal = floors[goalFloor]?.hallway || [];

      path = [
        { x: start.x, y: start.y },
        ...hallwayStart,
        { x: stairsStart?.x || start.x, y: stairsStart?.y || start.y },
        { x: stairsGoal?.x || goal.x, y: stairsGoal?.y || goal.y },
        ...hallwayGoal,
        { x: goal.x, y: goal.y },
      ];
    }

    return path;
  };

  const handleSwapLocations = () => {
    setStartRoom(goalRoom);
    setGoalRoom(startRoom);
    setStartFloor(goalFloor);
    setGoalFloor(startFloor);
    setStartRoomInput(goalRoom);
    setGoalRoomInput(startRoom);
  };

  const handleStartLocationChange = (newRoom) => {
    const foundRoom = Object.keys(floors).find(floor => floors[floor].rooms[newRoom]);
    if (foundRoom) {
      setStartRoom(newRoom);
      setStartFloor(foundRoom);
    } else {
      Alert.alert('Error', 'Invalid start room number.');
    }
  };

  const handleGoalLocationChange = (newRoom) => {
    const foundRoom = Object.keys(floors).find(floor => floors[floor].rooms[newRoom]);
    if (foundRoom) {
      setGoalRoom(newRoom);
      setGoalFloor(foundRoom);
    } else {
      Alert.alert('Error', 'Invalid goal room number.');
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.roomInput}
          value={startRoomInput}
          onChangeText={setStartRoomInput}
          onSubmitEditing={() => handleStartLocationChange(startRoomInput)}
          placeholder="Start Room"
        />
        <TouchableOpacity onPress={handleSwapLocations} style={styles.swapButton}>
          <Text style={styles.swapButtonText}>⇆</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.roomInput}
          value={goalRoomInput}
          onChangeText={setGoalRoomInput}
          onSubmitEditing={() => handleGoalLocationChange(goalRoomInput)}
          placeholder="Goal Room"
        />
      </View>
      {startFloor === goalFloor ? (
        currentImage ? (
          <View style={styles.floorContainer}>
            <Image source={currentImage} style={styles.map} />
            <Svg height={windowHeight} width={windowWidth} style={StyleSheet.absoluteFill}>
              {path.map((point, index) => (
                index < path.length - 1 && (
                  <Line
                    key={`line-${index}`}
                    x1={path[index].x}
                    y1={path[index].y}
                    x2={path[index + 1].x}
                    y2={path[index + 1].y}
                    stroke="red"
                    strokeWidth="2"
                  />
                )
              ))}
              {path.map((point, index) => (
                <Circle key={`circle-${index}`} cx={point.x} cy={point.y} r="5" fill="red" />
              ))}
            </Svg>
          </View>
        ) : (
          <Text style={styles.errorText}>Image not found for floor {startFloor}</Text>
        )
      ) : (
        <View style={styles.differentFloorsContainer}>
          {currentImage ? (
            <View style={styles.halfContainer}>
              <Image source={currentImage} style={styles.map} />
              <Svg height={windowHeight} width={windowWidth / 2} style={StyleSheet.absoluteFill}>
                {path.slice(0, 2).map((point, index) => (
                  index < 1 && (
                    <Line
                      key={`line-${index}`}
                      x1={point.x}
                      y1={point.y}
                      x2={path[index + 1].x}
                      y2={path[index + 1].y}
                      stroke="red"
                      strokeWidth="2"
                    />
                  )
                ))}
                {path.slice(0, 2).map((point, index) => (
                  <Circle key={`circle-${index}`} cx={point.x} cy={point.y} r="5" fill="red" />
                ))}
              </Svg>
            </View>
          ) : (
            <Text style={styles.errorText}>Image not found for floor {startFloor}</Text>
          )}
          {destinationImage ? (
            <View style={styles.halfContainer}>
              <Image source={destinationImage} style={styles.map} />
              <Svg height={windowHeight} width={windowWidth / 2} style={StyleSheet.absoluteFill}>
                {path.slice(2).map((point, index) => (
                  index < path.slice(2).length - 1 && (
                    <Line
                      key={`line-${index}`}
                      x1={point.x}
                      y1={point.y}
                      x2={path[index + 1].x}
                      y2={path[index + 1].y}
                      stroke="red"
                      strokeWidth="2"
                    />
                  )
                ))}
                {path.slice(2).map((point, index) => (
                  <Circle key={`circle-${index}`} cx={point.x} cy={point.y} r="5" fill="red" />
                ))}
              </Svg>
            </View>
          ) : (
            <Text style={styles.errorText}>Image not found for floor {goalFloor}</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  roomText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  roomInput: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 10,
    width: 100,
    textAlign: 'center',
  },
  swapButton: {
    padding: 5,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  swapButtonText: {
    fontSize: 18,
  },
  floorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  differentFloorsContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  halfContainer: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Gil;
