import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {APODResponse} from '../../utils/getAPOD';
import getPast5APOD from '../../utils/getPast5APOD';

import styles from './styles';

export default function Last5DaysImages() {
  const [images, setImages] = useState<APODResponse[]>();

  useEffect(() => {
    (async () => {
      setImages(await getPast5APOD());
    })();
  }, []);

  if (!images) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {images.map((img, i) => (
          <PostImage key={i} {...img} />
        ))}
      </ScrollView>
    </View>
  );
}

const PostImage = ({title, date}: APODResponse) => (
  <View style={styles.PIContainer}>
    <Text style={styles.PITitle}>{title}</Text>
    <Text style={styles.PIDate}>{date}</Text>
    <View style={styles.PIBtnContainer}>
      <Button title="View" />
    </View>
  </View>
);
