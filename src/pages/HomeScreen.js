import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleSendButton = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Enviar" onPress={handleSendButton} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }    
});

export default HomeScreen;