import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Gato gordo...</Text>
        </View>
    )
}


export default AboutScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
