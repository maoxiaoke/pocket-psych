import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import {Link} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {list, CardType} from './data';

const Header = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.headerContainer]}>
      <Text
        style={{
          color: isDarkMode ? Colors.white : Colors.black,
        }}>
        {list.length} items
      </Text>
    </View>
  );
};

const Card = ({id, title, poster}: CardType): JSX.Element => {
  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.imageContainer]}>
        <Image source={poster} style={styles.image} resizeMode="cover" />
      </View>

      <Link to={{screen: 'detail', params: {id: id}}} style={[styles.title]}>
        <Text>{title}</Text>
      </Link>
    </View>
  );
};

export default function List(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Header />

      <View
        style={{
          paddingHorizontal: 12,
        }}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: 'space-between',
            flex: 1,
          }}
          data={list}
          numColumns={2}
          renderItem={({item}) => <Card {...item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 4,
    paddingLeft: 16,
    paddingRight: 12,
    height: 48,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'center',
  },
  cardContainer: {
    width: Dimensions.get('window').width / 2 - 18,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: '#E7E5E4',
    marginBottom: 10,
  },
  imageContainer: {
    height: Dimensions.get('window').width / 2 - 18,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
  },
  title: {
    padding: 16,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.1,
    textAlign: 'center',
  },
});
