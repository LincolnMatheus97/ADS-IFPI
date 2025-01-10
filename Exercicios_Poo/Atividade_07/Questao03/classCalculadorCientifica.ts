import { Calculator } from "../Questao02/classCalculadora";

class CalculadoraCientifica extends Calculator {
    public exponenciar(): number {
        return Math.pow(this.operando1, this.operando2);
    }
}

let calculadoraCientifica = new CalculadoraCientifica(2, 3);
console.log(calculadoraCientifica.exponenciar());