import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen'
import MapScreen from './screens/MapScreen'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ListScreen" component={ListScreen}/>
        <Stack.Screen name="MapScreen" component={MapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
