import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import WelCome from '../pages/WelCome';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Login" component={Login} />
      <App.Screen name="WelCome" component={WelCome} />
    </App.Navigator>
  );
};

export default Routes;
