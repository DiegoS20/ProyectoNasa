import React from 'react';
import {Text, View, Image} from 'react-native';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image
          source={require('../../assets/images/nasa-logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}
