import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 33,
    marginTop: 24,
    paddingHorizontal: 12,
  },
  continue: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    marginRight: 12,
  },
  itemContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
    padding: 5,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginRight: 13,
  },
  button: {
    width: 18,
    height: 18,
  },
});
