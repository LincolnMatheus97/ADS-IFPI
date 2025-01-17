"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Corrente = void 0;
const Conta_1 = require("./Conta");
class Corrente extends Conta_1.Cont {
    constructor(numeroConta, valorSaldo, taxa) {
        super(numeroConta, valorSaldo);
        this._taxa = taxa;
    }
    sacar(valor) {
        let valorImposto = valor * this._taxa;
        super.sacar(valor + valorImposto);
    }
}
exports.Corrente = Corrente;
//# sourceMappingURL=Corrente.js.map