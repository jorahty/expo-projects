import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  cardText: {
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteIcon: {
    color: '#b66',
    fontSize: 24,
  },
  menuIcon: {
    color: '#fff',
    fontSize: 24,
  },
  addIcon: {
    color: '#caf',
    fontSize: 48,
  },
  caption: {
    fontSize: 14,
    opacity: 0.5,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  textInput: {
    outlineStyle: 'none',
    flex: 1,
    padding: 15,
    backgroundColor: '#36343b',
    borderRadius: 10,
  },
  contentContainer: {
    padding: 20,
    gap: 20,
  },
  scroll: {
    height: 0,
  },
  controls: {
    paddingTop: 0,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  main: {
    width: '100%',
    maxWidth: 720,
    flex: 1,
    backgroundColor: '#46434a',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#36343b',
  },
  root: {
    flex: 1,
    backgroundColor: '#46434a',
  },
});

export default styles;
