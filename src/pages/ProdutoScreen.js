import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, FlatList, SafeAreaView, View, TouchableOpacity, Button } from 'react-native';
import { listarProdutos, deletarProduto, atualizarProduto } from '../data/produto/produto_db';


const ProdutoScreen = () => {
    const [produtos, setProdutos] = useState(listarProdutos());
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtdEstoque, setQtdEstoque] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [atualizar, setAtualizar] = useState(false);

    const handleAtualizar = (idProd) => {
        setAtualizar(!atualizar);
        setId(idProd);
    }

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
                            <Text>Descrição: {item.produto_descricao}</Text>
                            <Text>Quantidade em estoque: {item.produto_quantidade}</Text>
                            <Text>Valor: R${item.produto_valor}</Text>
                            <TouchableOpacity
                                onPress={() => handleAtualizar(item.produto_id)}>
                                <Text style={{color: 'green'}}>Atualizar</Text>
                            </TouchableOpacity>
                            {atualizar && item.produto_id === id &&
                                <View>
                                    <Text>Nome:</Text>
                                    <TextInput style={styles.input} value={nome}
                                        onChangeText={t => setNome(t)} />
                                    <Text>Descrição:</Text>
                                    <TextInput style={styles.input} value={descricao}
                                        onChangeText={t => setDescricao(t)} />
                                    <Text>Quantidade:</Text>
                                    <TextInput style={styles.input} value={qtdEstoque}
                                        onChangeText={t => setQtdEstoque(t)} />
                                    <Text>Valor:</Text>
                                    <TextInput style={styles.input} value={valorUnitario}
                                        onChangeText={t => setValorUnitario(t)} />
                                    <Button title="Enviar" onPress={() => atualizarProduto(
                                        item.produto_id,
                                        nome,
                                        descricao,
                                        qtdEstoque,
                                        valorUnitario)} />
                                </View>
                            }
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
    },
    input: {
        width: 250,
        padding: 10,
        fontSize: 15,
        backgroundColor: '#DDD'
    }
});

export default ProdutoScreen;