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

      const newPath = calculateDijkstraPath(start, goal, startFloor, goalFloor);
      setPath(newPath);
    };

    calculatePath();
  }, [startRoom, goalRoom, startFloor, goalFloor]);

  useEffect(() => {
    const startImage = floors[startFloor]?.image;
    const goalImage = floors[goalFloor]?.image;

    if (startImage) {
      setCurrentImage(startImage);
    } else {
      console.error(`Image not found for floor ${startFloor}`);
    }

    if (goalImage && startFloor !== goalFloor) {
      setDestinationImage(goalImage);
    }
  }, [startFloor, goalFloor]);

  const calculateDijkstraPath = (start, goal, startFloor, goalFloor) => {
    let path = [];

    if (startFloor === goalFloor) {
      const image = floors[startFloor]?.image;
      if (!image) {
        console.error(`Image not found for floor ${startFloor}`);
        return [];
      }
      setCurrentImage(image);

      path = findShortestPath(start, goal, startFloor);
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

      const pathToStairs = findShortestPath(start, stairsStart, startFloor);
      const pathFromStairs = findShortestPath(stairsGoal, goal, goalFloor);

      path = [
        ...pathToStairs,
        { x: stairsStart.x, y: stairsStart.y },
        { x: stairsGoal.x, y: stairsGoal.y },
        ...pathFromStairs,
      ];
    }

    return path;
  };

  const findShortestPath = (start, goal, floor) => {
    const graph = buildGraph(floor);
    const distances = {};
    const previous = {};
    const queue = [];

    const startKey = `${start.x},${start.y}`;
    const goalKey = `${goal.x},${goal.y}`;

    for (let node in graph) {
      distances[node] = Infinity;
      previous[node] = null;
      queue.push(node);
    }

    distances[startKey] = 0;

    while (queue.length > 0) {
      queue.sort((a, b) => distances[a] - distances[b]);
      const currentNode = queue.shift();

      if (currentNode === goalKey) {
        break;
      }

      for (let neighbor in graph[currentNode]) {
        const alt = distances[currentNode] + graph[currentNode][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = currentNode;
        }
      }
    }

    const shortestPath = [];
    let currentNode = goalKey;

    while (currentNode) {
      shortestPath.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    const pathWithCoordinates = shortestPath.map(node => {
      const [x, y] = node.split(',').map(Number);
      return { x, y };
    });

    return pathWithCoordinates;
  };

  const buildGraph = (floor) => {
    const graph = {};

    const rooms = floors[floor].rooms;
    const hallways = floors[floor].hallway;
    const staircases = floors[floor].staircases;

    const allNodes = [...Object.values(rooms), ...hallways, ...Object.values(staircases)];

    allNodes.forEach((node, index) => {
      const key = `${node.x},${node.y}`;
      graph[key] = {};
      allNodes.forEach((otherNode, otherIndex) => {
        if (index !== otherIndex) {
          const otherKey = `${otherNode.x},${otherNode.y}`;
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          graph[key][otherKey] = distance;
        }
      });
    });

    return graph;
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

  const scaleCoordinates = (coordinate, imageDimensions) => {
    if (!coordinate) {
      return { x: 0, y: 0 };
    }
    const { width, height } = imageDimensions;
    const xScale = width / 100;
    const yScale = height / 100;
    return { x: coordinate.x * xScale, y: coordinate.y * yScale };
  };

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
              {path.map((point, index) => {
                const scaledPoint = scaleCoordinates(point, { width: windowWidth, height: windowHeight });
                const nextPoint = path[index + 1] ? scaleCoordinates(path[index + 1], { width: windowWidth, height: windowHeight }) : null;
                return (
                  nextPoint && (
                    <Line
                      key={`line-${index}`}
                      x1={scaledPoint.x}
                      y1={scaledPoint.y}
                      x2={nextPoint.x}
                      y2={nextPoint.y}
                      stroke="red"
                      strokeWidth="2"
                    />
                  )
                );
              })}
              {path.map((point, index) => {
                const scaledPoint = scaleCoordinates(point, { width: windowWidth, height: windowHeight });
                return <Circle key={`circle-${index}`} cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="red" />;
              })}
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
                {path.slice(0, Math.ceil(path.length / 2)).map((point, index) => {
                  const scaledPoint = scaleCoordinates(point, { width: windowWidth / 2, height: windowHeight });
                  const nextPoint = path[index + 1] ? scaleCoordinates(path[index + 1], { width: windowWidth / 2, height: windowHeight }) : null;
                  return (
                    nextPoint && (
                      <Line
                        key={`line-${index}`}
                        x1={scaledPoint.x}
                        y1={scaledPoint.y}
                        x2={nextPoint.x}
                        y2={nextPoint.y}
                        stroke="red"
                        strokeWidth="2"
                      />
                    )
                  );
                })}
                {path.slice(0, Math.ceil(path.length / 2)).map((point, index) => {
                  const scaledPoint = scaleCoordinates(point, { width: windowWidth / 2, height: windowHeight });
                  return <Circle key={`circle-${index}`} cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="red" />;
                })}
              </Svg>
            </View>
          ) : (
            <Text style={styles.errorText}>Image not found for floor {startFloor}</Text>
          )}
          {destinationImage ? (
            <View style={styles.halfContainer}>
              <Image source={destinationImage} style={styles.map} />
              <Svg height={windowHeight} width={windowWidth / 2} style={StyleSheet.absoluteFill}>
                {path.slice(Math.ceil(path.length / 2)).map((point, index) => {
                  const scaledPoint = scaleCoordinates(point, { width: windowWidth / 2, height: windowHeight });
                  const nextPoint = path[index + 1] ? scaleCoordinates(path[index + 1], { width: windowWidth / 2, height: windowHeight }) : null;
                  return (
                    nextPoint && (
                      <Line
                        key={`line-${index}`}
                        x1={scaledPoint.x}
                        y1={scaledPoint.y}
                        x2={nextPoint.x}
                        y2={nextPoint.y}
                        stroke="red"
                        strokeWidth="2"
                      />
                    )
                  );
                })}
                {path.slice(Math.ceil(path.length / 2)).map((point, index) => {
                  const scaledPoint = scaleCoordinates(point, { width: windowWidth / 2, height: windowHeight });
                  return <Circle key={`circle-${index}`} cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="red" />;
                })}
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
