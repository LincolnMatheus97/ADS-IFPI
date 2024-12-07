export class Client {
    idCliente: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    contas: Cont[] = [];

    constructor(iD: number, nomeCliente: string, cpfCliente: string, dataNasci: Date) {
        this.idCliente = iD;
        this.nome = nomeCliente;
        this.cpf = cpfCliente;
        this.dataNascimento = dataNasci;
    }

    toString(): string {
        let contasInfo = this.contas.map(conta => `  - ${conta.numero} (Saldo: ${conta.saldo})`).join('\n');
        return `Cliente: ${this.nome} (${this.cpf})\nContas:\n${contasInfo}`;
    }
}

export class Cont { 
    idConta: number;
    numero: string;
    saldo: number;
    cliente: Client | null;

    constructor(idConta: number, numeroConta: string, valorSaldo: number, nossoCliente: Client | null) {
        this.idConta = idConta;
        this.numero = numeroConta;
        this.saldo = valorSaldo;
        this.cliente = nossoCliente;

        if(nossoCliente) {
            nossoCliente.contas.push(this);
        }
    }

    sacar(valor: number): void {
        this.saldo = this.saldo - valor;
    }

    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Cont, contaRemetente: Cont, valor: number): void {
        contaRemetente.sacar(valor);
        contaDestino.depositar(valor);
    }

    toString(): string {
        return `Conta: ${this.numero}, Saldo: ${this.saldo}, Cliente: ${this.cliente ? this.cliente.nome : 'Nenhum'}`;
    }
}

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

    consultarPorIndice(numero: string): number {
        let indiceProcurado: number = -1;

        for(let i = 0; i < this.contas.length; i++) {
            if(this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }

        return indiceProcurado;
    }

    excluir(numero: string): void {
        let indiceProcurado: number = this.consultarPorIndice(numero);

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