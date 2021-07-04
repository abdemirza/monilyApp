import axios from 'axios';
import {SERVER_URL} from '../../../constants/uri';

export const clearAuthState = () => dispatch => {
  dispatch({type: 'CLEAR_AUTH_STATE'});
};
export default ({email, password, confirmPassword, name}) =>
  dispatch => {
    axios
      .post(`${SERVER_URL}/users/register`, {
        email,
        password,
        confirmPassword,
        name,
      })
      .then(response => {
        console.log(response);
        if (response.data.error)
          dispatch({
            type: 'REGISTER_FAIL',
            payload: response.data.error,
          });
        else
          dispatch({
            type: 'REGISTER_SUCCESS',
            payload: response.data,
          });
      })
      .catch(err => console.log(err));
  };
