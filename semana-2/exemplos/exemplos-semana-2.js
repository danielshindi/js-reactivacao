const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 10 },
  { id: 2, nome: "Mouse", preco: 80, estoque: 25 },
  { id: 3, nome: "Teclado", preco: 200, estoque: 15 }
];

// parâmetro padrão
const aplicarTaxa = (valor, taxa = 0.1) => valor + valor * taxa;
console.log(aplicarTaxa(100));
console.log(aplicarTaxa(100, 0.2));

// callback
const executarOperação = (a, b, operacao) => operacao(a, b);
console.log(executarOperação(10, 5, (x, y) => x - y));

// some
const temEstoqueBaixo = produtos.some(produto => produto.estoque < 20);
console.log("Tem estoque baixo?", temEstoqueBaixo);

// every
const todosTemPreco = produtos.every(produto => produto.preco > 0);
console.log("Todos têm preço válido?", todosTemPreco);

//sort
const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
console.log("Ordenados por preço:", produtosOrdenados);

// cópia de objeto
const produtoOriginal = { id: 1, nome: "Mouse", preco: 80 };
const produtoCopia = { ...produtoOriginal, preco: 100 };
console.log("Original:", produtoOriginal);
console.log("Cópia:", produtoCopia);

// promise
const buscarMensagem = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensagem carregada");
        }, 1000);
    });
};

// async/await
const carregarMensagem = async () => {
    try {
        const mensagem = await buscarMensagem();
        console.log(mensagem);
    } catch(erro) {
        console.log(erro);
    }
};

carregarMensagem();
