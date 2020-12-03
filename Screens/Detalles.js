import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Detalles = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Gato es gordo!</Text>
            {/* <Button 
                title="Vamos a la otra pantalla"
                onPress={()=>navigation.navigate('Contacto')}
            />
            <Button 
                title="Regresemos a Home"
                onPress={()=>navigation.goBack()}
            /> */}
        </View>
    )
}

export default Detalles;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
