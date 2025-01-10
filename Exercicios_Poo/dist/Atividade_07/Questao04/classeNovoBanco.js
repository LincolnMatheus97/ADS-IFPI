"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const classePoupanca_1 = require("./classePoupanca");
class Bank {
    constructor() {
        this._contas = [];
        this._clientes = [];
    }
    inserirConta(conta) {
        conta.id = this._contas.length + 1;
        this._contas.push(conta);
    }
    inserirCliente(cliente) {
        cliente.id = this._clientes.length + 1;
        this._clientes.push(cliente);
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
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        contaProcurada.cliente = clienteProcurado;
        clienteProcurado.adicionarConta(contaProcurada);
    }
    listarContasCliente(cpfCliente) {
        let clienteProcurado = this.consultarCliente(cpfCliente);
        let lista_Contas = [];
        if (clienteProcurado) {
            lista_Contas = clienteProcurado.listarContas();
        }
        return lista_Contas;
    }
    totalizarSaldoCliente(cpfCliente) {
        let valorTotal_Contas = 0;
        let lista_Contas = this.listarContasCliente(cpfCliente);
        lista_Contas.forEach(conta => {
            valorTotal_Contas += conta.saldo;
        });
        return valorTotal_Contas;
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
    consultarPorIndiceCliente(_cpf) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._clientes.length; i++) {
            if (this._clientes[i].cpf === _cpf) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    excluirCliente(_cpf) {
        let indiceProcurado = this.consultarPorIndiceCliente(_cpf);
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
    transferir(valor, contaRemetente, ..._contasDestino) {
        for (let i = 0; i < _contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(_contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }
    quantidade_Contas() {
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
    mediaSaldo_Contas() {
        let quantidade_Contas = this.quantidade_Contas();
        let totalDinheiro = this.totalDinheiro();
        let mediaSaldo = totalDinheiro / quantidade_Contas;
        return mediaSaldo.toFixed(2);
    }
    renderJuros(numero) {
        let contaProcurada = this.consultarConta(numero);
        if (contaProcurada) {
            if (contaProcurada instanceof classePoupanca_1.Poupanca) {
                //Uso diretamente o metodo renderJuros sem precisar do cast pois seria redundante, pois instante of ja verifica se é do tipo poupança.
                contaProcurada.renderJuros();
            }
        }
    }
}
exports.Bank = Bank;
//# sourceMappingURL=classeNovoBanco.js.map