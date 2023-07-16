import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, Text, View, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './Styles';
import Button from './components/Button';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Button
          icon={<MaterialIcons name="more-horiz" size={24} />}
          onPress={openModal}
        />
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={closeModal}>
          {/* <Pressable style={styles.modalContainer} onPress={closeModal}> */}
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Hello, World!</Text>
              <Text>Menu Items Go Here!</Text>
              <Button
                icon={<MaterialIcons name="close" size={24} />}
                onPress={closeModal}
              />
            </View>
          </SafeAreaView>
          {/* </Pressable> */}
        </Modal>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
