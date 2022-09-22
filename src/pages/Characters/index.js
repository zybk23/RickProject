/* eslint-disable no-shadow */
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Carousel from '../../components/Carousel';
import {CharacterListHeader} from '../../components';
import {styles} from './styles';
import {setResetSelectedFilter} from '../../store/dataSlice';

const Characters = ({route}) => {
  const dispatch = useDispatch();
  const {data} = route.params;
  const selectedFilter = useSelector(state => state.dataSlice.selectedFilter);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    Promise.all(
      data.map(url =>
        fetch(url)
          .then(data => data.json())
          .then(k =>
            selectedFilter.name === 'All'
              ? k
              : k.status === selectedFilter.name && k,
          )
          .catch(err => console.log(err)),
      ),
    ).then(data => {
      const filteredData = data.filter(x => x);
      setFilteredItems(filteredData);
    });
  }, [data, selectedFilter]);
  useEffect(() => {
    dispatch(setResetSelectedFilter());
  }, [dispatch, route]);
  return (
    <View style={styles.container}>
      <CharacterListHeader />
      {filteredItems.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            No data was found for the filters you selected.
          </Text>
        </View>
      ) : (
        <Carousel items={filteredItems} />
      )}
    </View>
  );
};

export default Characters;
