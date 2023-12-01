import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from "react";
import Details from './src/Details';
import Home from './src/Home';
const Stack=createStackNavigator()
export function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Details' component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
