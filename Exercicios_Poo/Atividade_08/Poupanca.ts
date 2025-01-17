import { Cont } from "./Conta";

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



class Imposto extends Cont {
    private _taxa : number = 0.38/100;

    public sacar(valor: number): void {
        let valorImposto: number = valor * this._taxa;
        super.sacar(valor + valorImposto);
    }
    
}

export { Poupanca, Imposto };