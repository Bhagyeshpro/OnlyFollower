import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'OnlyFollowers', headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

