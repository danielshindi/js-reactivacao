// Exercício 1
const saudarDepoisDe1Segundo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Olá depois de 1 segundo");
        }, 1000);
    });
}

saudarDepoisDe1Segundo().then(result => console.log(result));


// Exercício 2
const exibirSaudacao = async () => {
    const result = await saudarDepoisDe1Segundo();
    console.log(result);
};

exibirSaudacao();


// Exercício 3
const buscarProduto = (id) => {
    return new Promise((resolve, reject) => {
        if (id === 1) {
            resolve({ id: 1, nome: "Mouse" });
        } else {
            reject("Produto não encontrado");
        }
    })
};

buscarProduto(1).then(result => console.log(result)).catch(erro => console.log(erro));
buscarProduto(2).then(result => console.log(result)).catch(erro => console.log(erro));


// Exercício 4
const exibirProduto = async (id) => {
    try {
        const result = await buscarProduto(id);
        console.log(result);
    } catch(erro) {
        console.log(erro);
    }
};

exibirProduto(1);
exibirProduto(2);


// Exercício 5
const simularLogin = (usuario, senha) => {
    return new Promise((resolve, reject) => {
        if (usuario === "admin" && senha === "1234") {
            resolve("Login realizado com sucesso");
        } else {
            reject("Usuário ou senha inválidos");
        }
    });
};

simularLogin('admin', '1234').then(result => console.log(result)).catch(erro => console.log(erro));
simularLogin('adf', 'esf').then(result => console.log(result)).catch(erro => console.log(erro));

const executarLogin = async (usuario, senha) => {
    try {
        const result = await simularLogin(usuario, senha);
        console.log(result);
    } catch(erro) {
        console.log(erro);
    }
}

executarLogin('admin', '1234');
executarLogin('adf', 'esf');