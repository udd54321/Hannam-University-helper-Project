import {atom} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

const asyncStorageEffect =
  key =>
  ({setSelf, onSet}) => {
    setSelf(
      AsyncStorage.getItem(key).then(savedValue =>
        savedValue != null
          ? JSON.parse(savedValue)
          : {mon: [], tue: [], wed: [], thu: [], fri: []},
      ),
    );

    onSet((newValue, _, isReset) => {
      isReset
        ? AsyncStorage.removeItem(key)
        : AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const timeTableState = atom({
  key: 'timeTableState',
  default: {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
  },
  effects: [asyncStorageEffect('timeTable')],
});
