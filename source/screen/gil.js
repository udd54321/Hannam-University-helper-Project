import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle, Text as SvgText } from 'react-native-svg';
import combinedFloors from './combinedFloors';
//import combinedFloors from './09Floors/engineeringFloor'

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

  const [showChangeFloorButton, setShowChangeFloorButton] = useState(false);
  const [floorChangeElements, setFloorChangeElements] = useState(null);
  const [toggleState, setToggleState] = useState(0);

  useEffect(() => {
    const calculatePath = () => {
      const start = combinedFloors[startFloor]?.rooms[startRoom];
      const goal = combinedFloors[goalFloor]?.rooms[goalRoom];

      if (!start || !goal) {
        Alert.alert('Error', 'Invalid start or goal room.');
        return;
      }
    };

    //calculatePath();
  }, [startRoom, goalRoom, startFloor, goalFloor]);

  useEffect(() => {
    const startImage = combinedFloors[startFloor]?.image;
    const goalImage = combinedFloors[goalFloor]?.image;

    if (startImage) {
      setCurrentImage(startImage);
    } else {
      console.error(`Image not found for floor ${startFloor}`);
    }

    if (goalImage && startFloor !== goalFloor) {
      setShowChangeFloorButton(true);
    }

    if (combinedFloors[startFloor]) {
      setHallwaysOnFloor(combinedFloors[startFloor].hallway);
    }
    if (combinedFloors[goalFloor]) {
      setHallwaysOnFloor(combinedFloors[goalFloor].hallway);
    }
  }, [startFloor, goalFloor]);

  const handleFloorChange = () => {
    const newToggleState = (toggleState + 1) % 2;
    setToggleState(newToggleState);

    var goalTmp = combinedFloors[startFloor]?.rooms[startRoom].tmp;
    if (startFloor < 6 && goalFloor > 5) { goalTmp = 0 }

    if (newToggleState === 0) {
      setCurrentImage(combinedFloors[startFloor]?.image);
      setHallwaysOnFloor(combinedFloors[goalFloor]?.hallway);
      setFloorChangeElements(
        <>
          <Circle
            cx={scaleCoordinates(combinedFloors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).x}
            cy={scaleCoordinates(combinedFloors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).y}
            r="5"
            fill="red"
          />
          {renderRedDotsForTargets(combinedFloors[startFloor]?.rooms[startRoom], startFloor)}
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
          {drawGreenLineToNearestHallway(combinedFloors[startFloor]?.rooms[startRoom], hallwaysOnFloor)}
          {drawGreenLineToNearestHallway(combinedFloors[startFloor]?.rooms[combinedFloors[startFloor]?.rooms[startRoom]?.target[goalTmp]], hallwaysOnFloor)}
          {drawBlueLinesThroughHallways(
            findNearestHallway(combinedFloors[startFloor]?.rooms[startRoom], hallwaysOnFloor),
            findNearestHallway(combinedFloors[startFloor]?.rooms[combinedFloors[startFloor]?.rooms[startRoom]?.target[goalTmp]], hallwaysOnFloor),
            hallwaysOnFloor,
            startFloor
          )}
        </>
      );
    } else if (newToggleState === 1) {
      setCurrentImage(combinedFloors[goalFloor]?.image);
      setHallwaysOnFloor(combinedFloors[startFloor]?.hallway);
      setFloorChangeElements(
        <>
          <Circle
            cx={scaleCoordinates(combinedFloors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).x}
            cy={scaleCoordinates(combinedFloors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).y}
            r="5"
            fill="red"
          />
          {renderRedDotsForTargets(combinedFloors[goalFloor]?.rooms[goalRoom], goalFloor)}
          {filterConnectedHallways(combinedFloors[startFloor]?.hallway, path).map((hallway, index) => {
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
          {drawBlueLinesThroughHallways(
            findNearestHallway(combinedFloors[goalFloor]?.rooms[goalRoom], combinedFloors[goalFloor]?.hallway),
            findNearestHallway(combinedFloors[goalFloor]?.rooms[combinedFloors[goalFloor]?.rooms[goalRoom]?.target[goalTmp]], combinedFloors[goalFloor]?.hallway),
            combinedFloors[goalFloor]?.hallway,
            goalFloor
          )}
          {drawGreenLineToNearestHallway(combinedFloors[goalFloor]?.rooms[goalRoom], combinedFloors[goalFloor]?.hallway)}
          {drawGreenLineToNearestHallway(combinedFloors[goalFloor]?.rooms[combinedFloors[goalFloor]?.rooms[goalRoom]?.target[goalTmp]], combinedFloors[goalFloor]?.hallway)}
        </>
      );
    }
  };

  const findShortestPathWithHallways = (start, goal, floor) => {
    const graph = buildGraphWithHallways(start, goal, floor);
    if (Object.keys(graph).length === 0) {
      console.error('Graph is empty. Cannot find shortest path.');
      return [];
    }

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
    if (!combinedFloors[floor]) {
      console.error(`Floor ${floor} data not found`);
      return {};
    }

    const graph = {};
    const rooms = combinedFloors[floor].rooms;
    const hallways = combinedFloors[floor].hallway;

    const allNodes = [
      ...Object.values(rooms),
      ...hallways
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
      if (node.target) {
        graph[key].target = node.target[0];
      }
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
    const foundRoom = Object.keys(combinedFloors).find(floor => combinedFloors[floor].rooms[newRoom]);
    if (foundRoom) {
      setStartRoom(newRoom);
      setStartFloor(foundRoom);
    } else {
      Alert.alert('Error', 'Invalid start room number.');
    }
  };

  const handleGoalLocationChange = (newRoom) => {
    const foundRoom = Object.keys(combinedFloors).find(floor => combinedFloors[floor].rooms[newRoom]);
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
    const yScale = height / 130;
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

  const drawBlueLinesThroughHallways = (startHallway, goalHallway, hallways, currentFloor) => {
    const path = findShortestPathWithHallways(startHallway, goalHallway, currentFloor);
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

  const drawBlueLinesThroughHallways2 = (startHallway, goalHallway, hallways) => {
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

  const renderRedDotsForTargets = (room, floor) => {
    if (room.target.length > 0) {
      var goalTmp = combinedFloors[startFloor]?.rooms[startRoom].tmp;
      if (goalFloor < 6 && goalFloor > 5) { goalTmp = 0 }
      const firstTarget = combinedFloors[floor].rooms[room.target[goalTmp]];
      return (
        <Circle
          key={`target-dot-0`}
          cx={scaleCoordinates(firstTarget, { width: windowWidth, height: windowHeight }).x}
          cy={scaleCoordinates(firstTarget, { width: windowWidth, height: windowHeight }).y}
          r="5"
          fill="red"
        />
      );
    }
    return null;
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
                cx={scaleCoordinates(combinedFloors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).x}
                cy={scaleCoordinates(combinedFloors[startFloor]?.rooms[startRoom], { width: windowWidth, height: windowHeight }).y}
                r="5"
                fill="red"
              />
              <Circle
                cx={scaleCoordinates(combinedFloors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).x}
                cy={scaleCoordinates(combinedFloors[goalFloor]?.rooms[goalRoom], { width: windowWidth, height: windowHeight }).y}
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
              {drawGreenLineToNearestHallway(combinedFloors[startFloor]?.rooms[startRoom], hallwaysOnFloor)}
              {drawGreenLineToNearestHallway(combinedFloors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor)}
              {drawBlueLinesThroughHallways2(
                findNearestHallway(combinedFloors[startFloor]?.rooms[startRoom], hallwaysOnFloor),
                findNearestHallway(combinedFloors[goalFloor]?.rooms[goalRoom], hallwaysOnFloor),
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
                {floorChangeElements}
              </Svg>
            </View>
          )}
          {showChangeFloorButton && (
            <View style={styles.buttonContainer}>
              <Button title="Change Floor" onPress={handleFloorChange} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // 이미지가 뷰를 벗어나지 않도록 설정
  },
  dualFloorsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
