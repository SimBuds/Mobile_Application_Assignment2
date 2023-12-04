import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen.js';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f0f0f0',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Caseys Room Cost Calculator' }} 
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'Caseys About Me Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}