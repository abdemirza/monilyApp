import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import {SERVER_URL} from '@env';

export default ({email, password}) =>
  async dispatch => {
    // axios
    //   .post(`${SERVER_URL}/users/login`, {
    //     email,
    //     password,
    //   })
    //   .then(async response => {
    //     // console.log(JSON.stringify(response.data.user));
    //     console.log(response);
    //     await AsyncStorage.setItem('token', response.data.token);
    //     await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
    //     if (response.data.error)
    //       dispatch({
    //         type: 'LOGIN_FAIL',
    //         payload: response.data.error,
    //       });
    //     else
    //       dispatch({
    //         type: 'LOGIN_SUCCESS',
    //         payload: response.data,
    //       });
    //   })
    //   .catch(err => console.log(err));
    try {
      const response = await axios.post(`${SERVER_URL}/users/login`, {
        email,
        password,
      });
      await AsyncStorage.setItem('token', response.data.token);
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
      dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
    } catch (err) {
      if (err) dispatch({type: 'LOGIN_FAIL', payload: err.response.status});
    }
  };
