"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imposto = exports.Poupanca = void 0;
const Conta_1 = require("./Conta");
class Poupanca extends Conta_1.Cont {
    constructor(numeroConta, valorSaldo, taxa) {
        super(numeroConta, valorSaldo);
        this._taxa = taxa;
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
class Imposto extends Conta_1.Cont {
    constructor() {
        super(...arguments);
        this._taxa = 0.38 / 100;
    }
    sacar(valor) {
        let valorImposto = valor * this._taxa;
        super.sacar(valor + valorImposto);
    }
}
exports.Imposto = Imposto;
//# sourceMappingURL=Poupanca.js.map