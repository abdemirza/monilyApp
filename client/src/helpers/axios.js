import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
const SERVER_URL = 'http://10.0.2.2:3000';

let headers = {};
const axiosInstance = axios.create({
  baseUrl: SERVER_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return console.log(error);
  },
);

export default axiosInstance;
