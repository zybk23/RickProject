import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    height: 100,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginTop: 16,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  infoArea: {
    flexDirection: 'row',
  },
  textArea: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 8,
  },
  title: {
    color: COLORS.primary,
    fontSize: SIZES.font,
    fontFamily: FONTS.bold,
    marginBottom: 2,
  },
  info: {
    color: COLORS.secondary,
    fontSize: SIZES.font,
    fontFamily: FONTS.regular,
    marginBottom: 2,
  },
  imgContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
