import { Cont } from './Conta';

export class Client {
    private _idCliente: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Cont[] = [];

    constructor(nomeCliente: string, cpfCliente: string, dataNasci: Date) {
        this._idCliente = 0;
        this._nome = nomeCliente;
        this._cpf = cpfCliente;
        this._dataNascimento = dataNasci;
    }

    get idCliente(): number {
        return this._idCliente;
    }

    set idCliente(numeroId: number) {
        this._idCliente = numeroId;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    set cpf(numeroCpf: string) {
        this._cpf = numeroCpf;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(data: Date) {
        this._dataNascimento = data;
    }

    get contas(): Cont[] {
        return this._contas;
    }

    set contas(valor: Cont[]) {
        this._contas = valor;
    }

    public adicionarConta(contaProcurada: Cont): void {
        this._contas.push(contaProcurada);
    }

    public listarContas(): Cont[] {
        let copiaContas: Cont[] = [];
        for (let conta of this._contas) {
            let contaCopiada = new Cont(conta.numero, conta.saldo);
            contaCopiada.idConta = conta.idConta;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }

        return copiaContas;
    }

    public toString(): string {
        let contasInfo = this._contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this._nome} (${this._cpf})\nContas:\n${contasInfo}`;
    }
}