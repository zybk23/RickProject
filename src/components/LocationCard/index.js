import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {styles} from './styles';

const LocationCard = ({data}) => {
  const navigation = useNavigation();
  const handleOpenCharacter = () => {
    navigation.navigate('Characters', {data: data?.residents});
  };
  return (
    <TouchableOpacity onPress={handleOpenCharacter} style={styles.container}>
      <View style={styles.infoArea}>
        <View style={styles.textArea}>
          <Text style={styles.title}>Name:</Text>
          <Text style={styles.title}>Type:</Text>
          <Text style={styles.title}>Dimensions:</Text>
          <Text style={styles.title}>Resident count:</Text>
        </View>
        <View style={styles.textArea}>
          <Text style={styles.info}>{data?.name}</Text>
          <Text style={styles.info}>{data?.type}</Text>
          <Text style={styles.info}>{data?.dimension}</Text>
          <Text style={styles.info}>{data?.residents.length}</Text>
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../constants/images/right.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
