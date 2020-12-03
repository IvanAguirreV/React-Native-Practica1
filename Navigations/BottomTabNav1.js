import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from '../Screens/SettingsScreen';
import Ionicos from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Navigations/StackNavigation1';
import EmailScreen from '../Screens/EmailScreen';
import ToastScreen from '../Screens/ToastScreen';
import TopTabNav1 from './TopTabNav1';


const Tab = createBottomTabNavigator();

// const Top = createMaterialTopTabNavigator({
//     AboutScreen = {Screen:AboutScreen},
//     AboutScreen2 = {Screen:AboutScreen2},
// }, {
//     initialRouteName: "AboutScreen",
// })

export default function BottomTabNav1() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"

            tabBarOptions={{
                activeTintColor: "#65E0CE",
                inactiveTintColor: "#152C42",
                showLable: true,
                labelStyle: {
                    fontSize: 12
                },
                style: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    backgroundColor: "#336CA1"
                }
            }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-home"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="ToastScreen"
                component={ToastScreen}
                options={{
                    tabBarLabel: "Toast!",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-beer"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="EmailScreen"
                component={EmailScreen}
                options={{
                    tabBarLabel: "Email",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"md-mail"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Opciones",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"md-settings"} size={20} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name="About"
                component={TopTabNav1}
                options={{
                    tabBarLabel: "Acerca de",
                    tabBarIcon: ({ color }) => (
                        <Ionicos name={"ios-information-circle-outline"} size={20} color={color} />
                    )
                }}
            />
        </Tab.Navigator>


    )
}