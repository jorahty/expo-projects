import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, Pressable, StyleSheet, Text, SafeAreaView, Image } from 'react-native';

const CookieImage = require('./assets/cookie.png');

const fortunes = [
  'A great opportunity awaits you in the near future. Seize it with confidence and you shall achieve remarkable success.',
  'Your kindness and compassion will open new doors of friendship and bring immense joy into your life.',
  'A long-awaited journey will soon lead you to unexpected discoveries and transformative experiences.',
  'Your creativity and innovative thinking will lead to a breakthrough that will positively impact your career and bring recognition.',
  'The challenges you face today will become stepping stones to a brighter tomorrow. Trust in your abilities, and you will overcome any obstacles in your path.',
];

export default function App() {
  const [index, setIndex] = useState<null|Number>(null);

  return (
    <SafeAreaView style={styles.parent}>
      <ScrollView style={styles.container} contentContainerStyle={styles.center}>
          <Image source={CookieImage} style={styles.image} />
          <Pressable style={styles.button} onPress={() => setIndex(Math.floor(Math.random() * 5))}>
            <Text style={styles.text} selectable={false}>
              Generate Fortune ✨
            </Text>
          </Pressable>
          {typeof(index) === 'number' && <Text style={styles.text}>
            {fortunes[index]}
          </Text>}
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#312',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    fontWeight: '500',
  },
  center: {
    alignItems: 'center',
    gap: 30,
  },
  container: {
    padding: 30,
  },
  parent: {
    flex: 1,
    backgroundColor: '#423',
  },
});
