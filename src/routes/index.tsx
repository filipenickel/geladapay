import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Default from '../pages/Default';

const App = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Default" component={Default} />
    </App.Navigator>
  );
};

export default Routes;
