import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import getAPOD, {APODResponse} from '../../utils/getAPOD';

import styles from './styles';
import {RootStackParams} from '../../routes';

type NavigationProps = NativeStackNavigationProp<RootStackParams>;
export default function APOD() {
  const [apod, setApod] = useState<APODResponse>();
  const {navigate} = useNavigation<NavigationProps>();

  useEffect(() => {
    (async () => {
      const _apod = await getAPOD();
      setApod(_apod);
    })();
  }, []);

  const handleViewBtnPress = () => {
    if (!apod) {
      return;
    }

    const {title, date, url, explanation} = apod;
    navigate('Detail', {
      title,
      date,
      url,
      explanation,
    });
  };

  if (!apod) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: apod.url}} style={styles.image} />
      </View>
      <Text style={styles.title}>{apod.title}</Text>
      <Text style={styles.date}>{apod.date}</Text>
      <View style={styles.buttonContainer}>
        <Button title="View" onPress={handleViewBtnPress} />
      </View>
    </View>
  );
}
