import { Client } from "./classeNovoCliente";

export class Cont { 
    private _idConta: number;
    private _numero: string;
    private _saldo: number;
    private _cliente!: Client;

    constructor(numeroConta: string, valorSaldo: number) {
        this._idConta = 0;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
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

    public get id(): number {
        return this._idConta;
    }

    public set id(id: number) {
        this._idConta = id;
    }

    public get numero(): string {
        return this._numero;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get cliente(): Client {
        return this._cliente;
    }

    public set cliente(cliente: Client) {
        this._cliente = cliente;
    }

    toString(): string {
        return `Conta: ${this._numero}, Saldo: ${this._saldo}, Cliente: ${this._cliente ? this._cliente.nome : 'Nenhum'}`;
    }
}