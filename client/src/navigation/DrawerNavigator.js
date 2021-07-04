import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import HomeDrawerContent from '../components/HomeDrawerContent';
import GraphScreen from '../screens/GraphScreen'
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <HomeDrawerContent {...props} />}
      options={{
        headerShown: true,
        headerTitle: 'Username',
        headerTitleAlign: 'center',
      }}
      initialRouteName="Home"
      drawerType={'back'}
      drawerPosition={'left'}
      drawerStyle={{width: Dimensions.get('window').width * 0.65}}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Graphs" component={GraphScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
