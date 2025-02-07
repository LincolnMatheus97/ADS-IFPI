import { Cont } from './Conta';
import { CPFInvalidoError, DataNascimentoInvalidaError } from './Validacoes';

export class Client {
    private _idCliente: number;
    private _nome: string;
    private _cpf: string;
    private _dataNascimento: Date;
    private _contas: Cont[] = [];

    constructor(nomeCliente: string, cpfCliente: string, dataNasci: Date) {
        this._idCliente = 0;
        this._nome = nomeCliente;
        this.validaCpf(cpfCliente);
        this._cpf = cpfCliente;
        this.validaDataNascimento(dataNasci);
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
        this.validaCpf(numeroCpf);
        this._cpf = numeroCpf;
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(data: Date) {
        this.validaDataNascimento(data);
        this._dataNascimento = data;
    }

    get contas(): Cont[] {
        return this._contas;
    }

    set contas(valor: Cont[]) {
        this._contas = valor;
    }

    public adicionarConta(conta: Cont): void {
        if (!this.contas.includes(conta)) {
            this.contas.push(conta);
        }
    }

    public removerConta(numeroConta: string): void {
        this.contas = this.contas.filter(conta => conta.numero !== numeroConta);
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

    private validaCpf(cpf: string): void {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        if (!cpfRegex.test(cpf)) {
            throw new CPFInvalidoError();
        }
    }

    private validaDataNascimento(data: Date): void {
        if (isNaN(data.getTime())) {
            throw new DataNascimentoInvalidaError();
        }
    }
}