import React from 'react';
import {View, Image, Pressable, Linking} from 'react-native';

import styles from './Styles';

const socials = [
  {
    url: 'https://youtube.com/@jorahty',
    imageSource: require('../assets/YouTube.png'),
  },
  {
    url: 'https://twitter.com/jorahty',
    imageSource: require('../assets/Twitter.png'),
  },
  {
    url: 'https://github.com/jorahty',
    imageSource: require('../assets/GitHub.png'),
  },
  {
    url: 'https://linkedin.com/in/jorahty',
    imageSource: require('../assets/LinkedIn.png'),
  },
  {
    url: 'https://instagram.com/jorahty',
    imageSource: require('../assets/Instagram.png'),
  },
];

export default function Socials() {
  return (
    <View style={styles.stack}>
      {socials.map(({url, imageSource}, i) => (
        <Pressable onPress={() => Linking.openURL(url)} key={i}>
          <Image source={imageSource} style={styles.social} />
        </Pressable>
      ))}
    </View>
  );
}
