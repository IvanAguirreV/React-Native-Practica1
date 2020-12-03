import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Navigations/StackNavigation1';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import Ionicos from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function DrawerNav1()
{
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name = "Home"
                component = {HomeScreen} 
                options = {{
                    drawerLabel: "Home",
                    drawerIcon:({color})=>(
                        <Ionicos name = {"ios-home"} size = {20} color = {color}/>
                    )
                }}
            />

            <Drawer.Screen
                name = "Settings"
                component = {SettingsScreen}
                options = {{
                    drawerLabel : "Configuracion",
                    drawerIcon: ({color})=>(
                        <Ionicos name ={"md-settings"} size = {20} color = {color}/>
                    )
                }}    
            />

            <Drawer.Screen
                name = "About"
                component = {AboutScreen}
                options = {{
                    drawerLabel: "Acerca de",
                    drawerIcon: ({color})=>(
                        <Ionicos name = {"ios-information-circle-outline"} size = {20} color = {color}/>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}
