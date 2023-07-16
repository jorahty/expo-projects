import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {Array.from({ length: 50 }, (_, index) => (
          <Text key={index} style={styles.text}>
            Hello, World!
          </Text>
        ))}
      </ScrollView>
      <View style={styles.controls}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    padding: 20,
  },
  scroll: {
    backgroundColor: '#844',
    height: 0,
  },
  controls: {
    backgroundColor: '#484',
  },
  container: {
    backgroundColor: '#448',
    flex: 1,
    paddingVertical: Constants.statusBarHeight,
  },
});
