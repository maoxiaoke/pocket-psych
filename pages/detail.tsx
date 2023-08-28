import React, {Fragment} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useMarkdown} from 'react-native-marked';

import {list} from '../components/data';

const Detail = () => {
  const route = useRoute<any>();

  // eslint-disable-next-line eqeqeq
  const detail = list.find(item => item.id == route?.params?.id)?.detail;

  const elements = useMarkdown(detail ?? '');
  return (
    <ScrollView style={styles.detail}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        showHideTransition="none"
        hidden={false}
      />
      <View style={styles.imageContainer}>
        <Image
          source={detail?.cover ?? require('../assets/poster/test-poster.png')}
          resizeMode="cover"
          style={styles.cover}
        />
        <View style={styles.likeContainer}>
          <TouchableOpacity
            onPress={() => {
              // navigation.goBack();
            }}>
            <Image
              source={require('../assets/icons/like.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.markdown}>
        {elements.map((element, index) => {
          return <Fragment key={`demo_${index}`}>{element}</Fragment>;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  detail: {
    backgroundColor: '#fff',
  },
  imageContainer: {
    position: 'relative',
  },
  likeContainer: {
    position: 'absolute',
    bottom: -30,
    right: 20,
  },
  arrow: {
    width: 60,
    height: 60,
  },
  cover: {
    width: '100%',
    objectFit: 'cover',
    height: 530,
  },
  markdown: {
    padding: 20,
  },
});
