import engineeringFloors from './09Floors/engineeringFloor';
import building02Floors from './02Floors/building02Floor';
import building04Floors from './04Floors/building04Floor';
import building05Floors from './05Floors/building05Floor';
import building06Floors from './06Floors/building06Floor';
//import { Alert } from 'react-native';

const combinedFloors = {
    ...building02Floors,
    ...engineeringFloors,
    ...building04Floors,
    ...building05Floors,
    ...building06Floors,
    
};

//Alert.alert('Combined Floors', JSON.stringify(combinedFloors));
export default combinedFloors;
