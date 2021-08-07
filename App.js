import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import COLORS from './src/consts/colors';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';
import OnBoardScreen from './src/views/OnBoardScreen';
//
const Stack = createNativeStackNavigator()
//
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen component={HomeScreen} name="Home" />
       <Stack.Screen component={OnBoardScreen} name="Board" />
       <Stack.Screen component={DetailsScreen} name="Details" />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({

})
