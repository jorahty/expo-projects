import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    height: '25%',
    width: '100%',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalContent: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#8cd',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
  },
  container: {
    padding: 30,
  },
  root: {
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#156',
    paddingTop: Constants.statusBarHeight,
  },
});

export default styles;
