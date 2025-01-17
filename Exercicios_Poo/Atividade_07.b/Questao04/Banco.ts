import { Client } from "./Cliente";
import { Cont, ContaImposto, Corrente, Poupanca } from "./Conta";
import { read_file, write_file } from "./Utils";

export class Bank {
    private _contas: Cont[];
    private _clientes: Client[];

    constructor() {
        this._contas = [];
        this._clientes = [];
    }

    get contas(): Cont[] {
        return this._contas;
    }

    set contas(value: Cont[]) {
        this._contas = value;
    }

    get clientes(): Client[] {
        return this._clientes;
    }

    set clientes(value: Client[]) {
        this._clientes = value;
    }

    public inserirConta(conta: Cont): void {
        for (let ct of this._contas) {
            if(ct.numero === conta.numero) {
                console.log("\n\t\rO numero da Conta ja esta cadastrado no sistema...");
                return;
            }
        }
        this._contas.push(conta);
    }

    public inserirCliente(cliente: Client): void {
        for (let cl of this._clientes) {
            if(cl.cpf === cliente.cpf) {
                console.log("\n\t\rO CPF ja esta cadastrado no sistema...");
                return;
            }
        }
        this._clientes.push(cliente);
    }

    public consultarCliente(cpfCliente: string): Client {
        let clienteProcurado!: Client;

        for(let cliente of this._clientes) {
            if(cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }

        return clienteProcurado;
    }

    public consultarConta(numeroConta: string): Cont {
        let contaProcurada!: Cont;

        for(let conta of this._contas) {
            if(conta.numero === numeroConta) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let contaProcurada: Cont = this.consultarConta(numeroConta);
        let clienteProcurado: Client = this.consultarCliente(cpfCliente);

        contaProcurada.cliente = clienteProcurado;
        clienteProcurado.adicionarConta(contaProcurada);
    }

    public listarContasCliente(cpfCliente: string): Cont[] {
        let clienteProcurado: Client = this.consultarCliente(cpfCliente);
        let listaContasCliente: Cont[] = [];

        if(!clienteProcurado) {
            throw new Error(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
        }

        listaContasCliente = clienteProcurado.listarContas();
        
        return listaContasCliente;
    }

    public totalizarSaldoCliente(cpfCliente: string): number {
        let valorTotalContas: number = 0;
        let listaContas: Cont[] = this.listarContasCliente(cpfCliente);

        listaContas.forEach(conta => {
            valorTotalContas += conta.saldo;
        });

        return valorTotalContas;
    }

    private consultarPorIndiceConta(numero: string): number {
        let indiceProcurado: number = -1;

        for(let i = 0; i < this._contas.length; i++) {
            if(this._contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    private consultarPorIndiceCliente(cpf: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this._clientes.length; i++) {
            if(this._clientes[i].cpf === cpf) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    public excluirCliente(cpf: string): void {
        let indiceProcurado: number = this.consultarPorIndiceCliente(cpf);

        if(indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();
        }
    }

    public excluirConta(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndiceConta(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }

    public depositar(numero: string, valor: number): void {
        let contaProcurada: Cont = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    public alterar(conta: Cont): void {
        let contaProcurada: Cont = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    public transferir(valor: number, contaRemetente: Cont, ...contasDestino: string[]): void {
        for(let i = 0; i < contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }

    public quantidadeContas(): number {
        let quantidade: number = 0;

        for(let i = 0; i < this._contas.length; i++) {
            quantidade++;
        }

        return quantidade;
    }

    public totalDinheiro(): number {
        let total: number = 0;

        for (let i = 0; i < this._contas.length; i++) {
            total += this._contas[i].saldo;
        }

        return total;
    }

    public mediaSaldoContas(): string {
        let quantidadeContas: number = this.quantidadeContas();
        let totalDinheiro: number = this.totalDinheiro();

        let mediaSaldo: number = totalDinheiro / quantidadeContas;

        return mediaSaldo.toFixed(2);
    }

    public renderJuros(numeroConta: string): void {
        let contaProcurada: Cont = this.consultarConta(numeroConta);

        if (contaProcurada) {
            if (contaProcurada instanceof Poupanca) {
                //Uso diretamente o metodo renderJuros sem precisar do cast pois seria redundante, pois instante of ja verifica se é do tipo poupança.
                contaProcurada.renderJuros();
            }
        }
    }

    public lerArquivo(nomeArquivo: string): void {
        let dados = read_file(nomeArquivo);
        let linhas = dados.split('\n');

        for (let linha of linhas) {
            let dados = linha.split(';');
            let cliente = new Client(dados[3], dados[4], new Date(dados[5]));
            this.inserirCliente(cliente);

            if (dados[0] === 'CC') {
                let conta = new Corrente(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            } else if (dados[0] === 'CP') {
                let conta = new Poupanca(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            } else if (dados[0] === 'CI') {
                let conta = new ContaImposto(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            }
        }
    }

    public salvarArquivo(nomeArquivo: string): void {
        let dados: string = '';

        for (let conta of this._contas) {
            dados += `Contas cadastradas\n`;
            dados += `Tipo -- Numero -- Saldo -- CPF -- Nome -- Data de Nascimento\n`;
            if (conta instanceof Corrente) {
                dados += `CC (Conta Corrente) -- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            } else if (conta instanceof Poupanca) {
                dados += `CP (Conta Poupanca)-- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            } else if (conta instanceof ContaImposto) {
                dados += `CI (Conta Imposto)-- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            }    
        }

        write_file(nomeArquivo, dados);
    }
}