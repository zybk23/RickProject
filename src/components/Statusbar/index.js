import {StatusBar} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/core';

const Statusbar = props => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default Statusbar;
