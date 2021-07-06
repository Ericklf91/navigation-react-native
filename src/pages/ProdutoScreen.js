import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProdutoScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>Produtos:</Text>
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

export default ProdutoScreen;