// Exercício 1 — parâmetro padrão
const calcularDesconto = (valor, percentual = 10) => valor - valor * percentual / 100;

console.log(calcularDesconto(200)); // 180
console.log(calcularDesconto(200, 20)); // 160

// Exercício 2 — callback
const processarNumero = (numero, operacao) => operacao(numero);
const dobrar = (numero) => numero * 2;
const triplicar = (numero) => numero * 3;
const dividirPorDois = (numero) => numero / 2;

console.log(processarNumero(3, dobrar));
console.log(processarNumero(3, triplicar));
console.log(processarNumero(3, dividirPorDois));

// Exercício 3 — some
const usuarios = [
  { id: 1, nome: "Ana", ativo: true },
  { id: 2, nome: "Bruno", ativo: false },
  { id: 3, nome: "Carla", ativo: true }
];

console.log("Existe pelo menos um usuário inativo?", usuarios.some(usuario => usuario.ativo === false));

// Exercício 4 — every
console.log("Todos os usuários estão ativos?", usuarios.every(usuario => usuario.ativo === true));

// Exercício 5 — sort
const produtos = [
  { id: 1, nome: "Mouse", preco: 80 },
  { id: 2, nome: "Notebook", preco: 3500 },
  { id: 3, nome: "Teclado", preco: 200 }
];

const produtosOrdenadosPrecoCrescente = [...produtos].sort((a, b) => a.preco - b.preco);
const produtosOrdenadosPrecoDecrescente = [...produtos].sort((a, b) => b.preco - a.preco);

console.log(produtos);
console.log(produtosOrdenadosPrecoCrescente);
console.log(produtosOrdenadosPrecoDecrescente);

// Exercício 6 — cópia de objeto
const usuario = {
    nome: 'Daniel',
    email: 'email@email.com',
    ativo: true
};

const usuarioCopia = { ...usuario, ativo: false };

console.log(usuario);
console.log(usuarioCopia);

// Exercício 7 — Promise simples
const carregarMensagem = () => {
    return new Promise((resolve, reject) => {
        const sucesso = true;
        if (sucesso) {
            resolve("Dados carregados com sucesso");
        } else {
            reject("Erro");
        }
    });
};
    

carregarMensagem()
.then(result => console.log(result))
.catch(erro => console.log(erro));

// Exercício 8 — async/await
const exibeMensagem = async () => {
    try {
        const result = await carregarMensagem();
        console.log(result);
    } catch(erro) {
        console.log(erro);
    }
};

exibeMensagem();

// Exercício 9 — try/catch
const resolverPromise = () => {
    return new Promise((resolve, reject) => {
        const sucesso = true;
        if (sucesso) {
            resolve("Promise resolvida");
        } else {
            reject("Erro");
        }
    });
};

const executar = async () => {
    try {
        const result = await resolverPromise();
        console.log(result);
    } catch (erro) {
        console.log(erro);
    }
};

executar();