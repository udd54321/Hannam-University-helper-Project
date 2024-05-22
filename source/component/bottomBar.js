import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {GestureHandlerRootView, GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import Gps from '../screen/gps'; //내비게이션
import Notice from '../screen/notice'; //공지 사항

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

const Bottombar = () => {
    const positionY = useSharedValue(0);
    const prevPositionY = useSharedValue(0);
    const panGesture = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevPositionY.value = positionY.value;
    })
    .onUpdate((event) => {
      positionY.value = clamp(
        prevPositionY.value + event.translationY, -windowHeight * 0.8, windowHeight * 0.01
      );
    })
    .runOnJS(true);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
          { translateY: positionY.value },
        ],
    }));

    const navigation = useNavigation();
    const pressHome = () => navigation.navigate('Homepage');
    const [selectedView, setSelectedView] = useState('');
    const SelectedView = () => {
        switch(selectedView){
            case 'a':
                return <Gps/>
            case 'b':
                return <Notice/>
            default:
                return <Gps/>
        }
    }
    
    return (
        <GestureHandlerRootView style = {style.bottomContainer}>
            <GestureDetector gesture = {panGesture}>
                <Animated.View style = {[style.bottomView, animatedStyles]}>
                    {SelectedView()}
                </Animated.View>
            </GestureDetector>
            <View style = {style.bottomBar}>
                <TouchableOpacity 
                    style = {style.bottomButton}
                    onPress = {(pressHome)}
                >
                    <Image
                        style = {style.bottomImage}
                        source = {require('../image/button1.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {style.bottomButton}
                    onPress = {() => setSelectedView('a')}
                >
                    <Image
                        style = {style.bottomImage}
                        source = {require('../image/button4.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {style.bottomButton}
                    onPress = {() => setSelectedView('b')}
                >
                    <Image
                        style = {style.bottomImage}
                        source = {require('../image/button5.jpg')}
                    />
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
  };
  
  export default Bottombar;

  const style = StyleSheet.create({
    bottomContainer: {
        width: windowWidth,
        height: windowHeight * 0.15,
    },
    bottomView: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'grey',
        bottom: windowHeight * 0.05,
    },
    bottomBar: {
        backgroundColor: '#ffffff',
        width: windowWidth,
        height: windowHeight * 0.065,
        position: 'absolute',
        flexDirection: 'row',
        top: 15,
    },
    bottomButton: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
    },
    bottomImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: 'auto',
    },
  });