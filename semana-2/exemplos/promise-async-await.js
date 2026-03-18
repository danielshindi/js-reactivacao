// Exemplo 1 - Promise com .then()
const esperarMensagem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensagem recebida");
    }, 2000);
  });
};

esperarMensagem().then((resultado) => {
  console.log(resultado);
});

console.log("Executando...");


// Exemplo 2 - A mesma lógica com async/await
const esperarMensagem2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mensagem recebida");
    }, 2000);
  });
};

const executar = async () => {
  console.log("Antes de esperar");

  const resultado = await esperarMensagem2();

  console.log(resultado);
  console.log("Depois de esperar");
};

executar();


// Exemplo 3 — Sucesso e erro com try/catch
const buscarUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nome: "Ana" });
      } else {
        reject("Usuário não encontrado");
      }
    }, 1000);
  });
};

const exibirUsuario = async (id) => {
  try {
    const usuario = await buscarUsuario(id);
    console.log("Usuário encontrado:", usuario);
  } catch (erro) {
    console.log("Erro:", erro);
  }
};

exibirUsuario(1);
exibirUsuario(2);