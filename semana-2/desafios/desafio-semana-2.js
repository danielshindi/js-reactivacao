let usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Bruno", email: "bruno@email.com", ativo: false },
  { id: 3, nome: "Carla", email: "carla@email.com", ativo: true }
];

function adicionarUsuario(nome, email) {
    const novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    if (!nome || !email) {
        console.log("Insira nome e e-mail\n");
        return;
    }
    usuarios = [...usuarios, { id: novoId, nome, email, ativo: true }];
    console.log(`Usuário ${nome} adicionado com sucesso.\n`);
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    console.log("Lista de usuários: ");
    usuarios.forEach(usuario => console.log(usuario));
    console.log();
}

function buscarUsuarioPorId(id) {
    return usuarios.find(usuario => usuario.id === id);
}

function ativarUsuario(id) {
    if (id === undefined || id === null) {
        console.log("Id inválido.");
        return;
    }
    const usuario = buscarUsuarioPorId(id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }
    if (usuario.ativo) {
        console.log(`Usuário ${usuario.nome} já está ativo.`);
        return;
    }
    usuario.ativo = true;
    console.log(`Usuário ${usuario.nome} ativado com sucesso.`);
}

function desativarUsuario(id) {
    if (id === undefined || id === null) {
        console.log("Id inválido.");
        return;
    }
    const usuario = buscarUsuarioPorId(id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }
    if (!usuario.ativo) {
        console.log(`Usuário ${usuario.nome} já está desativado.`);
        return;
    }
    usuario.ativo = false;
    console.log(`Usuário ${usuario.nome} desativado com sucesso.`);
}

function listarUsuariosAtivos() {
    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
        return;
    }
    console.log("Lista de usuários ativos: ");
    usuarios.filter(usuario => usuario.ativo === true).forEach(usuario => console.log(usuario));
    console.log();
}

function existeUsuarioInativo() {
    return usuarios.some(usuario => usuario.ativo === false);
}

function todosUsuariosAtivos() {
    return usuarios.every(usuario => usuario.ativo === true);
}

function ordenarUsuariosPorNome() {
    return [...usuarios].sort((a, b) => a.nome.localeCompare(b.nome));
}

function carregarUsuarios(sucesso=true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve([...usuarios]);
            } else {
                reject("Usuários não foram carregados.")
            }
        }, 1000);
    });
}

const executaCarregarUsuarios = async (sucesso=true) => {
    try {
        const resultado = await carregarUsuarios(sucesso);
        console.log(resultado);
    } catch (erro) {
        console.log(erro);
    }
};

function atualizarEmail(id, novoEmail) {
    const usuario = buscarUsuarioPorId(id);
    if (!usuario) {
        console.log("Usuário não encontrado.");
        return;
    }
    if (!novoEmail) {
        console.log("Novo e-mail inválido.");
        return;
    }

    usuario.email = novoEmail;
    console.log(`E-mail de ${usuario.nome} alterado com sucesso.`);

}

function gerarRelatorio() {
    const total = usuarios.length;
    const ativos = usuarios.filter(usuario => usuario.ativo === true).length
    const inativos = usuarios.reduce((acumulador, usuario) => 
        usuario.ativo === false ? acumulador + 1 : acumulador, 0);
    return { total, ativos, inativos }
}



adicionarUsuario("Adalberto", "ad@email.com");
listarUsuarios();

console.log(buscarUsuarioPorId(1));
ativarUsuario(2);
listarUsuarios();

desativarUsuario(4);
listarUsuarios();

listarUsuariosAtivos();

console.log(existeUsuarioInativo());
console.log(todosUsuariosAtivos());

console.log(ordenarUsuariosPorNome());

carregarUsuarios(false)
.then(resultado => console.log(resultado))
.catch(erro => console.log(erro));

executaCarregarUsuarios();

atualizarEmail(4, 'xz@email.com');
listarUsuarios();

console.log(gerarRelatorio());