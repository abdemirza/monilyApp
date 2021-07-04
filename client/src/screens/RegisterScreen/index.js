import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableWithoutFeedback} from 'react-native';
import register from '../../context/actions/auth/register';
import GlobalProvider, {GlobalContext} from '../../context/Provider';
import styles from './styles';
const SERVER_URL = 'http://10.0.2.2:3000';

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const {
    authDispatch,
    authState: {error, isLoggedIn, loading},
  } = useContext(GlobalContext);

  const handleClick = async () => {
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      name: name,
    };
    try {
      register(data)(authDispatch);
    } catch (err) {
      console.log(err);
    }
    // try {
    //   const res = await axios({
    //     method: 'post',
    //     responseType: 'json',
    //     url: `${SERVER_URL}/users/register`,
    //     data: data,
    //   });
    //   if (res.data.error) return console.log(res.data.error);
    //   await AsyncStorage.setItem('token', res.data.token);
    //   navigation.navigate('Home');
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={value => setName(value)}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={value => setEmail(value)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setPassword(value)}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setConfirmPassword(value)}
          placeholder="Confirm Password"
        />
        <TouchableWithoutFeedback onPress={() => handleClick()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text>
        Already a member ?{' '}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableWithoutFeedback>
      </Text>
    </View>
  );
};

export default RegisterScreen;
