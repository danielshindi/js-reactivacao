// Exercício 1 — map
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 200 }
];

const nomes = produtos.map(produto => produto.nome);
console.log(nomes);

const promocao = produtos.map(produto => ({
  ...produto,
  emPromocao: true
}));

console.log(promocao);


// Exercício 2 — filter
const alunos = [
  { id: 1, nome: "Ana", nota: 8 },
  { id: 2, nome: "Bruno", nota: 5 },
  { id: 3, nome: "Carla", nota: 9 },
  { id: 4, nome: "Diego", nota: 4 }
];

const maiorIgual7 = alunos.filter(aluno => aluno.nota >= 7);
console.log(maiorIgual7);

const menor7 = alunos.filter(aluno => aluno.nota < 7);
console.log(menor7);


//Exercício 3 — reduce
const vendas = [
  { id: 1, valor: 100 },
  { id: 2, valor: 250 },
  { id: 3, valor: 80 }
];

const total = vendas.reduce((acumulador, venda) => acumulador + venda.valor, 0);
console.log(total);


// Exercício 4 — desestruturação
const pessoa = {
  nome: "Marina",
  idade: 27,
  profissao: "Desenvolvedora"
};

const { nome, profissao } = pessoa;
console.log(`Nome: ${nome} - Profissão: ${profissao}`);


// Exercício 5 — spread
const configPadrao = {
  tema: "claro",
  idioma: "pt-BR",
  notificacoes: true
};

const configUsuario = {
  tema: "escuro"
};

const configsFinais = { ...configPadrao, ...configUsuario };
console.log(configsFinais);


// Exercício 6 — rest
const somarTudo = (...numeros) => numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(somarTudo(1, 2, 3, 4)); // 10


// Exercício 7 — combinado
const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: true },
  { id: 2, titulo: "Estudar TS", concluida: false },
  { id: 3, titulo: "Estudar React", concluida: false },
  { id: 4, titulo: "Revisar Git", concluida: true }
];

const titulos = tarefas.map(tarefa => tarefa.titulo);
console.log(titulos);

const pendentes = tarefas.filter(tarefa => tarefa.concluida === false);
console.log(pendentes);

const totalConcluidas = tarefas.reduce((acumulador, tarefa) => tarefa.concluida ? acumulador + 1 : acumulador, 0);
console.log(totalConcluidas);
