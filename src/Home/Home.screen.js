import React, { useCallback } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import ListTile from './Components/ListTile';

import style from './Home.style';

import { UserActions } from '../Modules/User/User.actions';

const Home = (props) => {
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
      <TouchableOpacity onPress={props.testAction}>
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
      </TouchableOpacity>
    </View>
  )
}

export default connect(
  null,
  UserActions,
)(Home);