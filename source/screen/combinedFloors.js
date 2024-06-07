import engineeringFloors from './09Floors/engineeringFloor';
import building02Floors from './02Floors/building02Floor';
import building04Floors from './04Floors/building04Floor';
import { Alert } from 'react-native';

const combinedFloors = {
    ...building02Floors,
    ...engineeringFloors,
    ...building04Floors,
};

Alert.alert('Combined Floors', JSON.stringify(combinedFloors));
export default combinedFloors;
