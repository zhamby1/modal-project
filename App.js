import React from "react";
import Toast from 'react-native-toast-message'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './Home'


const Stack = createNativeStackNavigator()

export default App = () => {
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    
    </>

  )

}
  