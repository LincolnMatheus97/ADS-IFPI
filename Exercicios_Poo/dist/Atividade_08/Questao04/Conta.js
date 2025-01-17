"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaImposto = exports.Corrente = exports.Poupanca = exports.Cont = void 0;
class Cont {
    constructor(numeroConta, valorSaldo) {
        this._idConta = 0;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
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
class Poupanca extends Cont {
    constructor() {
        super(...arguments);
        this._taxa = 0.25 / 100;
    }
    renderJuros() {
        let juros = this.saldo + (this.saldo * this._taxa);
        this.depositar(juros);
    }
    get lerTaxa() {
        return this._taxa;
    }
}
exports.Poupanca = Poupanca;
class Corrente extends Cont {
    constructor() {
        super(...arguments);
        this._taxaTed = 0.15 / 100;
    }
    Ted(contaDestino, contaRemetente, valor) {
        let taxaPorDoc = valor * this._taxaTed;
        let valorReal = valor + taxaPorDoc;
        super.transferir(contaDestino, contaRemetente, valorReal);
    }
    get lerTaxa() {
        return this._taxaTed;
    }
}
exports.Corrente = Corrente;
class ContaImposto extends Cont {
    constructor() {
        super(...arguments);
        this._taxaDeImposto = 0.38 / 100;
    }
    sacar(valor) {
        let imposto = valor * this._taxaDeImposto;
        let totalSaque = valor + imposto;
        super.sacar(totalSaque);
    }
}
exports.ContaImposto = ContaImposto;
//# sourceMappingURL=Conta.js.map