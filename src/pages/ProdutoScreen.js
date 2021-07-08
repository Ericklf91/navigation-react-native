import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { listarProdutos, deletarProduto, atualizarProduto } from '../data/produto/produto_db';

const ProdutoScreen = () => {
    const [produtos, setProdutos] = useState(listarProdutos());
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtdEstoque, setQtdEstoque] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [atualizar, setAtualizar] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Produtos:</Text>
            <FlatList
                data={produtos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.container}>
                            <Text>Id: {item.produto_id}</Text>
                            <Text>Nome: {item.produto_nome}</Text>
                            {!atualizar ?? <TextInput value={nome}
                                onChangeText={t => setNome(t)} />}
                            <Text>Descrição: {item.produto_descricao}</Text>
                            <Text>Quantidade em estoque: {item.produto_quantidade}</Text>
                            <Text>Valor: R${item.produto_valor}</Text>
                            <TouchableOpacity onPress={() => deletarProduto(item.produto_id)}><Text style={{ color: '#FF0000' }}>Deletar</Text></TouchableOpacity>
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