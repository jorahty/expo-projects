import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontWeight: '700',
  },
  dropdown: {
    backgroundColor: '#ffffff22',
    padding: 20,
    gap: 20,
    borderRadius: 20,
  },
  address: {
    fontStyle: 'italic',
    paddingHorizontal: 3,
  },
  link: {
    color: '#8bf',
  },
  portrait: {
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  title: {
    fontSize: 46,
    fontWeight: '700',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  root: {
    alignItems: 'center',
    backgroundColor: '#035',
    flex: 1,
  },
  scroll: {
    width: '100%',
    maxWidth: 900,
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 30 + Constants.statusBarHeight,
    gap: 30,
  },
  stack: {
    gap: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  social: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
});

export default styles;
