const clientes = [
    { id: 1001, nome: `LUCIVAN`, data: `21/06/2002` },
    { id: 1002, nome: `MARINA`, data: `25/08/1999` },
    { id: 1003, nome: `RODOLFO`, data: `09/03/1989` },
    { id: 1004, nome: `AUGUSTO`, data: `05/11/1990` }
];

const vendas = [
    {id: 10001, nome: `CARBURADOR`, clienteId: 1001},
];

export function adicionarCliente(id, nome, data) {
    if (clientes.some(clientes => clientes.id === id)) {
        return false;
    } else {
        clientes.push({ id, nome, data });
        return true;
    }

}

export function excluirCliente(id) {
    const index = clientes.findIndex(clientes => clientes.id === id);

    if (index !== -1) {
        clientes.splice(index, 1);
        return true;
    } else {
        return false;
    }

}

export function consultarCliente(id) {
    const cliente = clientes.find(clientes => clientes.id === id);

    if (cliente) {
        return cliente;
    } else {
        return null;
    }

}

export function adicionarVenda(id, nome, clienteId) {
    if (vendas.some(vendas => vendas.id === id)) {
        return false;
    } else if (!clientes.some(clientes => clientes.id === clienteId)) {
        return false;
    } else {
        vendas.push({ id, nome, clienteId });
        return true;
    }

}

export function excluirVenda(id) {
    const index = vendas.findIndex(vendas => vendas.id === id);

    if(index !== -1) {
        vendas.splice(index, 1);
        return true;
    }else {
        return false;
    }

}

export function consultarVenda(id) {
    const venda = vendas.find(vendas => vendas.id === id);

    if (venda) {
        return venda;
    } else {
        return null;
    }

}

export function relatorioClientes() {
    let print = ``;
    print += `\n\t------------ RELATÓRIO DE CLIENTES ------------`;
    clientes.forEach(clientes =>{
        print += `\n\tID do Cliente: ${clientes.id}, Nome do Cliente: ${clientes.nome}, Data de Nascimento: ${clientes.data}`;
    });
    print += `\n\t-----------------------------------------------`;
    return print;
}

export function relatorioVendas() {
    let print = ``;
    print += `\n\t------------ RELATÓRIO DE VENDAS ------------`;
    vendas.forEach(vendas =>{
        print += `\n\tID da Venda: ${vendas.id}, Nome do Produto: ${vendas.nome}, ID do Cliente: ${vendas.clienteId}`;
    });
    print += `\n\t-----------------------------------------------`;
    return print;
}