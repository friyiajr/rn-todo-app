import React from 'react'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Colors from '../../../Helpers/colors'

const ListTile = ({ item }) => {
  return (
    <View style={style.container}>
      <View style={style.leading}>
        <View style={style.circle} />
      </View>
      <View style={style.mainContent}>
        <Text style={style.text}>{item.content}</Text>
      </View>
      <View style={style.trailing}>

      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
    borderBottomColor: Colors.ebony,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  leading: {

  },
  mainContent: {
    paddingLeft: 13,
  },
  trailing: {

  },
  circle: {
    height: 26,
    width: 26,
    borderRadius: 26 / 2,
    borderColor: Colors.ebony,
    borderWidth: 2,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default ListTile;