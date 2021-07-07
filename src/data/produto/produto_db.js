import Realm from 'realm';

class ProdutoSchema extends Realm.Object { }
ProdutoSchema.schema = {
    name: 'Produto',
    properties: {
        produto_id: { type: 'int', default: 0 },
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
    
    var id = realm_produto.objects('Produto').length + 1;
    
    realm_produto.write(() => {
        const prod = realm_produto.create('Produto', {
            produto_id: id,
            produto_nome: nome,
            produto_descricao: descricao,
            produto_quantidade: parseInt(quantidade),
            produto_valor: parseFloat(valor)
        });
    });
}

export {
    listarProdutos,
    inserirProduto
}