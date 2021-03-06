import Realm from 'realm';
import { Alert } from 'react-native';

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    primaryKey: 'produto_id',
    properties: {
        produto_id: { type: 'int', indexed: true },
        produto_nome: 'string',
        produto_descricao: 'string',
        produto_quantidade: 'int',
        produto_valor: 'float'
    }
};

let realm_produto = new Realm({ schema: [ProdutoSchema], schemaVersion: 1 });

export default realm_produto;

const listarProdutos = () => {
    return realm_produto.objects('Produto');
}

const inserirProduto = (nome, descricao, quantidade, valor) => {

    const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.produto_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;
   
    realm_produto.write(() => {
        const prod = realm_produto.create('Produto', {
            produto_id: proximoId,
            produto_nome: nome,
            produto_descricao: descricao,
            produto_quantidade: parseInt(quantidade),
            produto_valor: parseFloat(valor)
        });
        Alert.alert('Produto inserido');
    });
}

const atualizarProduto = (id, nome, descricao, quantidade, valor) => {

    realm_produto.write(() => {
        const obj = realm_produto.objectForPrimaryKey('Produto', id);

        obj.produto_nome = nome;
        obj.produto_descricao = descricao;
        obj.produto_quantidade = parseInt(quantidade);
        obj.produto_valor = parseFloat(valor);
    });
    Alert.alert('Produto atualizado');
}

const deletarProduto = (id) => {

    realm_produto.write(() => {
        realm_produto.delete(realm_produto.objectForPrimaryKey('Produto', id));
      });
    Alert.alert('Produto deletado');
}

export {
    listarProdutos,
    inserirProduto,
    deletarProduto,
    atualizarProduto
}