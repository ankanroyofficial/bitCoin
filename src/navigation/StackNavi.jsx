import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../screen/HomePage"
import CurrencyDetails from "../screen/CurrencyDetails"
import TabNavi from './TabNavi';
export default function StackNavi() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={TabNavi} options={{ headerShown: false }} />
                <Stack.Screen name="CurrencyDetails" component={CurrencyDetails} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
