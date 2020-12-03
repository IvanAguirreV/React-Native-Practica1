import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    )
}


export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
