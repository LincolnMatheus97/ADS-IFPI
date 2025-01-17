import { Client } from "./Cliente";

export class Cont { 
    private _idConta: number;
    private _numero: string;
    private _saldo: number;
    private _cliente: Client | null;

    constructor(idConta: number, numeroConta: string, valorSaldo: number, nossoCliente: Client | null) {
        this._idConta = idConta;
        this._numero = numeroConta;
        this._saldo = valorSaldo;
        this._cliente = nossoCliente;

        if(nossoCliente) {
            nossoCliente.contas.push(this);
        }
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

    get cliente(): Client | null {
        return this._cliente;
    }

    set cliente(cliente: Client | null) {
        this._cliente = cliente;
    }

    sacar(valor: number): void {
        this._saldo = this._saldo - valor;
    }

    depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    consultarSaldo(): number {
        return this._saldo;
    }

    transferir(contaDestino: Cont, contaRemetente: Cont, valor: number): void {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }

    toString(): string {
        return `Conta: ${this._numero}, Saldo: ${this._saldo}, Cliente: ${this._cliente ? this._cliente.nome : 'Nenhum'}`;
    }
}