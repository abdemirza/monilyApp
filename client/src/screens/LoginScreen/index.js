import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import styles from './styles';
import {GlobalContext} from '../../context/Provider';
import loginUser from '../../context/actions/auth/loginUser';
import BarChart from '../../components/BarChart';
import PieChart from '../../components/PieChart';
import LineChart from '../../components/LineChart';
import Input from '../../components/Input';
import {SERVER_URL} from '@env';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   if (token) {
  //     navigation.navigate('Home', user);
  //   }
  // }, [token]);
  const {
    authDispatch,
    authState: {error, isLoggedIn, loading},
  } = useContext(GlobalContext);
  const passwordVisibleHandler = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleClick = async () => {
    const form = {
      email,
      password,
    };
    try {
      loginUser(form)(authDispatch);
    } catch (err) {
      console.log(err);
    }
    // try {
    //   const res = await axios({
    //     method: 'post',
    //     responseType: 'json',
    //     url: `${SERVER_URL}/users/login`,
    //     data: data,
    //   });
    //   await AsyncStorage.setItem('token', res.data.token);
    //   const ken = await AsyncStorage.getItem('token');
    //   setToken(ken);
    //   setUser(res.data.user);
    //   console.log(user);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          style={{width: '100%'}}
          onChangeText={val => setEmail(val)}
        />
        <Input
          placeholder="Password"
          secureTextEntry={passwordVisible}
          iconPosition={'right'}
          style={{width: '100%'}}
          onChangeText={val => setPassword(val)}
          passwordVisibleHandler={passwordVisibleHandler}
          icon={<Text>{passwordVisible ? 'Show' : 'Hide'}</Text>}
        />
        {error && <Text style={styles.error}>Invalid Credentials !</Text>}
        <TouchableWithoutFeedback onPress={() => handleClick()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text>
        Not a member ?
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Register</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

export default LoginScreen;
