import { Cont } from "./Conta";

class Corrente extends Cont {
    private _taxa : number;

    constructor(numeroConta: string, valorSaldo: number, taxa: number) {
        super(numeroConta, valorSaldo);
        this._taxa = taxa;
    }

    public sacar(valor: number): void {
        let valorImposto: number = valor * this._taxa;
        super.sacar(valor + valorImposto);
    }
}

export { Corrente };