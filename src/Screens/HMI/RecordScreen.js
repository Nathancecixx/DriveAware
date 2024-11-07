// src/screens/Recording/RecordingScreen.js
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-paper';

const RecordingScreen = ({ navigation }) => {
  const [recording, setRecording] = useState(true);

  const stopRecording = () => {
    setRecording(false);
    // Placeholder for stopping data recording
    navigation.navigate('Dashboard');
  };

  useEffect(() => {
    // Placeholder for starting data recording
    console.log('Started recording driving data');
    return () => {
      // Cleanup if needed
      console.log('Stopped recording driving data');
    };
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1E90FF" />
      <Text style={styles.status}>Recording your driving data...</Text>
      <Button 
        mode="contained" 
        onPress={stopRecording} 
        style={styles.button}
      >
        Stop Recording
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    fontSize: 20,
    marginTop: 20,
    color: '#333',
  },
  button: {
    marginTop: 30,
    padding: 5,
    width: '60%',
  },
});

export default RecordingScreen;

