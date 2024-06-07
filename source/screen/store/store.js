// 06.07 fri_source/screen/store/store.js

import { atom } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async storage 효과 함수
const asyncStorageEffect = key => ({ setSelf, onSet }) => {
  setSelf(
    AsyncStorage.getItem(key).then(savedValue =>
      savedValue != null
        ? JSON.parse(savedValue)
        : { mon: [], tue: [], wed: [], thu: [], fri: [] }
    )
  );

  onSet((newValue, _, isReset) => {
    isReset
      ? AsyncStorage.removeItem(key)
      : AsyncStorage.setItem(key, JSON.stringify(newValue));
  });
};

// Recoil 상태 설정
export const timeTableState = atom({
  key: 'timeTableState',
  default: {
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
  },
  effects_UNSTABLE: [asyncStorageEffect('timeTable')], // effects_UNSTABLE 사용
});
