import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from '@rneui/themed'; //검색 라이브러리

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Search = ({navigation}) => {
    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaProvider>
            <SafeAreaView style = {style.container}>
                <View style = {style.inputContainer}>
                    <SearchBar
                        containerStyle = {style.inputBar1}
                        inputContainerStyle = {style.inputBar2}
                        placeholder='강의실 번호 입력 (ex: 090425)'
                        onChangeText = {onChangeText}
                        value = {text}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
  };
  
  export default Search;

  const style = StyleSheet.create({
    container: {
        width: windowWidth, 
        height: windowHeight,
        backgroundColor: '#ffffff',
    },
    inputContainer: {
        width: windowWidth,
        height: windowHeight * 0.08,
        justifyContent: 'center',
    },
    inputBar1: {
        width: '100%',
        height: '100%',
        borderColor: '#d3d3d3',
        backgroundColor: '#d3d3d3',
    },
    inputBar2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
    },
  });