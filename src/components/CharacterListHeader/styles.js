import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  filterContainer: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  filterText: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginRight: 8,
  },
  filterButton: {
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.softGray,
    backgroundColor: COLORS.white,
  },
  filterButtonText: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
  },
  rowStyle: {
    height: 24,
  },
  rowTextStyle: {
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
  },
  downIcon: {
    width: 16,
    height: 16,
  },
});

export default styles;
