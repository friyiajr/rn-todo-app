import React from 'react';

import { TextInput } from 'react-native';

const LoginTextInput = ({
  value,
  onChangeText
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
    />
  );
}

export default LoginTextInput;