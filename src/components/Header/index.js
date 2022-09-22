import {View, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../constants/images/rick.png')}
      />
    </View>
  );
};

export default Header;
