import { Cont } from "./classeNovaConta";

class Poupanca extends Cont {
    private _taxa : number;

    constructor(numeroConta: string, valorSaldo: number, taxa: number) {
        super(numeroConta, valorSaldo);
        this._taxa = taxa;
    }

    public renderJuros(): void {
        let juros: number = this.saldo + (this.saldo * this._taxa);
        this.depositar(juros);
    }

    get lerTaxa(): number {
        return this._taxa;
    }
}

export { Poupanca };