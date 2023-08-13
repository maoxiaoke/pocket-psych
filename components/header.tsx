import React from 'react';
import {StyleSheet, Text, useColorScheme, View, Image} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Header(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Image
        source={require('../assets/favicon.png')}
        style={[styles.favicon]}
        resizeMode="cover"
      />
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Pocket Psychology
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  favicon: {
    width: 25,
    height: 25,
  },
});
