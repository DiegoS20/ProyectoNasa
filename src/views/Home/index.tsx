import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import APOD from '../../components/APOD';

import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <APOD />
    </View>
  );
}
