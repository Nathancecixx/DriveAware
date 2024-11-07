// src/components/Input.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperInput } from 'react-native-paper';

const Input = ({ label, value, onChangeText, secureTextEntry, keyboardType, style }) => {
  return (
    <PaperInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      mode="outlined"
      style={[styles.input, style]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
  },
});

export default Input;

