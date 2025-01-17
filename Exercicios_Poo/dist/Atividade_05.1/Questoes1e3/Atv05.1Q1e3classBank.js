"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = exports.Cont = exports.Client = void 0;
class Client {
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
exports.Client = Client;
class Cont {
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
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, contaRemetente, valor) {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }
    toString() {
        return `Conta: ${this.numero}, Saldo: ${this.saldo}, Cliente: ${this.cliente ? this.cliente.nome : 'Nenhum'}`;
    }
}
exports.Cont = Cont;
class Bank {
    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    inserirConta(conta) {
        for (let ct of this.contas) {
            if (ct.idConta === conta.idConta || ct.numero === conta.numero) {
                console.log("\n\t\rO ID ou numero da Conta ja estao cadastrados no sistema...");
                return;
            }
        }
        this.contas.push(conta);
        console.log("\n\t\rConta Inserida com sucesso...");
    }
    inserirCliente(cliente) {
        for (let cl of this.clientes) {
            if (cl.cpf === cliente.cpf || cl.idCliente === cliente.idCliente) {
                console.log("\n\t\rO CPF ou ID ja estao cadastrados no sistema...");
                return;
            }
        }
        this.clientes.push(cliente);
        console.log("\n\t\rCliente Inserido com sucesso...");
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
            console.log(`\n\t\rConta com número ${numeroConta} não encontrada.`);
            return;
        }
        if (!cliente) {
            console.log(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }
        if (conta.cliente) {
            console.log(`\n\t\rA conta ${numeroConta} já está associada ao cliente ${conta.cliente.nome}.`);
            return;
        }
        for (let conta of cliente.contas) {
            if (conta.numero === numeroConta) {
                console.log("\n\t\rA conta ja esta associada a um cliente...");
                return;
            }
        }
        conta.cliente = cliente;
        cliente.contas.push(conta);
        console.log("\n\t\rA conta foi associada ao cliente...");
    }
    listarContasCliente(cpfCliente) {
        let listaContas = this.consultarCliente(cpfCliente);
        if (!listaContas) {
            throw new Error(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
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
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluir(numero) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }
    alterar(conta) {
        let contaProcurada = this.consultarConta(conta.numero);
        if (contaProcurada) {
            contaProcurada = conta;
        }
    }
    transferir(valor, contaRemetente, ...contasDestino) {
        for (let i = 0; i < contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }
    quantidadeContas() {
        let quantidade = 0;
        for (let i = 0; i < this.contas.length; i++) {
            quantidade++;
        }
        return quantidade;
    }
    totalDinheiro() {
        let total = 0;
        for (let i = 0; i < this.contas.length; i++) {
            total += this.contas[i].saldo;
        }
        return total;
    }
    mediaSaldoContas() {
        let quantidadeContas = this.quantidadeContas();
        let totalDinheiro = this.totalDinheiro();
        let mediaSaldo = totalDinheiro / quantidadeContas;
        return mediaSaldo.toFixed(2);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Atv05.1Q1e3classBank.js.map