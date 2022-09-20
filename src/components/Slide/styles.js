import {StyleSheet} from 'react-native';
import {SIZES, COLORS, FONTS} from '../../constants/theme';

export const styles = StyleSheet.create({
  slide: {
    paddingHorizontal: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  img: {
    width: '100%',
    height: 360,
  },
  infoArea: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  info: {
    flexDirection: 'column',
  },
  name: {
    color: COLORS.secondary,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  statusbar: {
    width: 16,
    height: 16,
    backgroundColor: 'red',
    borderRadius: 999,
    marginRight: 8,
  },
  statusTitle: {
    color: COLORS.primary,
    fontSize: SIZES.small,
    fontFamily: FONTS.regular,
  },
  detailButton: {
    width: 24,
    height: 24,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
