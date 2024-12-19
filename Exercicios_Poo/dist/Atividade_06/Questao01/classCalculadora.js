"use strict";
class Calculadora {
    constructor(numero_1, numero_2) {
        this._operando_1 = numero_1;
        this._operando_2 = numero_2;
    }
    somar() {
        return this._operando_1 + this._operando_2;
    }
    subtrair() {
        return this._operando_1 - this._operando_2;
    }
}
let calculadora = new Calculadora(22, 13);
calculadora._operando_1;
calculadora._operando_2;
console.log(calculadora.somar());
//# sourceMappingURL=classCalculadora.js.map