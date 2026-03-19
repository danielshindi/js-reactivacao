const tarefas = [
  { id: 1, titulo: "Estudar JS", concluida: true, prioridade: "alta" },
  { id: 2, titulo: "Estudar TS", concluida: false, prioridade: "alta" },
  { id: 3, titulo: "Estudar React", concluida: false, prioridade: "media" },
  { id: 4, titulo: "Revisar Git", concluida: true, prioridade: "baixa" }
];

// 1. pegar só os títulos das pendentes
const titulosPendentes = tarefas
  .filter(tarefa => !tarefa.concluida)
  .map(tarefa => tarefa.titulo);

console.log("Títulos pendentes:", titulosPendentes);

// 2. marcar uma tarefa como concluída sem mutar o array original
const tarefasAtualizadas = tarefas.map(tarefa =>
  tarefa.id === 2
    ? { ...tarefa, concluida: true }
    : tarefa
);

console.log("Tarefas atualizadas:", tarefasAtualizadas);

// 3. gerar resumo com reduce
const resumo = tarefas.reduce((acumulador, tarefa) => {
  acumulador.total += 1;

  if (tarefa.concluida) {
    acumulador.concluidas += 1;
  } else {
    acumulador.pendentes += 1;
  }

  return acumulador;
}, {
  total: 0,
  concluidas: 0,
  pendentes: 0
});

console.log("Resumo:", resumo);

// 4. trabalhar com Object.entries
const configuracoes = {
  tema: "escuro",
  idioma: "pt-BR",
  notificacoes: true
};

Object.entries(configuracoes).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});