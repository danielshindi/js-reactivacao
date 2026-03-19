// Sistema de gerenciamento de pedidos
let pedidos = [
  { id: 1, cliente: "Ana", itens: 3, total: 150, pago: true },
  { id: 2, cliente: "Bruno", itens: 1, total: 80, pago: false },
  { id: 3, cliente: "Carla", itens: 5, total: 300, pago: true }
];

function adicionarPedido(cliente, itens, total) {
    if (!cliente || itens === undefined || total === undefined) {
        console.log("Erro: insira todos os dados corretamente.");
        return;
    }

    const novoId = pedidos.length > 0 ? pedidos[pedidos.length - 1].id + 1 : 1;
    pedidos = [ ...pedidos, { id: novoId, cliente, itens, total, pago: false }];
    console.log(`Pedido de ${cliente} adicionado com sucesso.`)
}

function listarPedidos() {
    if (pedidos.length === 0) {
        console.log("Lista de pedidos vazia.");
        return;
    }
    pedidos.forEach(pedido => console.log(pedido));
}

function buscarPedidoPorId(id) {
    return pedidos.find(pedido => pedido.id === id);
}

function marcarComoPago(id) {
    const pedido = buscarPedidoPorId(id);

    if (!pedido) {
        console.log(`Pedido de id ${id} não encontrado.`);
        return;
    }

    pedidos = pedidos.map(pedido =>
        pedido.id === id
            ? { ...pedido, pago: true }
            : pedido
    );

    console.log(`Pedido de id ${id} marcado como pago com sucesso.`);
}

function removerPedido(id) {
    const tamanhoAntigo = pedidos.length;
    pedidos = pedidos.filter(pedido => pedido.id !== id);
    if (pedidos.length === tamanhoAntigo) {
        console.log(`Pedido de id: ${id} não encontrado.`)
        return;
    }
    console.log(`Pedido de id: ${id} removido com sucesso.`)
}

function listarPedidosPagos() {
    const pedidosPagos = pedidos.filter(pedido => pedido.pago);
    if (pedidosPagos.length === 0) {
        console.log("Não há pedidos pagos.");
        return;
    }
    pedidosPagos.filter(pedido => pedido.pago).forEach(pedido => {
        console.log(pedido);
    });
}

function listarPedidosPendentes() {
    const pedidosPendentes = pedidos.filter(pedido => !pedido.pago);
    if (pedidosPendentes.length === 0) {
        console.log("Não há pedidos pendentes.");
        return;
    }
    pedidosPendentes.filter(pedido => !pedido.pago).forEach(pedido => {
        console.log(pedido)
    });
}

function calcularValorTotalPedidos() {
    return pedidos.reduce((acumulador, pedido) => acumulador + pedido.total, 0);
}

const gerarRelatorio = () => {
    return pedidos.reduce((acumulador, pedido) => {
        acumulador.totalPedidos += 1;
        acumulador.valorTotal += pedido.total;
        if (pedido.pago) {
            acumulador.pagos += 1;
        } else {
            acumulador.pendentes += 1;
        }
        return acumulador;
    }, {
        totalPedidos: 0,
        pagos: 0,
        pendentes: 0,
        valorTotal: 0
    });
}

function exibirDetalhesPedido(id) {
    if (id === undefined || id === null) {
        console.log(`Insira um id válido`);
        return;
    }
    const pedido = buscarPedidoPorId(id);
    if (!pedido) {
        console.log(`Pedido de id ${id} não encontrado.`);
        return;
    }
    Object.entries(pedido).forEach(([chave, valor]) => {
        console.log(`${chave}: ${valor}`);
    })
}

function aplicarDescontoEmPendentes(percentual) {
    if (percentual < 0 || percentual > 100) {
        console.log("Percentual inválido.");
        return;
    }

    return pedidos.map(pedido =>
        !pedido.pago
            ? { ...pedido, total: pedido.total * (100 - percentual) / 100 }
            : pedido
    );
}



adicionarPedido('Bianca', 12, 140);
listarPedidos();
console.log(buscarPedidoPorId(2));

removerPedido(1);
listarPedidos();
console.log();

listarPedidosPagos();
console.log();
listarPedidosPendentes();

console.log("Valor total dos pedidos: ", calcularValorTotalPedidos());
console.log();

console.log(gerarRelatorio());
console.log();

exibirDetalhesPedido(2);