import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Bottombar from '../component/bottomBar'; //하단 버튼 바

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Building09 = ({navigation}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style = {style.container}>
                <ScrollView style = {style.outerContainer} contentContainerStyle = {style.innerContainer}>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                1F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                편의점
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                2F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                학과사무실(컴퓨터공학과)
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                3F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실1
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                4F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실2
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                5F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실3
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                6F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실4
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                7F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실5
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                8F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실6
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                9F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실7
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style = {style.floor}
                    >
                        <View style = {style.floorNumber}>
                            <Text style = {style.numberText}>
                                10F
                            </Text>
                        </View>
                        <View style = {style.floorInfo}>
                            <Text style = {style.infoText}>
                                전공실습실8
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Bottombar n = {navigation}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };
  
  export default Building09;

  const style = StyleSheet.create({
    container: {
        width: windowWidth, 
        height: windowHeight, 
    },
    outerContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    innerContainer: {
        
        },
    floor: {
        width: windowWidth,
        height: windowHeight * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    floorNumber: {
        flex: 1.5,
        height: '75%',
        justifyContent: 'center',
        backgroundColor: '#deb887',
    },
    floorInfo: {
        flex: 8.5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#ffffff',
    },
    numberText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#a52a2a',
        textAlign: 'center',
    },
    infoText: {
        fontSize: 15,
        color: '#000000',
    },
  });