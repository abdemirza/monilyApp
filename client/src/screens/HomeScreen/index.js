import AsyncStorage from '@react-native-community/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import logoutUser from '../../context/actions/auth/logoutUser';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalContext} from '../../context/Provider';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const {
    authDispatch,
    authState: {error, isLoggedIn, loading},
  } = useContext(GlobalContext);
  const [user, setUser] = useState({});
  useEffect(async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('user')));
  }, []);
  const onClickHandler = () => {
    logoutUser()(authDispatch);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
          <Ionicons name="menu" size={30} />
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.heading}>Welcome Back {user?.name}</Text>
      <Button title="Logout" onPress={() => onClickHandler()} />
    </View>
  );
};

export default HomeScreen;
