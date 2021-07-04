import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const LoadingScreen = () => {
  return (
    <ActivityIndicator
      animating={true}
      color={'black'}
      size="large"
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
    />
  );
};

export default LoadingScreen;
