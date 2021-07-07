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
    
    const ultimoId = realm_produto.objects('Produto').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 1 : ultimoId.produto_id; 
    const proximoId = maiorId != 1 ? maiorId + 1 : maiorId;
    
    realm_produto.write(() => {
        const prod = realm_produto.create('Produto', {
            produto_id: proximoId,
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