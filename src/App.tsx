import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar style="auto" />
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
