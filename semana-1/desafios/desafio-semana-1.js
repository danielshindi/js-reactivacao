// Sistema simples de gerenciamento de produtos

let produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 10 },
    { id: 2, nome: "Mouse", preco: 80, estoque: 25 },
    { id: 3, nome: "Teclado", preco: 200, estoque: 15 }
];

function adicionarProduto(nome, preco, estoque) {
    const novoId = produtos.length > 0 ? produtos[produtos.length - 1].id + 1 : 1;
    const novoProduto = { id: novoId, nome, preco, estoque }
    produtos = [...produtos, novoProduto];
    console.log(`Produto "${nome}" adicionado com sucesso.`)
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log('Lista de produtos vazia.');
        return;
    }
    console.log('Produtos:');
    produtos.forEach(produto => {
        console.log(produto);
    });
}

function buscarProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

function atualizarPreco(id, novoPreco) {
    const produto = buscarProdutoPorId(id);
    if (!produto) {
        console.log("Produto não encontrado.");
        return;
    }
    produto.preco = novoPreco;
    console.log(`Preço do produto "${produto.nome}" atualizado para R$ ${novoPreco}.`);
}

function removerProduto(id) {
    const tamanhoAnterior = produtos.length;
    produtos = produtos.filter(produto => produto.id !== id);
    if (tamanhoAnterior === produtos.length) {
        console.log(`Produto com id ${id} não encontrado.`)
        return;
    }
    console.log(`Produto com id ${id} removido com sucesso.`)
}

function listarEstoqueBaixo() {
    const produtosEstoqueBaixo = produtos.filter(produto => produto.estoque < 20);
    if (produtosEstoqueBaixo.length === 0) {
        console.log('Não há produtos com estoque baixo.');
        return;
    }
    console.log('Produtos com estoque baixo: ');
    produtosEstoqueBaixo.forEach(produto => {
        console.log(produto);
    });
}

function calcularValorTotalEstoque() {
    return produtos.reduce((acumulador, produto) => acumulador + produto.preco * produto.estoque, 0);
}

function aplicarDesconto(percentual) {
    if (produtos.length === 0) {
        console.log('Lista de produtos vazia.');
        return;
    }
    if (percentual < 0 || percentual > 100) {
        console.log("Percentual inválido.");
        return;
    }
    const produtosComDesconto = produtos.map(produto => {
        return { ...produto, preco: produto.preco * (100 - percentual) / 100 };
    });
    console.log(`Desconto de ${percentual}% aplicado aos produtos.`)
    return produtosComDesconto;
}

////////////////////////////////////////////////////////////////////////////////////

adicionarProduto('Novo produto', 2500, 20);
listarProdutos();

const produto = buscarProdutoPorId(2);

if (!produto) {
  console.log("Produto não encontrado.");
} else {
  console.log("Produto encontrado:", produto);
}

atualizarPreco(2, 100);
listarProdutos();

listarEstoqueBaixo();

console.log('Valor total em estoque: ');
console.log(calcularValorTotalEstoque());

const produtosComDesconto = aplicarDesconto(10);
console.log(produtosComDesconto);