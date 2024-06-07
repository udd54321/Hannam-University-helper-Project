import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import buildings from './campusBuilding';
import Bottombar from '../component/bottomBar'; //하단 버튼 바
//UIcons by <a href="https://www.flaticon.com/uicons">Flaticon</a> 하단 버튼 이미지 출처 <- 지우기 x

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const [firstPress, setFristPress] = useState(true);
  const pressSearch = () => navigation.navigate('ScheduleSearch');
  const pressSchedule = () => {
    if(firstPress) {
      navigation.navigate('Schedulepage');
      setTimeout(() => {
        navigation.navigate('Homepage');
      }, 300);
      setTimeout(() => {
        navigation.navigate('Schedulepage');
      }, 300);
      setFristPress(false);
    }
    else {
      navigation.navigate('Schedulepage');
    }
  };

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={style.rightContainer}>
          <TouchableOpacity style={style.searchButton} onPress={pressSearch}>
            <Image
              style={style.searchImage}
              source={require('../image/button2.jpg')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={style.searchButton} onPress={pressSchedule}>
            <Image
              style={style.searchImage}
              source={require('../image/button3.jpg')}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const pressBuilding = ({buildingNumber}) => {
    const buildingName = 'building' + buildingNumber;
    return navigation.navigate(buildingName);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <GestureHandlerRootView>
          <ScrollView
            style={style.outerContainer}
            contentContainerStyle={style.innerContainer}
          >
              <ScrollView
                style={style.outerContainerHorizontal}
                contentContainerStyle={style.innerContainerHorizontal}
                horizontal={true}
              >
                <Image
                  style={style.campusImage}
                  source={require('../image/campusmap.jpg')}
                />
                {Object.keys(buildings['buildingsInfo'].number).map((building) => {
                const buildingPosition = buildings['buildingsInfo'].number[building];
                return (
                  <TouchableOpacity
                    key={building}
                    style={[
                      style.buildingButton, 
                      { 
                        top: `${buildingPosition.y - 1}%`, 
                        left: `${buildingPosition.x}%`, 
                        width: `${buildingPosition.width}%`,
                        height: `${buildingPosition.height}%`,
                      }]} // Move slightly higher
                    onPress={() => {pressBuilding({buildingNumber: buildingPosition.number})}}
                  >
                    <Image
                      style={[
                        style.buildingButtonImage, 
                        {
                          height: buildingPosition.buttonHeight,
                        }
                      ]}
                      source={require('../image/buildingButton.png')}
                    />
                    <Text style={style.buildingText}>
                      {buildingPosition.number}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </ScrollView>
          <Bottombar />
        </GestureHandlerRootView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Home;

const style = StyleSheet.create({
  rightContainer: {
    width: windowWidth * 0.3,
    height: 50,
    flexDirection: 'row',
  },
  searchButton: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  searchImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'center',
  },
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#ffffff',
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 120,
  },
  innerContainer: {
  },
  outerContainerHorizontal: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  innerContainerHorizontal: {
  },
  campusImage: {
    width: windowWidth * 3,
    height: windowHeight,
    resizeMode: 'stretch',
  },
  buildingButton: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.075,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buildingButtonImage: {
    aspectRatio: 1,
  },
  buildingText: {
    fontSize: 30,
    color: '#000000',
    position: 'absolute',
  },
});