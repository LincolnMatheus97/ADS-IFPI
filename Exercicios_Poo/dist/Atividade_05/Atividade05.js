"use strict";
class Cliente {
    constructor(iD, nomeCliente, cpfCliente, dataNasci) {
        this.contas = [];
        this.idCliente = iD;
        this.nome = nomeCliente;
        this.cpf = cpfCliente;
        this.dataNascimento = dataNasci;
    }
    toString() {
        let contasInfo = this.contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this.nome} (${this.cpf})\nContas:\n${contasInfo}`;
    }
}
class Conta {
    constructor(idConta, numeroConta, valorSaldo, nossoCliente) {
        this.idConta = idConta;
        this.numero = numeroConta;
        this.saldo = valorSaldo;
        this.cliente = nossoCliente;
        if (nossoCliente) {
            nossoCliente.contas.push(this);
        }
    }
    sacar(valor) {
        this.saldo = this.saldo - valor;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    toString() {
        return `Conta: ${this.numero}, Saldo: ${this.saldo}, Cliente: ${this.cliente ? this.cliente.nome : 'Nenhum'}`;
    }
}
class Banco {
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    inserirConta(conta) {
        for (let ct of this.contas) {
            if (ct.idConta === conta.idConta || ct.numero === conta.numero) {
                console.log("O ID ou numero da Conta ja estao cadastrados no sistema...");
                return;
            }
        }
        this.contas.push(conta);
        console.log("Conta Inserida com sucesso...");
    }
    inserirCliente(cliente) {
        for (let cl of this.clientes) {
            if (cl.cpf === cliente.cpf || cl.idCliente === cliente.idCliente) {
                console.log("O CPF ou ID ja estao cadastrados no sistema...");
                return;
            }
        }
        this.clientes.push(cliente);
        console.log("Cliente Inserid com sucesso...");
    }
    consultarCliente(cpfCliente) {
        let clienteProcurado;
        for (let cliente of this.clientes) {
            if (cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    consultarConta(numeroConta) {
        let contaProcurada;
        for (let conta of this.contas) {
            if (conta.numero === numeroConta) {
                contaProcurada = conta;
                break;
            }
        }
        return contaProcurada;
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let conta = this.consultarConta(numeroConta);
        let cliente = this.consultarCliente(cpfCliente);
        if (!conta) {
            console.log(`Conta com número ${numeroConta} não encontrada.`);
            return;
        }
        if (!cliente) {
            console.log(`Cliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }
        if (conta.cliente) {
            console.log(`A conta ${numeroConta} já está associada ao cliente ${conta.cliente.nome}.`);
            return;
        }
        for (let conta of cliente.contas) {
            if (conta.numero === numeroConta) {
                console.log("A conta ja esta associada a um cliente...");
                return;
            }
        }
        conta.cliente = cliente;
        cliente.contas.push(conta);
        console.log("A conta foi associada ao cliente...");
    }
    listarContasCliente(cpfCliente) {
        let listaContas = this.consultarCliente(cpfCliente);
        if (!listaContas) {
            throw new Error(`Cliente com CPF ${cpfCliente} não encontrado.`);
        }
        return listaContas.contas;
    }
    totalizarSaldoCliente(cpfCliente) {
        let valorTotalContas = 0;
        let listaContas = this.listarContasCliente(cpfCliente);
        listaContas.forEach(conta => {
            valorTotalContas += conta.saldo;
        });
        return valorTotalContas;
    }
}
let bancoDoBrasil = new Banco();
let clienteBrenda = new Cliente(1, 'Brenda', '125.545.723-15', new Date(1998, 3, 17));
let clienteArthur = new Cliente(2, 'Arthur', '147.236.235-45', new Date(2011, 1, 15));
bancoDoBrasil.inserirCliente(clienteArthur);
bancoDoBrasil.inserirCliente(clienteBrenda);
bancoDoBrasil.inserirCliente(clienteBrenda);
let conta01 = new Conta(1001, '111-1', 200, clienteBrenda);
let conta02 = new Conta(1002, '111-2', 20.55, clienteBrenda);
let conta03 = new Conta(1003, '111-3', 130, null);
bancoDoBrasil.inserirConta(conta01);
bancoDoBrasil.inserirConta(conta02);
bancoDoBrasil.inserirConta(conta03);
bancoDoBrasil.associarContaCliente('111-1', '125.545.723-15');
bancoDoBrasil.associarContaCliente('111-2', '125.545.723-15');
bancoDoBrasil.associarContaCliente('111-3', '147.236.235-45');
let clienteProcurado1 = bancoDoBrasil.consultarCliente('147.236.235-45');
let clienteProcurado2 = bancoDoBrasil.consultarCliente('125.545.723-15');
console.log(clienteProcurado1.toString());
console.log(clienteProcurado2.toString());
let contaProcurada1 = bancoDoBrasil.consultarConta('111-1');
let contaProcurada2 = bancoDoBrasil.consultarConta('111-2');
let contaProcurada3 = bancoDoBrasil.consultarConta('111-3');
console.log(contaProcurada1.toString());
console.log(contaProcurada2.toString());
console.log(contaProcurada3.toString());
console.log(bancoDoBrasil.listarContasCliente('125.545.723-15'));
console.log(bancoDoBrasil.listarContasCliente('147.236.235-45'));
console.log(bancoDoBrasil.totalizarSaldoCliente('125.545.723-15'));
console.log(bancoDoBrasil.totalizarSaldoCliente('147.236.235-45'));
//# sourceMappingURL=Atividade05.js.map