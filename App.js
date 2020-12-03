import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav1 from './Navigations/BottomTabNav1';
import { SafeAreaView } from 'react-native'

const Tab = createMaterialTopTabNavigator();


export default class App extends Component{
  render(){

    return (
 
      <SafeAreaView style = {{flex:1}}>    

        <NavigationContainer>
          <BottomTabNav1/> 
        </NavigationContainer> 
        
        <StatusBar backgroundColor = "#336CA1"/>   
      </SafeAreaView>

        
    

        
    )};
  
}
