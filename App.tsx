import 'react-native-gesture-handler';

import React from 'react';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Lato_400Regular, Lato_700Bold, Lato_900Black, useFonts } from '@expo-google-fonts/lato';

import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
