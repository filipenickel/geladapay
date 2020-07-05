import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import MyTable from '../pages/MyTable';
import Maps from '../pages/Maps';
import Wallet from '../pages/Wallet';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Login" component={Login} />
      <App.Screen name="Maps" component={Maps} />
      <App.Screen name="MyTable" component={MyTable} />
      <App.Screen name="Wallet" component={Wallet} />
    </App.Navigator>
  );
};

export default Routes;
