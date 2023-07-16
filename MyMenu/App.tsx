import { useState, useRef } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutChangeEvent,
  Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<TouchableOpacity>(null);

  const openMenu = () => {
    buttonRef.current?.measure((x, y, width, height, left, top) => {
      setMenuPosition({ top: top + height, left });
      setMenuOpen(true);
    });
  };

  const closeMenu = () => setMenuOpen(false);

  const handleButtonLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setMenuPosition({ top: y + height, left: x });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        ref={buttonRef}
        style={styles.button}
        onPress={openMenu}
        onLayout={handleButtonLayout}>
        <MaterialIcons name="more-horiz" />
      </TouchableOpacity>
      <Modal visible={menuOpen} transparent={true} onRequestClose={closeMenu}>
        <Pressable onPress={closeMenu} style={styles.modal}>
          <View style={[styles.menu, menuPosition]}>
            <Text style={styles.menuItem} onPress={() => {}}>
              Delete
            </Text>
            <Text style={styles.menuItem} onPress={() => {}}>
              Edit
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 100,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: 'lightgrey',
    position: 'absolute',
    minWidth: 100,
    padding: 10,
  },
  menuItem: {
    padding: 10,
  },
});
