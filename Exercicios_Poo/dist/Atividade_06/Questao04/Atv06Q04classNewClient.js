"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Atv06Q04classNewCont_1 = require("./Atv06Q04classNewCont");
class Client {
    constructor(nomeCliente, cpfCliente, dataNasci) {
        this._contas = [];
        this._idCliente = 0;
        this._nome = nomeCliente;
        this._cpf = cpfCliente;
        this._dataNascimento = dataNasci;
    }
    set id(iD) {
        this._idCliente = iD;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    set contas(contas) {
        this._contas = contas;
    }
    adicionarConta(contaProcurada) {
        this._contas.push(contaProcurada);
    }
    listarContas() {
        let copiaContas = [];
        for (let conta of this._contas) {
            let contaCopiada = new Atv06Q04classNewCont_1.Cont(conta.numero, conta.saldo);
            contaCopiada.id = conta.id;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }
        return copiaContas;
    }
    toString() {
        let contasInfo = this._contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this._nome} (${this._cpf})\nContas:\n${contasInfo}`;
    }
}
exports.Client = Client;
//# sourceMappingURL=Atv06Q04classNewClient.js.map