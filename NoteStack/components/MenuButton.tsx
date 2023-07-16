import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuButton = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMenuPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ marginRight: 10 }}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
          onPress={handleModalClose}>
          <View style={{ backgroundColor: 'white', padding: 16 }}>
            <Text>Dropdown Menu Content</Text>
            {/* Add your dropdown menu items here */}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default MenuButton;
