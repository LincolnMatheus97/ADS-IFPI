import { Client } from "./novoCliente";
import { Cont } from "./novaConta";

export class Bank {
    contas: Cont[];
    clientes: Client[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }

    inserirConta(conta: Cont): void {
        for (let ct of this.contas) {
            if(ct.idConta === conta.idConta || ct.numero === conta.numero) {
                console.log("\n\t\rO ID ou numero da Conta ja estao cadastrados no sistema...");
                return;
            }
        }
        this.contas.push(conta);
        console.log("\n\t\rConta Inserida com sucesso...");
    }

    inserirCliente(cliente: Client): void {
        for (let cl of this.clientes) {
            if(cl.cpf === cliente.cpf || cl.idCliente === cliente.idCliente) {
                console.log("\n\t\rO CPF ou ID ja estao cadastrados no sistema...");
                return;
            }
        }
        this.clientes.push(cliente);
        console.log("\n\t\rCliente Inserido com sucesso...");
    }

    consultarCliente(cpfCliente: string): Client {
        let clienteProcurado!: Client;

        for(let cliente of this.clientes) {
            if(cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }

        return clienteProcurado;
    }

    consultarConta(numeroConta: string): Cont {
        let contaProcurada!: Cont;

        for(let conta of this.contas) {
            if(conta.numero === numeroConta) {
                contaProcurada = conta;
                break;
            }
        }

        return contaProcurada;
    }

    associarContaCliente(numeroConta: string, cpfCliente: string): void {
        let conta = this.consultarConta(numeroConta);
        let cliente = this.consultarCliente(cpfCliente);

        if (!conta) {
            console.log(`\n\t\rConta com número ${numeroConta} não encontrada.`);
            return;
        }
    
        if (!cliente) {
            console.log(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
            return;
        }
    
        if (conta.cliente) {
            console.log(`\n\t\rA conta ${numeroConta} já está associada ao cliente ${conta.cliente.nome}.`);
            return;
        }

        for (let conta of cliente.contas) {
            if(conta.numero === numeroConta) {
                console.log("\n\t\rA conta ja esta associada a um cliente...");
                return;
            }
        }

        conta.cliente = cliente;
        cliente.contas.push(conta);
        console.log("\n\t\rA conta foi associada ao cliente...");
    }

    listarContasCliente(cpfCliente: string): Cont[] {
        let listaContas = this.consultarCliente(cpfCliente);

        if(!listaContas) {
            throw new Error(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
        }
        
        return listaContas.contas;
    }

    totalizarSaldoCliente(cpfCliente: string): number {
        let valorTotalContas = 0;
        let listaContas = this.listarContasCliente(cpfCliente);

        listaContas.forEach(conta => {
            valorTotalContas += conta.saldo;
        });

        return valorTotalContas;
    }

    consultarPorIndiceConta(numero: string): number {
        let indiceProcurado: number = -1;

        for(let i = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    consultarPorIndiceCliente(cpf: string): number {
        let indiceProcurado: number = -1;

        for (let i = 0; i < this.clientes.length; i++) {
            if(this.clientes[i].cpf === cpf) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluirCliente(cpf: string): void {
        let indiceProcurado: number = this.consultarPorIndiceCliente(cpf);

        if(indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.clientes.length - 1; i++) {
                this.clientes[i] = this.clientes[i + 1];
            }
            this.clientes.pop();
        }
    }

    excluirConta(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndiceConta(numero);

        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }

    depositar(numero: string, valor: number): void {
        let contaProcurada: Cont = this.consultarConta(numero);

        if (contaProcurada) {
            contaProcurada.depositar(valor);
        }
    }

    alterar(conta: Cont): void {
        let contaProcurada: Cont = this.consultarConta(conta.numero);

        if (contaProcurada) {
            contaProcurada = conta;
        }
    }

    transferir(valor: number, contaRemetente: Cont, ...contasDestino: string[]): void {
        for(let i = 0; i < contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }

    quantidadeContas(): number {
        let quantidade: number = 0;

        for(let i = 0; i < this.contas.length; i++) {
            quantidade++;
        }

        return quantidade;
    }

    totalDinheiro(): number {
        let total: number = 0;

        for (let i = 0; i < this.contas.length; i++) {
            total += this.contas[i].saldo;
        }

        return total;
    }

    mediaSaldoContas(): string {
        let quantidadeContas: number = this.quantidadeContas();
        let totalDinheiro: number = this.totalDinheiro();

        let mediaSaldo: number = totalDinheiro / quantidadeContas;

        return mediaSaldo.toFixed(2);
    }
}