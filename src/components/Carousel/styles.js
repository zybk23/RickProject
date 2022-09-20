import {StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fbfbfb',
    borderColor: COLORS.softGray,
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#fcfcfc',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    height: '70%',
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  bullets: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 20,
  },
  filterContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
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
