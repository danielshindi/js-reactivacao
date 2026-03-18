// Exercício A
const buscarTarefa = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve("Tarefa");
            } else {
                reject("Tarefa não encontrada");
            }
        }, 1000);
    });
}

// buscarTarefa(1).then(result => console.log(result)).catch(erro => console.log(erro));
// buscarTarefa(2).then(result => console.log(result)).catch(erro => console.log(erro));

const exibirTarefa = async (id) => {
    try {
        const result = await buscarTarefa(id);
        console.log(result);
    } catch (erro) {
        console.log(erro);
    }
};

// exibirTarefa(1);
// exibirTarefa(2);


// Exercício B
const buscarUsuario = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nome: "Ana" });
    }, 1000);
  });
};

const buscarPedidos = (usuarioId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 101, total: 50 },
        { id: 102, total: 120 }
      ]);
    }, 1000);
  });
};

const exibirDados = async () => {
  try {
    const usuario = await buscarUsuario();
    const pedidos = await buscarPedidos(usuario.id);

    console.log(usuario);
    console.log(pedidos);
  } catch (erro) {
    console.log(erro);
  }
};

// exibirDados();


// Exercício C
const simularPagamento = (valor) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valor <= 500) {
                resolve("Pagamento aprovado");
            } else {
                reject("Pagamento recusado");
            }
        }, 1000);      
    });
};

const pagar = async (valor) => {
    try {
        const result = await simularPagamento(valor);
        console.log(result);
    } catch (erro) {
        console.log(erro);
    }
};

pagar(250);
pagar(750);