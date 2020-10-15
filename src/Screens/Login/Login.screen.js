import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import LoginTextInput from './Components/TextInput';

import { actions } from './Login.actions';

import style from './Login.style';

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    props.attemptLogin({ email, password });
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContent}>
        <View style={style.titleArea}>
          <Text style={style.titleText}>Simple Todo</Text>
        </View>
        <View style={style.textArea}>
          <LoginTextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Login" />
          <LoginTextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password" />
        </View>
        <TouchableWithoutFeedback onPress={login.bind(this)}>
          <View style={style.loginButton}>
            <Text>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

export default connect(
  null,
  actions,
)(Login)

