import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import style from './Login.style';

const Login = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titleText}>Simple Todo</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
      />
      <TouchableWithoutFeedback>
        <Text>Login</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default connect(
  null,
  null,
)(Login)

