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

    /*const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 1 : ultimoId.produto_id;
    const proximoId = maiorId != 1 ? maiorId + 1 : proximoId + 1;*/
    const id = realm_produto.objects('Produto').length + 1;
   
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
        //const ID = id - 1;
        //const obj = realm_produto.objects('Produto');
        const obj = realm_produto.create(realm_produto.objectForPrimaryKey('Produto', id));

        obj[ID].produto_nome = nome;
        obj[ID].produto_descricao = descricao;
        obj[ID].produto_quantidade = parseInt(quantidade);
        obj[ID].produto_valor = parseFloat(valor);
    });
    Alert.alert('Produto atualizado');
}

const deletarProduto = (id) => {

    realm_produto.write(() => {
        realm_produto.delete(realm_produto.objectForPrimaryKey('Produto', id));
      });
    /*realm_produto.write(() => {
        const ID = id - 1;

        realm_produto.delete(realm_produto.objects('Produto')[ID]);
    });*/
    Alert.alert('Produto deletado');
}

export {
    listarProdutos,
    inserirProduto,
    deletarProduto,
    atualizarProduto
}