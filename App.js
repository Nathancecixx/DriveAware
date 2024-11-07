import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './src/Navigation/AppNavigator.js';
import theme from './src/Styles/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}

