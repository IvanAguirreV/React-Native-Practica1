import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Email = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Email Screen</Text>
        </View>
    )
}


export default Email;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
