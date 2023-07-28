import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import styles from './styles';
import {RootStackParams} from '../../routes';
import Header from '../../components/Header';

type UseRouteType = NativeStackScreenProps<RootStackParams, 'Detail'>['route'];
export default function Detail() {
  const {params} = useRoute<UseRouteType>();
  const {title, url, explanation, date} = params;

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
