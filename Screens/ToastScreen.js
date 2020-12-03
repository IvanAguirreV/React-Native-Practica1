import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ToastAndroid } from 'react-native';

const Toast = ({navigation}) => {

    const makeToast = () =>{
        ToastAndroid.show('I propose a Toast!', ToastAndroid.SHORT);
    }

    return (
        <View style={styles.container}>
            <Button 
                title="A Toast!"
                onPress={()=>makeToast()}
            />
        </View>
    )
}


export default Toast;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
