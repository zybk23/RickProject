/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CharacterDetails = ({route}) => {
  const {data} = route.params;
  return (
    <View style={styles.detailContainer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{uri: data?.image}}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{data?.name}</Text>
        <View style={styles.statusContainer}>
          <View style={styles.leftSide}>
            <View
              style={{
                width: 16,
                height: 16,
                backgroundColor:
                  data?.status === 'Dead'
                    ? 'red'
                    : data?.status === 'Alive'
                    ? 'green'
                    : 'gray',
                borderRadius: 999,
                marginRight: 8,
              }}
            />
            <Text style={styles.statusTitle}>
              {data?.status}-{data?.species}
            </Text>
          </View>
          <Text style={styles.rightSide}>Narnian | {data?.gender}</Text>
        </View>
        <Text style={styles.dimensionText}>Narnia Dimension</Text>
      </View>
    </View>
  );
};

export default CharacterDetails;
