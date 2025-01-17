"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cont = void 0;
class Cont {
    constructor(idConta, numeroConta, valorSaldo, nossoCliente) {
        this._idConta = idConta;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
        this._cliente = nossoCliente;
        if (nossoCliente) {
            nossoCliente.contas.push(this);
        }
    }
    get idConta() {
        return this._idConta;
    }
    set idConta(numeroId) {
        this._idConta = numeroId;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(saldo) {
        this._saldo = saldo;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
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
    toString() {
        return `Conta: ${this._numero}, Saldo: ${this._saldo}, Cliente: ${this._cliente ? this._cliente.nome : 'Nenhum'}`;
    }
}
exports.Cont = Cont;
//# sourceMappingURL=Conta.js.map