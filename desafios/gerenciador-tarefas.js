let tarefas = [
    { id: 1, titulo: "Estudar JS", concluida: false },
    { id: 2, titulo: "Estudar Git", concluida: true },
    { id: 3, titulo: "Estudar JavaScript", concluida: true },
    { id: 4, titulo: "Revisar Git", concluida: false },
    { id: 5, titulo: "Fazer exercício", concluida: false },
    { id: 6, titulo: "Organizar ambiente", concluida: true }
];

function adicionarTarefa(titulo) {
    const novoId =  tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1;
    const tarefa = {
        id: novoId,
        titulo: titulo,
        concluida: false
    }
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa.titulo}" adicionada com sucesso!`);
}

function listarTarefas() {
    console.log("Lista de tarefas:");
    tarefas.forEach(tarefa => {
        console.log(
            `[${tarefa.concluida ? "x" : " "}] ${tarefa.id} - ${tarefa.titulo}`
        );
    });
}

function concluirTarefa(id) {
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    if (!tarefa) {
        console.log("Tarefa não encontrada.");
        return
    }
    tarefa.concluida = true;

}

function removerTarefa(id) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
}


adicionarTarefa("Tarefa nova");
listarTarefas();

concluirTarefa(7);
listarTarefas();

removerTarefa(7);
listarTarefas();