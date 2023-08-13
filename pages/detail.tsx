import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Markdown from 'react-native-marked';

import {list} from '../components/data';

const Detail = () => {
  const route = useRoute<any>();

  // eslint-disable-next-line eqeqeq
  const detail = list.find(item => item.id == route?.params?.id)?.detail;

  return (
    <SafeAreaView>
      <Markdown value={detail ?? ''} />
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
