import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, SafeAreaView, Image, ScrollView, View } from 'react-native';

const DolphinImage = require('./assets/dolphin.png');

export default function App() {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const remove = () => setCount(Math.max(0, count - 1));

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.stack}>
            <Pressable style={styles.button} onPress={remove}>
              <Text style={styles.buttonText}>-</Text>
            </Pressable>
            <Text style={styles.buttonText}>{count}</Text>
            <Pressable style={styles.button} onPress={add}>
              <Text style={styles.buttonText}>+</Text>
            </Pressable>
          </View>
          <View style={styles.holder}>
            {Array.from({ length: count }, i => (
              <Image key={i} source={DolphinImage} style={styles.portrait} />
            ))}
          </View>
        </View>
      </ScrollView>
      <StatusBar hidden />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  holder: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    backgroundColor: '#0af',
    borderRadius: 10,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 900,
  },
  stack: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  portrait: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    height: '100%',
    gap: 20,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 500,
  },
  scroll: {
    flex: 1,
    width: '100%',
    maxWidth: 600,
    padding: 20,
  },
  parent: {
    flex: 1,
    backgroundColor: '#346',
    alignItems: 'center'
  },
});
