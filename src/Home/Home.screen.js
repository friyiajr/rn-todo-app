import React, { useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
} from 'react-native';
import ListTile from './Components/ListTile';

import style from './Home.style';

const Home = () => {
  const keyExtractor = useCallback(item => item.id, []);
  const getItemLayout = useCallback(
    (_, index) => {
      const ITEM_HEIGHT = 75;
      return {
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      }
    }, [])

  return (
    <View style={style.container}>
      <Text style={style.title}>Reminders</Text>
      <FlatList
        keyExtractor={keyExtractor}
        data={
          [
            {
              id: "1",
              content: "Hello",
            },
            {
              id: "2",
              content: "Hello",
            },
          ]
        }
        getItemLayout={getItemLayout}
        renderItem={ListTile}
        windowSize={6}
      />
    </View>
  )
}

export default Home;