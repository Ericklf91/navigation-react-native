import React, { useState } from 'react';
import { Text, StyleSheet, FlatList, SafeAreaView, View } from 'react-native';
import { listarProdutos } from '../data/produto/produto_db';

const ProdutoScreen = () => {
    const [produtos, setProdutos] = useState(listarProdutos());
    return (
        <SafeAreaView style={styles.container}>
            <Text>Produtos:</Text>
            <FlatList
                data={ produtos }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return (
                        <View style={styles.container}>
                            <Text>Id: {item.produto_id}</Text>
                            <Text>Nome: {item.produto_nome}</Text>
                            <Text>Descrição: {item.produto_descricao}</Text>
                            <Text>Quantidade em estoque: {item.produto_quantidade}</Text>
                            <Text>Valor: R${item.produto_valor}</Text>
                        </View>
                    );
                }}
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