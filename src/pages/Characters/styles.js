import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  textContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.font,
    color: COLORS.warning,
  },
});
