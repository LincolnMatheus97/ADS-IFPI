"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor() {
        this._contas = [];
        this._clientes = [];
    }
    get contas() {
        return this._contas;
    }
    set contas(value) {
        this._contas = value;
    }
    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }
    inserirConta(conta) {
        for (let ct of this._contas) {
            if (ct.idConta === conta.idConta || ct.numero === conta.numero) {
                console.log("\n\t\rO ID ou numero da Conta ja estao cadastrados no sistema...");
                return;
            }
        }
        this._contas.push(conta);
        console.log("\n\t\rConta Inserida com sucesso...");
    }
    inserirCliente(cliente) {
        for (let cl of this._clientes) {
            if (cl.cpf === cliente.cpf || cl.idCliente === cliente.idCliente) {
                console.log("\n\t\rO CPF ou ID ja estao cadastrados no sistema...");
                return;
            }
        }
        this._clientes.push(cliente);
        console.log("\n\t\rCliente Inserido com sucesso...");
    }
    consultarCliente(cpfCliente) {
        let clienteProcurado;
        for (let cliente of this._clientes) {
            if (cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }
        return clienteProcurado;
    }
    consultarConta(numeroConta) {
        let contaProcurada;
        for (let conta of this._contas) {
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
    consultarPorIndiceConta(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    consultarPorIndiceCliente(cpf) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._clientes.length; i++) {
            if (this._clientes[i].cpf === cpf) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluirCliente(cpf) {
        let indiceProcurado = this.consultarPorIndiceCliente(cpf);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();
        }
    }
    excluirConta(numero) {
        let indiceProcurado = this.consultarPorIndiceConta(numero);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
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
        for (let i = 0; i < this._contas.length; i++) {
            quantidade++;
        }
        return quantidade;
    }
    totalDinheiro() {
        let total = 0;
        for (let i = 0; i < this._contas.length; i++) {
            total += this._contas[i].saldo;
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
//# sourceMappingURL=Banco.js.map