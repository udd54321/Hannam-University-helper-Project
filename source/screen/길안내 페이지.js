import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NavigationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>길 안내를 시작</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NavigationScreen;
