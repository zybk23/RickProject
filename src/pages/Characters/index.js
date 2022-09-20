import {View} from 'react-native';
import React from 'react';
import Carousel from '../../components/Carousel';
import {styles} from './styles';

const Characters = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <Carousel items={data} />
    </View>
  );
};

export default Characters;
