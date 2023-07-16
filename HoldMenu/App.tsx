import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HoldMenuProvider } from 'react-native-hold-menu';

import { HoldItem } from 'react-native-hold-menu';

const MenuItems = [
  { text: 'Actions', icon: 'home', isTitle: true, onPress: () => {} },
  { text: 'Action 1', icon: 'edit', onPress: () => {} },
  { text: 'Action 2', icon: 'map-pin', withSeparator: true, onPress: () => {} },
  { text: 'Action 3', icon: 'trash', isDestructive: true, onPress: () => {} },
];

export default function App() {
  return (
    <HoldMenuProvider safeAreaInsets={{ top: 0, bottom: 0, right: 0, left: 0 }}>
      <View style={styles.container}>
        <Text>Hello, HoldMenu!</Text>
        <HoldItem items={MenuItems}>
          <Text>Hello, HoldMenu!</Text>
        </HoldItem>
        <StatusBar style="auto" />
      </View>
    </HoldMenuProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
