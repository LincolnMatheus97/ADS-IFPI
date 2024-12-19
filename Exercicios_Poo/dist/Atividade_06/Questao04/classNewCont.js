"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cont = void 0;
class Cont {
    constructor(numeroConta, valorSaldo) {
        this._idConta = 0;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
    }
    sacar(valor) {
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    consultarSaldo() {
        return this._saldo;
    }
    transferir(contaDestino, contaRemetente, valor) {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }
    get id() {
        return this._idConta;
    }
    set id(id) {
        this._idConta = id;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
    toString() {
        return `Conta: ${this._numero}, Saldo: ${this._saldo}, Cliente: ${this._cliente ? this._cliente.nome : 'Nenhum'}`;
    }
}
exports.Cont = Cont;
//# sourceMappingURL=classNewCont.js.map