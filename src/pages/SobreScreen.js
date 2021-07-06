import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SobreScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const name = route.params.name;

    const handleSendButton = () => {
        navigation.navigate('Produtos');
    }

    return (
        <View style={styles.container}>
            <Text>Bem vindo: {name}</Text>
            <Text>Veja nossos produtos</Text>
            <Button title="Produtos" onPress={handleSendButton} />
        </View>
    );
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SobreScreen;