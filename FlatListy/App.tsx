import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

interface Item {
  id: string;
  value: string;
}

const data: Item[] = Array.from({ length: 800 }, (_, index) => ({
  id: String(index + 1),
  value:
    '#' +
    Math.floor(Math.random() * Math.pow(16, 6))
      .toString(16)
      .padStart(6, '0'),
}));

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // horizontal
        style={styles.scroll}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Text style={[styles.text, { backgroundColor: item.value }]}>
            {index} {item.id} {item.value}
          </Text>
        )}
        ItemSeparatorComponent={() => <Text style={styles.text}>🐸</Text>}
        ListEmptyComponent={() => <Text style={styles.text}>Psych 😂</Text>}
      />
      <View style={styles.controls}>
        <Text style={styles.text}>Hello, Expo!</Text>
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
    backgroundColor: '#278',
    height: 0,
  },
  controls: {
    backgroundColor: '#484',
  },
  container: {
    backgroundColor: '#844',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
