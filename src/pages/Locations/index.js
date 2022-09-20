import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {styles} from './styles';
import {getLocations} from '../../store/dataSlice';
import {Statusbar, LocationCard, Pagination} from '../../components';
import {COLORS} from '../../constants/theme';

const Locations = () => {
  const dispatch = useDispatch();
  const {results} = useSelector(state => state.dataSlice.locations);

  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 3;
  const pages = [];

  for (let i = 1; i <= Math.ceil(results?.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentData = results?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(getLocations());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Statusbar background={COLORS.primary} />
      <View style={styles.listContainer}>
        <FlatList
          data={currentData}
          renderItem={({item}) => <LocationCard data={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </SafeAreaView>
  );
};

export default Locations;
