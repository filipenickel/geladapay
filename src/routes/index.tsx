import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
// import Welcome from '../pages/Welcome';
import SreenMaps from '../pages/ScreenMaps';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="SreenMaps" component={SreenMaps} />
      <App.Screen name="Login" component={Login} />
    </App.Navigator>
  );
};

export default Routes;
