import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { Image } from 'expo-image';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';

const GemImage = require('./assets/gem.png');

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainer}>
        {Array.from({ length: count }, (_, i) => (
          <Image source={GemImage} style={styles.image} key={i} transition={500}/>
        ))}
      </ScrollView>
      <View style={styles.controls}>
        <Pressable style={styles.button} onPress={() => setCount(Math.max(0, count - 1))}>
          <MaterialIcons name="remove-circle" size={48} color="#afb" />
        </Pressable>
        <Text style={styles.count} selectable={false}>
          {count}
        </Text>
        <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
          <MaterialIcons name="library-add" size={48} color="#afb" />
        </Pressable>
      </View>
      <StatusBar hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
  },
  contentContainer: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    paddingTop: 20 + Constants.statusBarHeight,
  },
  scroll: {
    backgroundColor: '#123',
  },
  count: {
    fontSize: 48,
    flex: 1,
    color: '#afb',
    textAlign: 'center',
    fontWeight: '800',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#085',
    height: '100%',
  },
  controls: {
    gap: 20,
    backgroundColor: '#345',
    padding: 20,
    paddingBottom: 20 + Constants.statusBarHeight,
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  root: {
    flex: 1,
  },
});
