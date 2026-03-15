// Exercício 1
const usuarios = [
  { id: 1, nome: "Ana", idade: 22, ativo: true },
  { id: 2, nome: "Bruno", idade: 17, ativo: false },
  { id: 3, nome: "Carla", idade: 29, ativo: true },
  { id: 4, nome: "Diego", idade: 15, ativo: true }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo === true);
console.log(usuariosAtivos);

const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes);

const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
console.log(maioresDeIdade);

const usuarioId3 = usuarios.find(usuario => usuario.id === 3);
console.log(usuarioId3);


// Exercício 2
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Teclado", preco: 200 },
  { id: 4, nome: "Monitor", preco: 900 }
];

const produtosDesconto10 = produtos.map(produto => produto.preco * 0.9);
console.log(produtosDesconto10);

const produtosPrecoMaior300 = produtos.filter(produto => produto.preco > 300);
console.log(produtosPrecoMaior300);

const produtoMouse = produtos.find(produto => produto.nome === "Mouse");
console.log(produtoMouse);


// Exercício 3
function somaMaiorMenor(numeros) {
    const soma = numeros.reduce((soma, numero) => soma + numero, 0);
    
    let maior = numeros[0];
    numeros.forEach(numero => {
        if (numero > maior) {
            maior = numero;
        }
    });
    
    let menor = numeros[0];
    numeros.forEach(numero => {
        if (numero < menor) {
            menor = numero;
        }
    });

    return {
        soma: soma,
        maior: maior,
        menor: menor
    };
}

const numeros = [10, 4, 7, 25, 3];
console.log(somaMaiorMenor(numeros));


// Exercício 4
const tarefas = [
  { id: 1, titulo: "Estudar JavaScript", concluida: true, prioridade: "alta" },
  { id: 2, titulo: "Revisar Git", concluida: false, prioridade: "media" },
  { id: 3, titulo: "Fazer exercício", concluida: false, prioridade: "alta" },
  { id: 4, titulo: "Organizar ambiente", concluida: true, prioridade: "baixa" }
];

function exercicio4(tarefas) {
    const totalTarefas = tarefas.length;
    const totalConcluidas = tarefas.filter(tarefa => tarefa.concluida === true).length;
    const totalPendentes = tarefas.filter(tarefa => tarefa.concluida === false).length;

    return {
        totalTarefas,
        totalConcluidas,
        totalPendentes
    };
}

console.log(exercicio4(tarefas));
