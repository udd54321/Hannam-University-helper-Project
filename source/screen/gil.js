import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';

const rooms = {
  '090716': { x: 150, y: 100 },
  '090715': { x: 250, y: 100 },
  '090712': { x: 500, y: 100 },
  '090711': { x: 600, y: 100 },
  '090710': { x: 600, y: 200 },
  '090709': { x: 500, y: 200 },
  '090708': { x: 400, y: 200 },
  '090707': { x: 300, y: 200 },
  '090706': { x: 250, y: 200 },
  '090705': { x: 600, y: 300 },
  '090704': { x: 500, y: 300 },
  '090703': { x: 400, y: 300 },
  '090702': { x: 300, y: 300 },
  '090701': { x: 250, y: 300 },
  '090717': { x: 300, y: 100 },
};

const Gil = () => {
  const route = useRoute();
  const { roomId } = route.params;
  const [path, setPath] = useState([]);

  useEffect(() => {
    const calculatePath = () => {
      const start = { x: 50, y: 350 }; // 고정된 출발 위치
      const goal = rooms[roomId];
      const newPath = calculateAStarPath(start, goal);
      setPath(newPath);
    };

    calculatePath();
  }, [roomId]);

  const calculateAStarPath = (start, goal) => {
    return [
      { x: start.x, y: start.y },
      { x: start.x, y: goal.y },
      { x: goal.x, y: goal.y },
    ];
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>길 안내를 시작</Text>
      <Image source={require('../../source/image/공대7층.png')} style={styles.map} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  map: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Gil;
