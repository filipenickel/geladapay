import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import MyTable from '../pages/MyTable';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="MyTable" component={MyTable} />
      <App.Screen name="Welcome" component={Welcome} />
      <App.Screen name="Login" component={Login} />
    </App.Navigator>
  );
};

export default Routes;
