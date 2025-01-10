"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor(numero1, numero2) {
        this._operando1 = numero1;
        this._operando2 = numero2;
    }
    somar() {
        return this._operando1 + this._operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
}
exports.Calculator = Calculator;
// let calculadora1 = new Calculator(22, 13);
// console.log(calculadora1.somar());
//# sourceMappingURL=classCalculadora.js.map