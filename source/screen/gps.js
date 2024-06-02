import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import Dialog from 'react-native-dialog';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AVERAGE_WALKING_SPEED_KMH = 5; // km/h

const Gps = () => {
  const [location, setLocation] = useState(null);
  const [startLocation, setStartLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [waypoints, setWaypoints] = useState([]); // 경유지 상태 추가
  const [zoomLevel, setZoomLevel] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);
  const [walkingTime, setWalkingTime] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]); // 경로 좌표 상태 추가
  const mapRef = useRef(null);
  const previousRegion = useRef(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission denied');
          return;
        }
      }
      Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({
            latitude,
            longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, distanceFilter: 0, interval: 5000},
      );
    };

    requestLocationPermission();

    return () => {
      Geolocation.clearWatch();
    };
  }, []);

  const zoomIn = () => {
    if (zoomLevel < 7 && location) {
      const newZoomLevel = zoomLevel + 1;
      const newLatitudeDelta =
        location.latitudeDelta / Math.pow(1.5, newZoomLevel);
      const newLongitudeDelta =
        location.longitudeDelta / Math.pow(1.5, newZoomLevel);

      mapRef.current.animateToRegion({
        ...location,
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      });

      setZoomLevel(newZoomLevel);
    }
  };

  const zoomOut = () => {
    if (zoomLevel > -7 && location) {
      const newZoomLevel = zoomLevel - 1;
      const newLatitudeDelta =
        location.latitudeDelta * Math.pow(1.5, -newZoomLevel);
      const newLongitudeDelta =
        location.longitudeDelta * Math.pow(1.5, -newZoomLevel);

      mapRef.current.animateToRegion({
        ...location,
        latitudeDelta: newLatitudeDelta,
        longitudeDelta: newLongitudeDelta,
      });

      setZoomLevel(newZoomLevel);
    }
  };

  const handleMapPress = e => {
    setSelectedCoordinate(e.nativeEvent.coordinate);
    setDialogVisible(true);
  };

  const handleDialogCancel = () => {
    setDialogVisible(false);
  };

  const handleSetStartLocation = () => {
    setStartLocation(selectedCoordinate);
    setDialogVisible(false);
  };

  const handleSetDestination = () => {
    if (startLocation) {
      setDestination(selectedCoordinate);
    } else {
      setStartLocation(location);
      setDestination(selectedCoordinate);
    }
    setWaypoints([]); // 새로운 목적지를 설정할 때 경유지를 초기화
    setDialogVisible(false);
  };

  const handleSetWaypoint = () => {
    setWaypoints([...waypoints, selectedCoordinate]);
    setDialogVisible(false);
  };

  const handleDirectionsReady = result => {
    const distance = result.distance; // km 단위 거리
    const time = (distance / AVERAGE_WALKING_SPEED_KMH) * 60; // 분 단위 시간
    setWalkingTime(time.toFixed(0)); // 소수점 두 자리로 시간 설정

    // 경로가 준비되면 경로 좌표를 업데이트
    const coordinates = result.coordinates.map(coord => ({
      latitude: coord.latitude,
      longitude: coord.longitude,
    }));
    setRouteCoordinates(coordinates);
  };

  const moveToCurrentLocation = () => {
    if (location) {
      mapRef.current.animateToRegion(location);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={location}
            zoomEnabled={true}
            showsCompass={true}
            showsUserLocation={true}
            showsMyLocationButton={true}
            userLocationUpdateInterval={10000}
            onPress={handleMapPress} // 지도 클릭 시 다이얼로그 표시
          >
            {startLocation && destination && (
              <MapViewDirections
                origin={startLocation}
                destination={destination}
                waypoints={waypoints}
                optimizeWaypoints={true}
                apikey={'AIzaSyDvetUWD0etDt4XMkUcCY1EXwyIpyvDUyA'}
                strokeWidth={5} // 기본 strokeWidth를 0으로 설정하여 MapViewDirections 자체의 경로 표시 비활성화
                strokeColor="blue" // 기본 strokeColor를 투명으로 설정하여 MapViewDirections 자체의 경로 표시 비활성화
                mode="WALKING" // 도보 경로 설정
                onReady={handleDirectionsReady} // 경로가 준비되면 핸들러 호출
                onError={errorMessage => {
                  console.log('GOT AN ERROR', errorMessage);
                }}
              />
            )}
          </MapView>
          <View style={styles.zoomButtons}>
            {walkingTime && (
              <View style={styles.walkingTimeContainer}>
                <Text style={styles.walkingTimeText}>{walkingTime} 분</Text>
              </View>
            )}
            <TouchableOpacity style={styles.button} onPress={zoomIn}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={zoomOut}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>위치 설정</Dialog.Title>
          <Dialog.Description>
            이 위치를 출발지로 설정하시겠습니까, 아니면 목적지로
            설정하시겠습니까?
          </Dialog.Description>
          <Dialog.Button label="출발지 설정" onPress={handleSetStartLocation} />
          <Dialog.Button label="목적지 설정" onPress={handleSetDestination} />
          <Dialog.Button label="경유지 추가" onPress={handleSetWaypoint} />
          <Dialog.Button label="취소" onPress={handleDialogCancel} />
        </Dialog.Container>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Gps;

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
  zoomButtons: {
    position: 'absolute',
    bottom: 50,
    right: 10,
    flexDirection: 'column',
    alignItems: 'center', // 버튼과 시간 텍스트 정렬
  },
  walkingTimeContainer: {
    backgroundColor: 'white',
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  walkingTimeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
