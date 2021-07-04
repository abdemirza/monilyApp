import {DrawerContentScrollView} from '@react-navigation/drawer';
import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import logoutUser from '../../context/actions/auth/logoutUser';
import {GlobalContext} from '../../context/Provider';
import AsyncStorage from '@react-native-community/async-storage';

const HomeDrawerContent = props => {
  const [user, setUser] = useState({});
  const {
    authDispatch,
    authState: {error, isLoggedIn, loading},
  } = useContext(GlobalContext);
  const onClickHandler = () => {
    logoutUser()(authDispatch);
  };
  useEffect(async () => {
    setUser(JSON.parse(await AsyncStorage.getItem('user')));
  }, [user]);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView style={{flex: 1}} {...props}>
        <View style={styles.header}>
          <Text style={styles.username}>{user?.name}</Text>
        </View>
      </DrawerContentScrollView>
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => props.navigation.navigate('Graphs')}>
          <View style={styles.item}>
            <Entypo style={styles.icon} name="bar-graph" size={25} />
            <Text style={styles.text}>Graphs</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => onClickHandler()}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="logout"
              size={25}
            />
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default HomeDrawerContent;
