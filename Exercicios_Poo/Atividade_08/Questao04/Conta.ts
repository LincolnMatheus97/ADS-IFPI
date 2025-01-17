import { Client } from "./Cliente";

class Cont { 
    private _idConta: number;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Client;

    constructor(numeroConta: string, valorSaldo: number) {
        this._idConta = 0;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
    }

    get idConta(): number {
        return this._idConta;
    }

    set idConta(numeroId: number) {
        this._idConta = numeroId;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(numero: string) {
        this._numero = numero;
    }

    get saldo(): number {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }

    get cliente(): Client {
        return this._cliente;
    }

    set cliente(cliente: Client) {
        this._cliente = cliente;
    }

    public sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public consultarSaldo(): number {
        return this._saldo;
    }

    public transferir(contaDestino: Cont, contaRemetente: Cont, valor: number): void {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }

    public toString(): string {
        return `Conta: ${this._numero}, Saldo: ${this._saldo}, Cliente: ${this._cliente ? this._cliente.nome : 'Nenhum'}`;
    }
}

class Poupanca extends Cont {
    private _taxa : number = 0.25 / 100;

    public renderJuros(): void {
        let juros: number = this.saldo + (this.saldo * this._taxa);
        this.depositar(juros);
    }

    get lerTaxa(): number {
        return this._taxa;
    }
}

class Corrente extends Cont {
    private _taxaTed: number = 0.15 / 100;

    public Ted(contaDestino: Cont, contaRemetente: Cont, valor: number): void {
        let taxaPorDoc: number = valor * this._taxaTed;
        let valorReal: number = valor + taxaPorDoc;
        super.transferir(contaDestino, contaRemetente, valorReal);
    }

    get lerTaxa(): number {
        return this._taxaTed;
    }
}

class ContaImposto extends Cont {
    private _taxaDeImposto: number = 0.38/100;

    public sacar(valor: number): void {
        let imposto: number = valor * this._taxaDeImposto;
        let totalSaque: number = valor + imposto;
        super.sacar(totalSaque);
    }
}

export {Cont, Poupanca, Corrente, ContaImposto };