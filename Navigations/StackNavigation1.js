import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Detalles from '../Screens/Detalles';
import Contacto from '../Screens/Contacto';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Top = createMaterialTopTabNavigator();

export default function StackNavigation1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = "HomeScreen" component = {HomeScreen}
                options = {{headerShown: false, headerTitle : 'Inicio'}}
            />
            <Stack.Screen name = "Detalles" component = {Detalles}
                options = {{headerShown: true, headerTitle : 'Detalles de Plusheen'}}
            />
            <Stack.Screen name = "Contacto" component = {Contacto}
                options = {{headerShown: true, headerTitle : 'Contacto'}}
            />
        </Stack.Navigator>
    )
}