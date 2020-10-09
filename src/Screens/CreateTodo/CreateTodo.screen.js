import { propOr } from 'ramda';
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { connect } from 'react-redux';

import { UserActions } from '../../Modules/User/User.actions'

const CreateTodoScreen = (props) => {
  console.log(props);
  return (
    <View>
      <TouchableOpacity onPress={props.testAction}>
        <Text>Hello World 2</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect(
  null,
  UserActions
)(CreateTodoScreen);