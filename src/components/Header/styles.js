import {StyleSheet} from 'react-native';
import {SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});
