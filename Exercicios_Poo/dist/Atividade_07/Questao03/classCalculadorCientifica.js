"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classCalculadora_1 = require("../Questao02/classCalculadora");
class CalculadoraCientifica extends classCalculadora_1.Calculator {
    exponenciar() {
        return Math.pow(this.operando1, this.operando2);
    }
}
let calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.exponenciar());
//# sourceMappingURL=classCalculadorCientifica.js.map