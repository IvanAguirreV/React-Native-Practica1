import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from '../Screens/AboutScreen';
import AboutScreen2 from '../Screens/AboutScreen2';

import Ionicos from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNav1() {
    return (
        <Tab.Navigator
            initialRouteName="AboutScreen"

            tabBarOptions={{
                activeTintColor: "#65E0CE",
                inactiveTintColor: "#152C42",
                showIcon: true,
                showLable: true,
                labelStyle: {
                    fontSize: 12
                },
                style: {
                    paddingTop: Constants.statusBarHeight,
                    backgroundColor: "#336CA1"
                }
            }}
        >

            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={{
                    tabBarLabel: "Acerca de",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-information-circle-outline"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="About 2"
                component={AboutScreen2}
                options={{
                    tabBarLabel: "Acerca de... 2",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-information-circle-outline"} size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}