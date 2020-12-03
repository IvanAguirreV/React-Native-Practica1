import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Contacto = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Another Screen</Text>
            <Button 
                title="Regresemos a la pantalla Detalle"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}


export default Contacto;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
