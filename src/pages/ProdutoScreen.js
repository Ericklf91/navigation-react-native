import React from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const ProdutoScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Produtos:</Text>
            <FlatList
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProdutoScreen;