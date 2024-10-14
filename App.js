import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeroDetails from './src/screens/HeroDetails'; 
import Heroes from './src/screens/Heroes'; 
import Inicio from './src/screens/Inicio';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name='Inicio' component={Inicio} />
        <Stack.Screen name='Lista de Heróis' component={Heroes} /> 
        <Stack.Screen name='Detalhes dos Heróis' component={HeroDetails} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});