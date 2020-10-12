import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'

import { connect } from 'react-redux';

import { actions } from '../CreateTodo/CreateTodo.actions'

import style from './CreateTodo.style';

const CreateTodoScreen = (props) => {
  const [todoContent, setTodoContent] = useState('');

  const createTodo = () => {
    props.createTodo({
      content: todoContent,
      componentId: props.componentId
    });
  }

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
      <SafeAreaView>
        <TouchableOpacity onPress={createTodo.bind(this)}>
          <View style={style.submitButton}>
            <Text style={style.submitButtonText}>Done</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default connect(
  null,
  actions,
)(CreateTodoScreen);