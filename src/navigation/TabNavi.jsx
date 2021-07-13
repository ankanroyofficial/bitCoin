
import React from 'react';
import { Dimensions, View, StyleSheet, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Screen3 from '../screen/Screen3';
import PricesPage from '../screen/PricesPage';
import SettingPage from '../screen/SettingPage';
import Screen2 from '../screen/Screen2';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const { height, width } = Dimensions.get("window")
const Tab = createBottomTabNavigator();

export default function TabNavi() {
    return (

        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: "absolute",
                backgroundColor: "white",
                height: height * 0.085,
                ...style.shadow
            }

        }}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="home" size={focused ? width * 0.08 : width * 0.07} color={focused ? "#5b62ff" : "#BFBFBF"} />
                    </View>
                )
            }} />
            <Tab.Screen name="Screen2" component={Screen2} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons name="pie-chart" size={focused ? width * 0.08 : width * 0.07} color={focused ? "#5b62ff" : "#BFBFBF"} />
                    </View>
                )
            }} />
            <Tab.Screen name="Screen3" component={Screen3} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? "#5b62ff" : "#BFBFBF", height: height * 0.085, width: height * 0.085, borderRadius: (height * 0.085) / 2, top: -(height * 0.085) / 2 }}>
                        <MaterialCommunityIcons name="swap-horizontal" size={width * 0.1} color="white" />
                    </View>
                )
            }} />
            <Tab.Screen name="PricesPage" component={PricesPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="bitcoin" size={focused ? width * 0.075 : width * 0.068} color={focused ? "#5b62ff" : "#BFBFBF"} />
                    </View>
                )
            }} />
            <Tab.Screen name="SettingPage" component={SettingPage} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="settings" size={focused ? width * 0.075 : width * 0.062} color={focused ? "#5b62ff" : "#BFBFBF"} />
                    </View>
                )
            }} />
        </Tab.Navigator>

    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.5,
        elevation: 2
    }

})