// src/styles/theme.js
import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF', // Customize as per your branding
    accent: '#f1c40f',
  },
};

export default theme;

