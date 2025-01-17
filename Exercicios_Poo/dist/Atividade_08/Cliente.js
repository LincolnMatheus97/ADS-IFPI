"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(iD, nomeCliente, cpfCliente, dataNasci) {
        this._contas = [];
        this._idCliente = iD;
        this._nome = nomeCliente;
        this._cpf = cpfCliente;
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
        this._cpf = numeroCpf;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(data) {
        this._dataNascimento = data;
    }
    get contas() {
        return this._contas;
    }
    set contas(valor) {
        this._contas = valor;
    }
    toString() {
        let contasInfo = this._contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this._nome} (${this._cpf})\nContas:\n${contasInfo}`;
    }
}
exports.Client = Client;
//# sourceMappingURL=Cliente.js.map