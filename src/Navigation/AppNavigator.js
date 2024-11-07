// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/Auth/LoginScreen';
import RegisterScreen from '../Screens/Auth/RegisterScreen';
import DashboardScreen from '../Screens/HMI/DashboardScreen';
import CongnativeScreen from '../Screens/DriveTests/CognativeScreen';
import RecordingScreen from '../Screens/HMI/RecordScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Authentication Screens */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }}
        />

        {/* Main App Screens */}
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={{ title: 'Dashboard' }}
        />
        <Stack.Screen 
          name="Congnative" 
          component={CongnativeScreen} 
          options={{ title: 'Reaction Test' }}
        />
        <Stack.Screen 
          name="Recording" 
          component={RecordingScreen} 
          options={{ title: 'Recording' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

