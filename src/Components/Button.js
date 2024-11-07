// src/components/Button.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const Button = ({ mode, onPress, style, children }) => {
  return (
    <PaperButton 
      mode={mode} 
      onPress={onPress} 
      style={[styles.button, style]}
      contentStyle={styles.content}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
  },
  content: {
    height: 50,
  },
});

export default Button;

