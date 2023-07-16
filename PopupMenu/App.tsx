import { StyleSheet, Text, View } from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from 'react-native-popup-menu';

export default function App() {
  return (
    <MenuProvider>
      <View style={styles.container}>
        <Text>Hello, World!</Text>
        <Menu>
          <MenuTrigger>
            <Text style={styles.button}>Buy Now</Text>
          </MenuTrigger>
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text="Save" />
            <MenuOption onSelect={() => alert(`Delete`)}>
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption
              onSelect={() => alert(`Not called`)}
              disabled={true}
              text="Disabled"
            />
          </MenuOptions>
        </Menu>
      </View>
    </MenuProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#08f',
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
