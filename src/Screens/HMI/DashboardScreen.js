
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph, Button } from 'react-native-paper';

const DashboardScreen = ({ navigation }) => {
  // Placeholder data
  const stats = [
    { title: 'Total Miles', value: '1200' },
    { title: 'Trips', value: '150' },
    { title: 'Average Speed', value: '65 MPH' },
    // Add more stats as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Your Driving Stats</Text>
      {stats.map((stat, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{stat.title}</Title>
            <Paragraph>{stat.value}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <Button 
        mode="contained" 
        onPress={() => navigation.navigate('Congnative')}
        style={styles.button}
      >
        Test Reaction Time
      </Button>
      <Button 
        mode="outlined" 
        onPress={() => navigation.navigate('Recording')}
        style={styles.button}
      >
        Start Recording
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1E90FF',
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
  },
});

export default DashboardScreen;

