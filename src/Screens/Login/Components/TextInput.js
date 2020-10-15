import React from 'react';

import {
  TextInput,
  StyleSheet
} from 'react-native';

const LoginTextInput = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style.textStyle}
    />
  );
}

const style = StyleSheet.create({
  textStyle: {
    color: "grey",
    backgroundColor: "white",
    padding: 20,
  }
})

export default LoginTextInput;