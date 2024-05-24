import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Notice = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            initialRegion={{
              latitude: 36.351248966896,
              longitude: 127.42278350774,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
