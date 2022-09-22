import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {styles} from './styles';
import Slide from '../Slide';

export const Carousel = props => {
  const {items} = props;

  const itemsPerInterval = 1;

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(1);
  const [width, setWidth] = useState(0);

  const init = useCallback(
    item => {
      setWidth(item);
      const totalItems = items.length;
      setIntervals(Math.ceil(totalItems / itemsPerInterval));
    },
    [items.length],
  );

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

  useEffect(() => {
    init();
  }, [init, items]);

  return (
    <View style={styles.container}>
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
              <Slide characterInfo={item} />
            </React.Fragment>
          );
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets.slice(0, 16)}</View>
    </View>
  );
};

export default Carousel;
