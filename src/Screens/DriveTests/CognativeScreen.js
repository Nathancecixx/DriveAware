// src/screens/Congnative/CongnativeScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, Button } from 'react-native-paper';

const CongnativeScreen = () => {
  const [waiting, setWaiting] = useState(false);
  const [color, setColor] = useState('gray');
  const [message, setMessage] = useState('Press the button when the color changes!');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  useEffect(() => {
    if (waiting) {
      const timer = Math.random() * 3000 + 2000; // 2-5 seconds
      const timeout = setTimeout(() => {
        setColor('green');
        setStartTime(Date.now());
      }, timer);
      return () => clearTimeout(timeout);
    }
  }, [waiting]);

  const handlePress = () => {
    if (!waiting && color === 'green') {
      const endTime = Date.now();
      setReactionTime(endTime - startTime);
      setMessage(`Your reaction time: ${endTime - startTime} ms`);
      setColor('gray');
      setWaiting(false);
    } else if (waiting && color === 'gray') {
      setMessage('Too soon! Wait for the color to change.');
      setColor('gray');
      setWaiting(false);
    }
  };

  const startTest = () => {
    setMessage('Wait for green...');
    setColor('gray');
    setReactionTime(null);
    setWaiting(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>{message}</Text>
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: color }]}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      {reactionTime && (
        <Text style={styles.result}>Reaction Time: {reactionTime} ms</Text>
      )}
      {!waiting && !reactionTime && (
        <Button mode="contained" onPress={startTest} style={styles.startButton}>
          Start Test
        </Button>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    color: '#1E90FF',
    marginTop: 10,
  },
  startButton: {
    marginTop: 20,
    padding: 5,
  },
});

export default CongnativeScreen;

