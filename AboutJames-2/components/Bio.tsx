import React, { useState } from 'react';
import {View, Text, Pressable} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import styles from './Styles';

export default function Bio() {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.dropdown}>
      <Pressable onPress={() => setOpen(!open)}>
        <View style={styles.dropdownButton}>
          <Text style={[styles.text, styles.bold]}>Bio</Text>
          <MaterialIcons name={open ? 'keyboard-arrow-down' : 'chevron-right'} size={32} color="#fff" />
        </View>
      </Pressable>
      {open && <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis ea
        consectetur nemo quas debitis veniam pariatur nesciunt perferendis quia,
        temporibus animi, eum voluptates voluptatibus doloremque. Perferendis
        enim voluptatibus ratione. Aperiam maiores architecto veniam, voluptas
        rerum aliquam. Odio, cupiditate rerum! Aliquam dolore animi quasi
        possimus, repudiandae illum quis consequuntur repellat optio.
      </Text>}
    </View>
  );
}
