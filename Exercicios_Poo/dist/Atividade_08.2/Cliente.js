"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Conta_1 = require("./Conta");
const Validacoes_1 = require("./Validacoes");
class Client {
    constructor(nomeCliente, cpfCliente, dataNasci) {
        this._contas = [];
        this._idCliente = 0;
        this._nome = nomeCliente;
        this.validaCpf(cpfCliente);
        this._cpf = cpfCliente;
        this.validaDataNascimento(dataNasci);
        this._dataNascimento = dataNasci;
    }
    get idCliente() {
        return this._idCliente;
    }
    set idCliente(numeroId) {
        this._idCliente = numeroId;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(numeroCpf) {
        this.validaCpf(numeroCpf);
        this._cpf = numeroCpf;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(data) {
        this.validaDataNascimento(data);
        this._dataNascimento = data;
    }
    get contas() {
        return this._contas;
    }
    set contas(valor) {
        this._contas = valor;
    }
    adicionarConta(conta) {
        if (!this.contas.includes(conta)) {
            this.contas.push(conta);
        }
    }
    removerConta(numeroConta) {
        this.contas = this.contas.filter(conta => conta.numero !== numeroConta);
    }
    listarContas() {
        let copiaContas = [];
        for (let conta of this._contas) {
            let contaCopiada = new Conta_1.Cont(conta.numero, conta.saldo);
            contaCopiada.idConta = conta.idConta;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }
        return copiaContas;
    }
    toString() {
        let contasInfo = this._contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this._nome} (${this._cpf})\nContas:\n${contasInfo}`;
    }
    validaCpf(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            throw new Validacoes_1.CPFInvalidoError();
        }
    }
    validaDataNascimento(data) {
        if (isNaN(data.getTime())) {
            throw new Validacoes_1.DataNascimentoInvalidaError();
        }
    }
}
exports.Client = Client;
//# sourceMappingURL=Cliente.js.map