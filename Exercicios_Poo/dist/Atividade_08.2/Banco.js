"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const Cliente_1 = require("./Cliente");
const Conta_1 = require("./Conta");
const Utils_1 = require("./Utils");
const Validacoes_1 = require("./Validacoes");
class Bank {
    constructor() {
        this._contas = [];
        this._clientes = [];
    }
    get contas() {
        return this._contas;
    }
    set contas(value) {
        this._contas = value;
    }
    get clientes() {
        return this._clientes;
    }
    set clientes(value) {
        this._clientes = value;
    }
    inserirConta(conta) {
        for (let ct of this._contas) {
            if (ct.numero === conta.numero) {
                console.log("\n\t\rO numero da Conta ja esta cadastrado no sistema...");
                return;
            }
        }
        this._contas.push(conta);
    }
    inserirCliente(cliente) {
        for (let cl of this._clientes) {
            if (cl.cpf === cliente.cpf) {
                console.log("\n\t\rO CPF ja esta cadastrado no sistema...");
                return;
            }
        }
        this._clientes.push(cliente);
    }
    consultarCliente(cpfCliente) {
        let clienteProcurado;
        for (let cliente of this._clientes) {
            if (cliente.cpf == cpfCliente) {
                clienteProcurado = cliente;
                break;
            }
        }
        if (!clienteProcurado) {
            throw new Validacoes_1.ClienteNaoEncontrado();
        }
        return clienteProcurado;
    }
    consultarConta(numeroConta) {
        let contaProcurada;
        for (let conta of this._contas) {
            if (conta.numero === numeroConta) {
                contaProcurada = conta;
                break;
            }
        }
        if (!contaProcurada) {
            throw new Validacoes_1.ContaInexistente();
        }
        return contaProcurada;
    }
    associarContaCliente(numeroConta, cpfCliente) {
        let contaProcurada = this.consultarConta(numeroConta);
        let clienteProcurado = this.consultarCliente(cpfCliente);
        contaProcurada.cliente = clienteProcurado;
        clienteProcurado.adicionarConta(contaProcurada);
    }
    listarContasCliente(cpfCliente) {
        let clienteProcurado = this.consultarCliente(cpfCliente);
        let listaContasCliente = [];
        if (!clienteProcurado) {
            throw new Error(`\n\t\rCliente com CPF ${cpfCliente} não encontrado.`);
        }
        listaContasCliente = clienteProcurado.listarContas();
        return listaContasCliente;
    }
    totalizarSaldoCliente(cpfCliente) {
        let valorTotalContas = 0;
        let listaContas = this.listarContasCliente(cpfCliente);
        listaContas.forEach(conta => {
            valorTotalContas += conta.saldo;
        });
        return valorTotalContas;
    }
    consultarPorIndiceConta(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._contas.length; i++) {
            if (this._contas[i].numero === numero) {
                indiceProcurado = i;
                break;
            }
        }
        if (indiceProcurado === -1) {
            throw new Validacoes_1.ContaInexistente();
        }
        return indiceProcurado;
    }
    consultarPorIndiceCliente(cpf) {
        let indiceProcurado = -1;
        for (let i = 0; i < this._clientes.length; i++) {
            if (this._clientes[i].cpf === cpf) {
                indiceProcurado = i;
                break;
            }
        }
        if (indiceProcurado === -1) {
            throw new Validacoes_1.ClienteNaoEncontrado();
        }
        return indiceProcurado;
    }
    excluirCliente(cpf) {
        let indiceProcurado = this.consultarPorIndiceCliente(cpf);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._clientes.length - 1; i++) {
                this._clientes[i] = this._clientes[i + 1];
            }
            this._clientes.pop();
        }
    }
    excluirConta(numero) {
        let indiceProcurado = this.consultarPorIndiceConta(numero);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this._contas.length - 1; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
    }
    depositar(numero, valor) {
        let contaProcurada = this.consultarConta(numero);
        contaProcurada.depositar(valor);
    }
    alterar(conta) {
        let contaProcurada = this.consultarConta(conta.numero);
        contaProcurada = conta;
    }
    transferir(valor, contaRemetente, ...contasDestino) {
        for (let i = 0; i < contasDestino.length; i++) {
            let contaProcurada = this.consultarConta(contasDestino[i]);
            contaProcurada.transferir(contaProcurada, contaRemetente, valor);
        }
    }
    quantidadeContas() {
        let quantidade = 0;
        for (let i = 0; i < this._contas.length; i++) {
            quantidade++;
        }
        return quantidade;
    }
    totalDinheiro() {
        let total = 0;
        for (let i = 0; i < this._contas.length; i++) {
            total += this._contas[i].saldo;
        }
        return total;
    }
    mediaSaldoContas() {
        let quantidadeContas = this.quantidadeContas();
        let totalDinheiro = this.totalDinheiro();
        let mediaSaldo = totalDinheiro / quantidadeContas;
        return mediaSaldo.toFixed(2);
    }
    renderJuros(numeroConta) {
        let contaProcurada = this.consultarConta(numeroConta);
        if (contaProcurada instanceof Conta_1.Poupanca) {
            //Uso diretamente o metodo renderJuros sem precisar do cast pois seria redundante, pois instante of ja verifica se é do tipo poupança.
            contaProcurada.renderJuros();
        }
        else {
            throw new Validacoes_1.PoupancaInvalidaError();
        }
    }
    lerArquivo(nomeArquivo) {
        let dados = (0, Utils_1.read_file)(nomeArquivo);
        let linhas = dados.split('\n');
        for (let linha of linhas) {
            let dados = linha.split(';');
            let cliente = new Cliente_1.Client(dados[3], dados[4], new Date(dados[5]));
            this.inserirCliente(cliente);
            if (dados[0] === 'CC') {
                let conta = new Conta_1.Corrente(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            }
            else if (dados[0] === 'CP') {
                let conta = new Conta_1.Poupanca(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            }
            else if (dados[0] === 'CI') {
                let conta = new Conta_1.ContaImposto(dados[1], parseFloat(dados[2]));
                this.inserirConta(conta);
                this.associarContaCliente(dados[1], dados[4]);
            }
        }
    }
    salvarArquivo(nomeArquivo) {
        let dados = '';
        for (let conta of this._contas) {
            dados += `Contas cadastradas\n`;
            dados += `Tipo -- Numero -- Saldo -- CPF -- Nome -- Data de Nascimento\n`;
            if (conta instanceof Conta_1.Corrente) {
                dados += `CC (Conta Corrente) -- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            }
            else if (conta instanceof Conta_1.Poupanca) {
                dados += `CP (Conta Poupanca)-- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            }
            else if (conta instanceof Conta_1.ContaImposto) {
                dados += `CI (Conta Imposto)-- ${conta.numero} -- ${conta.saldo} -- ${conta.cliente.cpf} -- ${conta.cliente.nome} -- ${conta.cliente.dataNascimento}\n`;
            }
        }
        (0, Utils_1.write_file)(nomeArquivo, dados);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Banco.js.map