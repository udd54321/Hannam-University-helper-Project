import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {GestureHandlerRootView, GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {useSharedValue, useAnimatedStyle} from 'react-native-reanimated';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Bottombar = ({n}) => {
    const positionY = useSharedValue(0);
    const panGesture = Gesture.Pan()
    .onUpdate((e) => {
        positionY += (e.translationY / 10);
    });
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {translateY: positionY.value},
        ]
    }))
    const pan = Gesture.Pan();

    const pressHome = () => n.navigate('Homepage');
    const pressGps = () => n.navigate('Gpspage');
    const pressNotice = () => n.navigate('Noticepage');

    return (
        <GestureHandlerRootView style = {style.bottomContainer}>
            <GestureDetector gesture = {pan}>
                <Animated.View style = {style.bottomView}>

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
                    onPress = {(pressGps)}
                >
                    <Image
                        style = {style.bottomImage}
                        source = {require('../image/button4.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style = {style.bottomButton}
                    onPress = {(pressNotice)}
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
        height: windowHeight * 0.3,
        backgroundColor: 'blue',
    },
    bottomView: {
        width: windowWidth,
        height: windowHeight * 0.1,
    },
    bottomBar: {
        backgroundColor: '#ffffff',
        width: windowWidth,
        height: windowHeight * 0.15,
        flexDirection: 'row',
        backgroundColor: 'red',
    },
    bottomButton: {
        flex: 1,
        height: '50%',
        alignItems: 'center',
    },
    bottomImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '35%',
        height: 'auto',
    },
  });