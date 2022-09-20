/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import axios from 'axios';

const Slide = ({url}) => {
  const navigation = useNavigation();
  const [characterInfo, setCharacterInfo] = useState({});
  const getCharacterDetails = async () => {
    const {data} = await axios.get(url);
    setCharacterInfo(data);
  };
  useEffect(() => {
    getCharacterDetails();
  }, []);
  return (
    <View style={styles.slide}>
      <Image
        style={styles.img}
        source={{uri: characterInfo?.image}}
        resizeMode="cover"
      />
      <View style={styles.infoArea}>
        <View style={styles.info}>
          <Text style={styles.name}>{characterInfo?.name}</Text>
          <View style={styles.statusContainer}>
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor:
                  characterInfo?.status === 'Dead'
                    ? 'red'
                    : characterInfo?.status === 'Alive'
                    ? 'green'
                    : 'gray',
                borderRadius: 999,
                marginRight: 8,
              }}
            />
            <Text style={styles.statusTitle}>
              {characterInfo?.status}-{characterInfo?.species}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CharacterDetails', {data: characterInfo})
          }
          style={styles.detailButton}>
          <Image
            source={require('../../constants/images/right.png')}
            resizeMode="cover"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slide;
