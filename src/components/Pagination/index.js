/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/theme';

const Pagination = ({currentPage, setCurrentPage, pages}) => {
  let pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(pageNumberLimit);
  const [minPageNumberLimit, setMinpageNumberLimit] = useState(0);

  const handleClickPrevButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    if (currentPage - 1 === minPageNumberLimit) {
      if (minPageNumberLimit < pageNumberLimit) {
        setMaxPageNumberLimit(maxPageNumberLimit - minPageNumberLimit);
        setMinpageNumberLimit(0);
      } else {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinpageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  };

  const handleClickNextButton = () => {
    if (currentPage === pages.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 === maxPageNumberLimit) {
      if (pages.length - maxPageNumberLimit < pageNumberLimit) {
        setMaxPageNumberLimit(
          maxPageNumberLimit + (pages.length - maxPageNumberLimit),
        );
        setMinpageNumberLimit(
          minPageNumberLimit + (pages.length - maxPageNumberLimit),
        );
      } else {
        setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setMinpageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  };

  const handleClickPageNumber = selectedId => {
    setCurrentPage(selectedId);
    if (pages.length - selectedId < pageNumberLimit) {
      setMaxPageNumberLimit(pages.length);
      setMinpageNumberLimit(pages.length - pageNumberLimit);
    } else if (selectedId < pageNumberLimit) {
      setMaxPageNumberLimit(pageNumberLimit);
      setMinpageNumberLimit(0);
    } else {
      setMaxPageNumberLimit(selectedId + 2);
      setMinpageNumberLimit(selectedId - 2);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        disabled={currentPage === 1}
        onPress={handleClickPrevButton}>
        <Image
          style={styles.button}
          source={require('../../constants/images/left.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickPageNumber(1)}>
        <Text
          style={{
            color: currentPage === 1 ? 'orange' : COLORS.primary,
          }}>
          1
        </Text>
      </TouchableOpacity>
      {minPageNumberLimit > 2 ? (
        <Text style={styles.continue}>{'...'}</Text>
      ) : null}
      {pages.map((item, index) => (
        <React.Fragment key={index}>
          {item > 1 &&
            item <= maxPageNumberLimit &&
            item >= minPageNumberLimit &&
            item < pages.length && (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => handleClickPageNumber(item)}>
                <Text
                  style={{
                    color: currentPage === item ? 'orange' : COLORS.primary,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
        </React.Fragment>
      ))}
      {maxPageNumberLimit !== pages.length ? (
        <Text style={styles.continue}>{'...'}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleClickPageNumber(pages.length)}>
        <Text
          style={{
            color: currentPage === pages.length ? 'orange' : COLORS.primary,
          }}>
          {pages.length}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.itemContainer}
        disabled={currentPage === pages.length}
        onPress={handleClickNextButton}>
        <Image
          style={styles.button}
          source={require('../../constants/images/right.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
