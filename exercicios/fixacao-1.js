// Exercício 1 — Corrigir variáveis
const produtos = [
  { id: 1, nome: "Mouse", estoque: 10 },
  { id: 2, nome: "Teclado", estoque: 5 }
];

function resumoEstoque(lista) {
  const total = lista.length;
  const disponiveis = lista.filter(produto => produto.estoque > 0).length;

  return {
    total,
    disponiveis
  };
}

console.log(resumoEstoque(produtos));


// Exercício 2 — Tornar seguro o uso de find
const alunos = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" }
];

function exibirAluno(id) {
  const aluno = alunos.find(aluno => aluno.id === id);
  if (!aluno) {
    console.log(`Aluno com id ${id} não encontrado.`);
    return;
  }
  console.log(aluno.nome);
}

exibirAluno(3);


// Exercício 3 — Corrigir comparações
const pedidos = [
  { id: 1, status: "entregue" },
  { id: 2, status: "pendente" },
  { id: 3, status: "entregue" }
];

function removerPedido(id) {
  return pedidos.filter(pedido => pedido.id !== id);
}

const pedidosNovo = removerPedido(2);
console.log(pedidosNovo);

// Exercício 4 — Array vazio
let tarefas = [];

function adicionarTarefa(titulo) {
  const novoId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
  const novaTarefa = {
    id: novoId,
    titulo: titulo,
    concluida: false
  };

  tarefas.push(novaTarefa);
}

adicionarTarefa('Nova tarefa');
console.log(tarefas);