import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {setSelectedFilter} from '../../store/dataSlice';
import {styles} from './styles';

const CharacterListHeader = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector(state => state.dataSlice.filterOptions);
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterText}>Filter by status</Text>
      <SelectDropdown
        data={filterOptions}
        onSelect={(selectedItem, index) => {
          dispatch(setSelectedFilter(selectedItem));
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem.name;
        }}
        rowTextForSelection={(item, index) => {
          return item.name;
        }}
        buttonStyle={styles.filterButton}
        buttonTextStyle={styles.filterButtonText}
        rowStyle={styles.rowStyle}
        rowTextStyle={styles.rowTextStyle}
        defaultButtonText="All"
        renderDropdownIcon={() => {
          return (
            <Image
              style={styles.downIcon}
              source={require('../../constants/images/down.png')}
            />
          );
        }}
      />
    </View>
  );
};

export default CharacterListHeader;
