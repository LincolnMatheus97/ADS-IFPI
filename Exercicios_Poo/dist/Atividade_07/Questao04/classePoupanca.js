"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poupanca = void 0;
const classeNovaConta_1 = require("./classeNovaConta");
class Poupanca extends classeNovaConta_1.Cont {
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
//# sourceMappingURL=classePoupanca.js.map