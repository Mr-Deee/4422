import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/home';
import LoginScreen from './src/login';
import SignupScreen from './src/signup';
import firebase from 'firebase';

const Stack = createStackNavigator();



const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Signup" component={SignupScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />

   
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;



