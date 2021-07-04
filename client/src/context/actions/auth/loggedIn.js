import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {SERVER_URL} from '@env';

export default ({user}) =>
  async dispatch => {
    dispatch({type: 'LOGIN_SUCCESS', payload: user});
  };
