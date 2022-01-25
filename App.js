import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home'
import Contacts from './src/pages/contacts';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
        />
        <Stack.Screen 
          name='Contacts'
          component={Contacts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}