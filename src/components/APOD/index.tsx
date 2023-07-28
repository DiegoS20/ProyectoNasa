import React, {useEffect, useState} from 'react';
import {Button, Image, Text, View} from 'react-native';
import getAPOD, {APODResponse} from '../../utils/getAPOD';

import styles from './styles';

export default function APOD() {
  const [apod, setApod] = useState<APODResponse>();

  useEffect(() => {
    (async () => {
      const _apod = await getAPOD();
      setApod(_apod);
    })();
  }, []);

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
        <Button title="View" />
      </View>
    </View>
  );
}
