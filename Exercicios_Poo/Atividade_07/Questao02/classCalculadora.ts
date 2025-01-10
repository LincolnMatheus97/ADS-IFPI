class Calculator {
    private _operando1: number;
    private _operando2: number;

    constructor(numero1: number, numero2: number) {
        this._operando1 = numero1;
        this._operando2 = numero2;
    }

    public somar(): number {
        return this._operando1 + this._operando2;
    }

    get operando1(): number {
        return this._operando1;
    }

    get operando2(): number {
        return this._operando2;
    }
}

export { Calculator };

// let calculadora1 = new Calculator(22, 13);
// console.log(calculadora1.somar());