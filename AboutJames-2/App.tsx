import Constants from 'expo-constants';
import React from 'react';
import {View, Text, ScrollView, Image, Linking, StatusBar} from 'react-native';

import styles from './components/Styles';
import Socials from './components/Socials';
import Bio from './components/Bio';

const PortraitImage = require('./assets/portrait.png');

export default function App() {
  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.text, styles.title]}>
          {String(StatusBar.currentHeight)}
        </Text>
        <Text style={[styles.text, styles.title]}>
          {Constants.statusBarHeight}
        </Text>
        <Text style={[styles.text, styles.title]}>James Tennant</Text>
        <Image source={PortraitImage} style={styles.portrait} />
        <Text style={[styles.text]}>
          Computer Engineering at{' '}
          <Text
            style={[styles.text, styles.link]}
            onPress={() => Linking.openURL('https://ucsc.edu')}>
            University of California, Santa Cruz
          </Text>
        </Text>
        <Text
          style={[styles.text, styles.address]}
          onPress={() => Linking.openURL('mailto:jtennant@ucsc.edu')}>
          jtennant@ucsc.edu
        </Text>
        <Socials />
        <Bio />
      </ScrollView>
      <StatusBar hidden />
    </View>
  );
}
