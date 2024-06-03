import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle, Text as SvgText } from 'react-native-svg';
import floors from './09Floors/engineeringFloor';

const Gil = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { roomId, startFloor: initialStartFloor, goalFloor: initialGoalFloor } = route.params;

  const [path, setPath] = useState([]);
  const [hallwaysOnFloor, setHallwaysOnFloor] = useState([]);
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

      const { path } = calculateDijkstraPath(start, goal, startFloor, goalFloor);
      setPath(path);
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

    if (floors[startFloor]) {
      setHallwaysOnFloor(floors[startFloor].hallway);
    }
  }, [startFloor, goalFloor]);

  const calculateDijkstraPath = (start, goal, startFloor, goalFloor) => {
    let path = [];

    if (startFloor === goalFloor) {
      const image = floors[startFloor]?.image;
      if (!image) {
        console.error(`Image not found for floor ${startFloor}`);
        return { path: [] };
      }
      setCurrentImage(image);

      path = findShortestPathWithHallways(start, goal, startFloor);
    } else {
      const startImage = floors[startFloor]?.image;
      const goalImage = floors[goalFloor]?.image;
      const stairsStart = findNearestStaircase(start, startFloor);
      const stairsGoal = findNearestStaircase(goal, goalFloor);

      if (!startImage) {
        console.error(`Image not found for floor ${startFloor}`);
        return { path: [] };
      }
      if (!goalImage) {
        console.error(`Image not found for floor ${goalFloor}`);
        return { path: [] };
      }
      if (!stairsStart) {
        console.error(`Stairs not found for floor ${startFloor}`);
        return { path: [] };
      }
      if (!stairsGoal) {
        console.error(`Stairs not found for floor ${goalFloor}`);
        return { path: [] };
      }

      setCurrentImage(startImage);
      setDestinationImage(goalImage);

      const pathToStairs = findShortestPathWithHallways(start, stairsStart, startFloor);
      const pathFromStairs = findShortestPathWithHallways(stairsGoal, goal, goalFloor);

      path = [
        ...pathToStairs,
        { x: stairsStart.x, y: stairsStart.y },
        { x: stairsGoal.x, y: stairsGoal.y },
        ...pathFromStairs,
      ];
    }

    return { path };
  };

  const findShortestPathWithHallways = (start, goal, floor) => {
    const graph = buildGraphWithHallways(start, goal, floor);
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

  const buildGraphWithHallways = (start, goal, floor) => {
    const graph = {};

    const rooms = floors[floor].rooms;
    const hallways = floors[floor].hallway;
    const staircases = floors[floor].staircases;

    const allNodes = [
      ...Object.values(rooms),
      ...hallways,
      ...Object.values(staircases)
    ];

    allNodes.forEach((node, index) => {
      const key = `${node.x},${node.y}`;
      graph[key] = {};
      if (node.connections) {
        node.connections.forEach((connectionIndex) => {
          const otherNode = hallways[connectionIndex];
          const otherKey = `${otherNode.x},${otherNode.y}`;
          const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
          graph[key][otherKey] = distance;
        });
      }
    });

    return graph;
  };

  const findNearestStaircase = (point, floor) => {
    let minDistance = Infinity;
    let nearestStaircase = null;
    const staircases = Object.values(floors[floor].staircases);

    staircases.forEach(staircase => {
      const distance = Math.hypot(point.x - staircase.x, point.y - staircase.y);
      if (distance < minDistance) {
        minDistance = distance;
        nearestStaircase = staircase;
      }
    });

    return nearestStaircase;
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

  const findNearestHallway = (point, hallways) => {
    let minDistance = Infinity;
    let nearestHallway = null;

    hallways.forEach(hallway => {
      const distance = Math.hypot(point.x - hallway.x, point.y - hallway.y);
      if (distance < minDistance) {
        minDistance = distance;
        nearestHallway = hallway;
      }
    });

    return nearestHallway;
  };

  const getHallwayConnections = (hallways) => {
    const connections = [];
    hallways.forEach((hallway) => {
      hallway.connections.forEach((connectionIndex) => {
        connections.push([hallway, hallways[connectionIndex]]);
      });
    });
    return connections;
  };

  const drawGreenLineToNearestHallway = (room, hallways) => {
    const nearestHallway = findNearestHallway(room, hallways);
    if (nearestHallway) {
      return (
        <Line
          x1={scaleCoordinates(room, { width: windowWidth, height: windowHeight }).x}
          y1={scaleCoordinates(room, { width: windowWidth, height: windowHeight }).y}
          x2={scaleCoordinates(nearestHallway, { width: windowWidth, height: windowHeight }).x}
          y2={scaleCoordinates(nearestHallway, { width: windowWidth, height: windowHeight }).y}
          stroke="green"
          strokeWidth="2"
        />
      );
    }
    return null;
  };

  const drawBlueLinesThroughHallways = (startHallway, goalHallway, hallways) => {
    const path = findShortestPathWithHallways(startHallway, goalHallway, startFloor);
    return path.map((node, index) => {
      if (index === path.length - 1) return null;
      return (
        <Line
          key={`blue-line-${index}`}
          x1={scaleCoordinates(node, { width: windowWidth, height: windowHeight }).x}
          y1={scaleCoordinates(node, { width: windowWidth, height: windowHeight }).y}
          x2={scaleCoordinates(path[index + 1], { width: windowWidth, height: windowHeight }).x}
          y2={scaleCoordinates(path[index + 1], { width: windowWidth, height: windowHeight }).y}
          stroke="blue"
          strokeWidth="2"
        />
      );
    });
  };

  const filterConnectedHallways = (hallways, path) => {
    const pathSet = new Set(path.map(node => `${node.x},${node.y}`));
    return hallways.filter(hallway => pathSet.has(`${hallway.x},${hallway.y}`));
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
              <Circle
                cx={scaleCoordinates(floors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).x}
                cy={scaleCoordinates(floors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).y}
                r="5"
                fill="red"
              />
              <Circle
                cx={scaleCoordinates(floors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).x}
                cy={scaleCoordinates(floors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).y}
                r="5"
                fill="red"
              />
              {filterConnectedHallways(hallwaysOnFloor, path).map((hallway, index) => {
                const scaledPoint = scaleCoordinates(hallway, { width: windowWidth, height: windowHeight });
                return (
                  <React.Fragment key={`hallway-${index}`}>
                    <Circle cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="blue" />
                    <SvgText x={scaledPoint.x} y={scaledPoint.y - 5} fontSize="10" fill="black">
                      {`(${hallway.x}, ${hallway.y})`}
                    </SvgText>
                  </React.Fragment>
                );
              })}
              {drawGreenLineToNearestHallway(floors[startFloor]?.rooms[startRoom], hallwaysOnFloor)}
              {drawGreenLineToNearestHallway(floors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor)}
              {drawBlueLinesThroughHallways(
                findNearestHallway(floors[startFloor]?.rooms[startRoom], hallwaysOnFloor),
                findNearestHallway(floors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor),
                hallwaysOnFloor
              )}
            </Svg>
          </View>
        ) : (
          <Text>Loading floor image...</Text>
        )
      ) : (
        <View style={styles.dualFloorsContainer}>
          {currentImage && (
            <View style={styles.floorContainer}>
              <Image source={currentImage} style={styles.map} />
              <Svg height={windowHeight} width={windowWidth} style={StyleSheet.absoluteFill}>
                <Circle
                  cx={scaleCoordinates(floors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).x}
                  cy={scaleCoordinates(floors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).y}
                  r="5"
                  fill="red"
                />
                {filterConnectedHallways(hallwaysOnFloor, path).map((hallway, index) => {
                  const scaledPoint = scaleCoordinates(hallway, { width: windowWidth, height: windowHeight });
                  return (
                    <React.Fragment key={`hallway-${index}`}>
                      <Circle cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="blue" />
                      <SvgText x={scaledPoint.x} y={scaledPoint.y - 5} fontSize="10" fill="black">
                        {`(${hallway.x}, ${hallway.y})`}
                      </SvgText>
                    </React.Fragment>
                  );
                })}
                {drawGreenLineToNearestHallway(floors[startFloor]?.rooms[startRoom], hallwaysOnFloor)}
                {drawBlueLinesThroughHallways(
                  findNearestHallway(floors[startFloor]?.rooms[startRoom], hallwaysOnFloor),
                  findNearestHallway(floors[startFloor]?.rooms[startRoom], hallwaysOnFloor),
                  hallwaysOnFloor
                )}
              </Svg>
            </View>
          )}
          {destinationImage && (
            <View style={styles.floorContainer}>
              <Image source={destinationImage} style={styles.map} />
              <Svg height={windowHeight} width={windowWidth} style={StyleSheet.absoluteFill}>
                <Circle
                  cx={scaleCoordinates(floors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).x}
                  cy={scaleCoordinates(floors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).y}
                  r="5"
                  fill="red"
                />
                {filterConnectedHallways(hallwaysOnFloor, path).map((hallway, index) => {
                  const scaledPoint = scaleCoordinates(hallway, { width: windowWidth, height: windowHeight });
                  return (
                    <React.Fragment key={`hallway-${index}`}>
                      <Circle cx={scaledPoint.x} cy={scaledPoint.y} r="5" fill="blue" />
                      <SvgText x={scaledPoint.x} y={scaledPoint.y - 5} fontSize="10" fill="black">
                        {`(${hallway.x}, ${hallway.y})`}
                      </SvgText>
                    </React.Fragment>
                  );
                })}
                {drawGreenLineToNearestHallway(floors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor)}
                {drawBlueLinesThroughHallways(
                  findNearestHallway(floors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor),
                  findNearestHallway(floors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor),
                  hallwaysOnFloor
                )}
              </Svg>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Gil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  roomInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginHorizontal: 8,
  },
  swapButton: {
    padding: 8,
  },
  swapButtonText: {
    fontSize: 24,
    color: '#007bff',
  },
  floorContainer: {
    flex: 1,
    marginBottom: 16,
  },
  map: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  dualFloorsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
});
