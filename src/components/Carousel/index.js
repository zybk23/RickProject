import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './styles';
import Slide from '../Slide';

const selections = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Alive',
  },
  {
    id: 3,
    name: 'Dead',
  },
  {
    id: 4,
    name: 'unknown',
  },
];

export const Carousel = props => {
  const {items} = props;
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval;

  const [interval, setInterval] = React.useState(1);
  const [intervals, setIntervals] = React.useState(1);
  const [width, setWidth] = React.useState(0);

  const init = item => {
    setWidth(item);
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };

  const getInterval = offset => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i == intervals) {
        return i;
      }
    }
  };

  let bullets = [];
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.bullet,
          opacity: interval === i ? 0.5 : 0.1,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Filter by status</Text>
        <SelectDropdown
          data={selections}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
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
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast">
        {items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <Slide url={item} />
            </React.Fragment>
          );
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets.slice(0, 16)}</View>
    </View>
  );
};

export default Carousel;
