import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {SERVER_URL} from '../../../constants/uri';

export default () => async dispatch => {
  await AsyncStorage.removeItem('token');
  await AsyncStorage.removeItem('user');
  dispatch({
    type: 'LOGOUT_USER',
    payload: {},
  });
};
