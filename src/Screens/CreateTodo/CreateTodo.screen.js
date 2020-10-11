import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'

import { connect } from 'react-redux';

import { UserActions } from '../../Modules/User/User.actions'

import style from './CreateTodo.style';

const CreateTodoScreen = (props) => {
  const [todoContent, setTodoContent] = useState('');

  return (
    <KeyboardAvoidingView
      behavior='height'
      enabled={true}
      style={style.container}>
      <TextInput
        multiline={true}
        numberOfLines={99}
        onChangeText={setTodoContent}
        value={todoContent}
        style={style.textInput} />
      <TouchableOpacity onPress={props.testAction}>
        <View style={style.submitButton}>
          <Text style={style.submitButtonText}>Done</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default connect(
  null,
  UserActions
)(CreateTodoScreen);