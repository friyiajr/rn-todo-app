import React, { useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import style from './Home.style';
import ListTile from './Components/ListTile';
import CreateTodoButton from './Components/CreateTodoButton';

import { actions } from './Home.actions';
import { selector } from './Home.selectors';

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

  const navigateToCreateTodoScreen = () => {
    props.pushScreen({
      componentId: props.componentId,
      targetScreen: 'com.myApp.CreateTodoScreen'
    });
  }

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.title}>Reminders</Text>
        <FlatList
          keyExtractor={keyExtractor}
          data={props.allTodos}
          getItemLayout={getItemLayout}
          renderItem={ListTile}
          windowSize={6}
        />
      </View>
      <CreateTodoButton
        onPress={navigateToCreateTodoScreen.bind(this)}
      />
    </SafeAreaView>
  )
}

export default connect(
  selector,
  actions,
)(Home);