import {StyleSheet} from 'react-native';
import {SIZES, COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  imageContainer: {
    width: '100%',
    height: '70%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 8,
  },
  name: {
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    color: COLORS.secondary,
    marginBottom: 4,
  },
  statusContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  statusTitle: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSide: {
    color: COLORS.secondary,
    fontSize: SIZES.base,
    fontFamily: FONTS.semiBold,
  },
  dimensionText: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontFamily: FONTS.semiBold,
    marginTop: 8,
  },
});

export default styles;
