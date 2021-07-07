import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { inserirProduto } from '../data/produto/produto_db';

const CadastroScreen = () => {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qtdEstoque, setQtdEstoque] = useState('');
    const [dataCadastro, setDataCadastro] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');

    const salvarProduto = () => {    
            inserirProduto(nome, descricao, qtdEstoque, valorUnitario);
            alert('Produto inserido');
    }

    const handleSendButton = () => {
        navigation.navigate('Produtos');
    }

    return (
        <View style={styles.container}>
            <Text>Nome do produto:</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do produto..."
                value={nome}
                onChangeText={t => setNome(t)} />
            <Text>Descrição:</Text>
            <TextInput
                style={styles.input}
                placeholder="Descrição..."
                value={descricao}
                onChangeText={t => setDescricao(t)} />
            <Text>Quantidade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Quantidade em estoque..."
                value={qtdEstoque}
                onChangeText={t => setQtdEstoque(t)} />
            <Text>Valor unitário:</Text>
            <TextInput
                style={styles.input}
                placeholder="Valor unitário..."
                value={valorUnitario}
                onChangeText={t => setValorUnitario(t)} />
            <Button title="Enviar" onPress={salvarProduto} />
            <Text>Veja nossos produtos</Text>
            <Button title="Exibir" onPress={handleSendButton} />
        </View>
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

export default CadastroScreen;