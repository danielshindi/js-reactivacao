// Exercício 1 — atualizar objeto sem mutar
const usuario = {
  id: 1,
  nome: "Ana",
  ativo: false
};

const usuarioAtivado = { ...usuario, ativo: true};
console.log(usuario);
console.log(usuarioAtivado);

// Exercício 2 — atualizar item em array
const usuarios = [
  { id: 1, nome: "Ana", ativo: false },
  { id: 2, nome: "Bruno", ativo: true },
  { id: 3, nome: "Carla", ativo: false }
];

const novoUsuarios = usuarios.map(usuario => {
    return usuario.id === 3
        ? { ...usuario, ativo: true }
        : usuario;
})

console.log(usuarios);
console.log(novoUsuarios);

// Exercício 3 — encadeamento
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, ativo: false },
  { id: 3, nome: "Teclado", preco: 200, ativo: true }
];

const nomeProdutosAtivos = produtos
    .filter(produto => produto.ativo)
    .map(produto => produto.nome);

console.log(nomeProdutosAtivos);

// Exercício 4 — Object.keys, Object.values, Object.entries
const curso = {
  nome: "JavaScript Moderno",
  cargaHoraria: 40,
  nivel: "iniciante"
};

console.log(Object.keys(curso));
console.log(Object.values(curso));
Object.entries(curso).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

// Exercício 5 — reduce para resumo
const tarefas = [
  { id: 1, concluida: true },
  { id: 2, concluida: false },
  { id: 3, concluida: false },
  { id: 4, concluida: true }
];

const resumo = tarefas.reduce((acumulador, tarefa) => {
    acumulador.total += 1;
    if (!tarefa.concluida) {
        acumulador.pendentes += 1;
    } else {
        acumulador.concluidas += 1;
    }
    return acumulador;
}, {
    total: 0,
    concluidas: 0,
    pendentes: 0
});

console.log(resumo);

// Exercício 6 — atualizar preço
const produtos2 = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 200 }
];

const novosProdutos2 = produtos2.map(produto => {
    return produto.id === 2
        ? { ...produto, preco: 100 }
        : produto;
})

console.log(produtos2);
console.log(novosProdutos2);

// Exercício 7 — combinado
const pedidos = [
  { id: 1, cliente: "Ana", total: 100, pago: true },
  { id: 2, cliente: "Bruno", total: 250, pago: false },
  { id: 3, cliente: "Carla", total: 80, pago: true }
];

const nomesPedidos = pedidos.map(pedido => pedido.cliente);
const pedidosPagos = pedidos.filter(pedido => pedido.pago);
const totalPagos = pedidos.reduce((acumulador, pedido) =>
    pedido.pago
        ? acumulador + pedido.total
        : acumulador, 0
    );

console.log(pedidos);
console.log(nomesPedidos);
console.log(pedidosPagos);
console.log(totalPagos);

// Exercício 8 — busca segura
const buscarProdutoPorId = (lista, id) => {
    const produto = lista.find(produto => produto.id === id);
    return produto ? produto : "Produto não encontrado";
};

console.log(buscarProdutoPorId(produtos, 2));
console.log(buscarProdutoPorId(produtos, 4));
