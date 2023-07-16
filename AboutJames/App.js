import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image, Linking, Platform } from 'react-native';

const PortraitImage = require('./assets/portrait.png');

export default function App() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.title]}>
          James Tennant
        </Text>
        <Image source={PortraitImage} style={styles.portrait} alt='image'/>
        <Text style={styles.text}>
          Computer Engineering at{' '}
          <Text
            style={styles.link}
            onPress={() => Linking.openURL('https://ucsc.edu')}>
            University of California, Santa Cruz
          </Text>
        </Text>
        <Text style={[styles.text, styles.address]}
        onPress={() => Linking.openURL('mailto:jtennant@ucsc.edu')}>
          jtennant@ucsc.edu
        </Text>
      </View>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  social: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    // width: '17%',
    // maxWidth: 100,
  },
  stack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {
    padding: 2,
    fontStyle: 'italic',
  },
  link: {
    color: '#6bf',
  },
  parent: {
    backgroundColor: '#334',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    height: '100%',
    maxWidth: 900,
    padding: 20,
    justifyContent: 'space-between',
  },
  portrait: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  title: {
    fontSize: 48,
    fontWeight: 700,
  },
});
