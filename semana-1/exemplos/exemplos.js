const usuarios = [
  { id: 1, nome: "Ana", idade: 22, ativo: true },
  { id: 2, nome: "Bruno", idade: 17, ativo: false },
  { id: 3, nome: "Carla", idade: 29, ativo: true },
  { id: 4, nome: "Diego", idade: 15, ativo: true }
];

// map
const nomes = usuarios.map(usuario => usuario.nome);
console.log("Nomes:", nomes);

// filter
const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);
console.log("Ativos:", usuariosAtivos);

// filter + map
const nomesMaioresDeIdade = usuarios
  .filter(usuario => usuario.idade >= 18)
  .map(usuario => usuario.nome);

console.log("Maiores de idade:", nomesMaioresDeIdade);

// reduce
const totalIdades = usuarios.reduce((acumulador, usuario) => {
  return acumulador + usuario.idade;
}, 0);

console.log("Total das idades:", totalIdades);

// desestruturação
usuarios.forEach(({ nome, idade }) => {
  console.log(`${nome} tem ${idade} anos.`);
});

// spread
const novoUsuario = { id: 5, nome: "Elisa", idade: 30, ativo: false };
const listaAtualizada = [...usuarios, novoUsuario];
console.log("Lista atualizada:", listaAtualizada);

// rest
const exibirPrimeiroEUltimos = (primeiro, ...restante) => {
  console.log("Primeiro:", primeiro);
  console.log("Restante:", restante);
};

exibirPrimeiroEUltimos(10, 20, 30, 40);