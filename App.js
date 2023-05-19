import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import LogInScreen from './src/login';

const Stack = createStackNavigator();


const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name=" " component={LogInScreen} />
      <Stack.Screen name=" " component={HomeScreen} />
   
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;



