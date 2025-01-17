class Calculadora {
    private _operando_1: number;
    private _operando_2: number;

    constructor(numero_1: number, numero_2: number) {
        this._operando_1 = numero_1;
        this._operando_2 = numero_2;
    }

    public somar(): number {
        return this._operando_1 + this._operando_2;
    }

    public subtrair(): number {
        return this._operando_1 - this._operando_2;
    }
}

let calculadora = new Calculadora(22, 13);
calculadora._operando_1;
calculadora._operando_2;
console.log(calculadora.somar());