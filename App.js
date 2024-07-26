import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './src/screens/LandingPage';
import LoginScreen from './src/screens/Login';
import QuizScreen from './src/screens/Quiz';
import QuizScreen2 from './src/screens/Quiz2';
import Homepage from './src/screens/Homescreen';
import MatchingPage from './src/screens/Matching';
import ChatScreen from './src/screens/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />

        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{ headerShown: false}}
        />

        <Stack.Screen
          name="Quiz2"
          component={QuizScreen2}
          options={{ headerShown: false}}
        />

        <Stack.Screen
          name="Homescreen"
          component={Homepage}
          options={{ headerShown: false}}
        />  
        <Stack.Screen
          name="Matching"
          component={MatchingPage}
          options={{ headerShown: false}}
        />  

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false}}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}