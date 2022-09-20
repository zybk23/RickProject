/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {COLORS} from '../../constants/theme';

const Pagination = ({currentPage, setCurrentPage, pages}) => {
  let pageNumberLimit = 7;
  const [maxPageNumberLimitFirstPart, setMaxPageNumberLimitFirstPart] =
    useState(7);
  const [minPageNumberLimitFirstPart, setMinpageNumberLimitFirstPart] =
    useState(0);
  const [maxPageNumberLimitSecondPart, setMaxPageNumberLimitSecondPart] =
    useState(pages.length);
  const [minPageNumberLimitSecondPart, setMinpageNumberLimitSecondPart] =
    useState(pages.length - 1);

  const handleClickPrevButton = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
    if (minPageNumberLimitFirstPart >= 10) {
      if ((currentPage - 1) % minPageNumberLimitFirstPart == 0) {
        setMaxPageNumberLimitFirstPart(
          maxPageNumberLimitFirstPart - pageNumberLimit,
        );
        setMinpageNumberLimitFirstPart(
          minPageNumberLimitFirstPart - pageNumberLimit,
        );
      }
    } else {
      if (currentPage - 1 === minPageNumberLimitFirstPart) {
        setMaxPageNumberLimitFirstPart(
          maxPageNumberLimitFirstPart - pageNumberLimit,
        );
        setMinpageNumberLimitFirstPart(
          minPageNumberLimitFirstPart - pageNumberLimit,
        );
      }
    }
  };

  const handleClickNextButton = () => {
    if (currentPage === pages.length) {
      return;
    }
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimitFirstPart) {
      setMaxPageNumberLimitFirstPart(
        maxPageNumberLimitFirstPart + pageNumberLimit,
      );
      setMinpageNumberLimitFirstPart(
        minPageNumberLimitFirstPart + pageNumberLimit,
      );
    }
  };

  const handleClickPageNumber = selectedId => {
    const id = Number(selectedId);
    setCurrentPage(id);
    if (id > pages.length - 3) {
      setMinpageNumberLimitFirstPart(id - 6);
      setMaxPageNumberLimitFirstPart(id + 1);
    }
  };

  useEffect(() => {
    setMaxPageNumberLimitSecondPart(pages.length);
    setMinpageNumberLimitSecondPart(pages.length - 1);
  }, [pages]);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={handleClickPrevButton}>
        <Image
          style={styles.button}
          source={require('../../constants/images/left.png')}
        />
      </TouchableOpacity>
      {pages.map((item, index) => (
        <React.Fragment key={index}>
          {item < maxPageNumberLimitFirstPart + 1 &&
            item > minPageNumberLimitFirstPart &&
            (item === pages.length ? null : (
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
            ))}
          {item === pages.length - 1 && currentPage < pages.length - 5 ? (
            <Text style={styles.continue}>{'...'}</Text>
          ) : null}
          {item < maxPageNumberLimitSecondPart + 1 &&
            item > minPageNumberLimitSecondPart && (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={handleClickPageNumber}>
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
      <TouchableOpacity
        style={styles.itemContainer}
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
