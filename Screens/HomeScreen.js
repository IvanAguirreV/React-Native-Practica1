import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container2}>
            {/* <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: ()=> navigation.openDrawer() }}
                centerComponent={{ text: 'Home', style: { color: '#fff' } }}
            /> */}

            {/* <Button
                    title="Vamos a la pantalla detalle"
                    onPress={() => navigation.navigate('Detalles')}
                /> */}

            <Text>Toca A Plusheen!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Detalles')}>
                <Image style={styles.imagesize}
                    source={require('../assets/plusheenCat.jpg')}
                />
            </TouchableOpacity>



        </View>

    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imagesize: {
        width: 150,
        height: 150,
    },
});
