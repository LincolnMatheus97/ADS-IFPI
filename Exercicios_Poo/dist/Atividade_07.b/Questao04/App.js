"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const Cliente_1 = require("./Cliente");
const Conta_1 = require("./Conta");
const Utils_1 = require("./Utils");
class App {
    constructor(banquinho) {
        this._banco = banquinho;
    }
    get banco() {
        return this._banco;
    }
    set banco(banco) {
        this._banco = banco;
    }
    inserirContaCorrente(numeroCont) {
        let conta = new Conta_1.Corrente(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }
    inserirContaPoupanca(numeroCont) {
        let conta = new Conta_1.Poupanca(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }
    inserirContaImposto(numeroCont) {
        let conta = new Conta_1.ContaImposto(numeroCont, 0);
        if (conta) {
            this._banco.inserirConta(conta);
        }
    }
    consultarConta(numeroConta) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            (0, Utils_1.print)(`Conta encontrada, dados: ${contaProcurada.toString()}`);
        }
        else {
            (0, Utils_1.print)(`Conta de número ${numeroConta}, não encontrada...`);
        }
    }
    sacarConta(numeroConta, valorSacar) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.consultarSaldo() >= valorSacar && valorSacar > 0) {
                contaProcurada.sacar(valorSacar);
                return `Valor sacado com sucesso...`;
            }
            else {
                return `Saldo insuficiente para sacar...`;
            }
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    depositarConta(numeroConta, valorDeposito) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            contaProcurada.depositar(valorDeposito);
            return `Valor depositado com sucesso...`;
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    excluirConta(numeroConta) {
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                let listaContas = this._banco.listarContasCliente(contaProcurada.cliente.cpf);
                if (listaContas.length == 1) {
                    this._banco.excluirCliente(contaProcurada.cliente.cpf);
                    return `Cliente excluido, pois só tinha a conta ${contaProcurada.numero} associada.`;
                }
            }
            this._banco.excluirConta(contaProcurada.numero);
            return `Conta excluida com sucesso...`;
        }
        else {
            return `Conta de número ${numeroConta}, não encontrada...`;
        }
    }
    transferirEntreContas(numContaRemetente, contasDestino, valorDesejado) {
        let remetenteProcurada = this._banco.consultarConta(numContaRemetente);
        if (remetenteProcurada) {
            if (remetenteProcurada.saldo >= valorDesejado * contasDestino.length) {
                this._banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
                return `Transferência realizada com sucesso...`;
            }
            else {
                return `Saldo insuficiente para transferir...`;
            }
        }
        else {
            return `Conta de número ${numContaRemetente}, não encontrada...`;
        }
    }
    totalizarSaldos(cpf) {
        let clienteProcurado = this._banco.consultarCliente(cpf);
        if (clienteProcurado) {
            let saldoTotal = this._banco.totalizarSaldoCliente(clienteProcurado.cpf);
            (0, Utils_1.print)(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
        }
        else {
            (0, Utils_1.print)(`\n\rO cliente de CPF: ${cpf} não foi encontrado...`);
        }
    }
    mudarTitularidade() {
        let numeroConta = (0, Utils_1.get_text)(`\n\rDigite o numero da conta: `);
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada.cliente) {
                (0, Utils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, Utils_1.get_number)(`\n\rDeseja alterar o titular da Conta? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    let numeroCpf = (0, Utils_1.get_text)(`\n\rDigite o numero de CPF do novo Cliente Titular: `);
                    let clienteProcurado = this._banco.consultarCliente(numeroCpf);
                    if (clienteProcurado) {
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        contaProcurada.cliente = clienteProcurado;
                        clienteProcurado.adicionarConta(contaProcurada);
                        (0, Utils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, Utils_1.print)(`${contaProcurada.toString()}`);
                    }
                    else {
                        (0, Utils_1.print)(`\n\rCliente não encontrado...`);
                        contaProcurada.cliente.contas = this.listaContas(numeroCpf);
                        let nomeCliente = (0, Utils_1.get_text)(`\n\rDigite o nome do cliente: `);
                        let dataNasci = (0, Utils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                        let novoCliente = this.inserirCliente(nomeCliente, numeroCpf, dataNasci);
                        novoCliente.adicionarConta(contaProcurada);
                        contaProcurada.cliente = novoCliente;
                        (0, Utils_1.print)(`\n\rMudança realizada com sucesso...`);
                        (0, Utils_1.print)(`${contaProcurada.toString()}`);
                    }
                }
                else {
                    return;
                }
            }
            else {
                (0, Utils_1.print)(`${contaProcurada.toString()}`);
                let escolha = (0, Utils_1.get_number)(`\n\rA conta nao possui cliente associado. Deseja associar um cliente? (1) - SIM, (2) - NAO: `);
                if (escolha === 1) {
                    this.associarContaCliente(numeroConta, (0, Utils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `));
                }
                else {
                    return;
                }
            }
        }
        else {
            (0, Utils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
        }
    }
    inserirCliente(nomeCliente, numeroCpf, dataNasci) {
        let cliente = new Cliente_1.Client(nomeCliente, numeroCpf, dataNasci);
        if (cliente) {
            this._banco.inserirCliente(cliente);
        }
        return cliente;
    }
    consultarCliente(numeroCpf) {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            (0, Utils_1.print)(`Cliente encontrado, dados: ${clienteProcurado.toString()}`);
        }
        else {
            (0, Utils_1.print)(`Cliente não encontrado...`);
        }
    }
    excluirCliente(numeroCpf) {
        let clienteProcurado = this._banco.consultarCliente(numeroCpf);
        if (clienteProcurado) {
            if (clienteProcurado.contas) {
                let contasAssociadas = [];
                for (let i = 0; i < clienteProcurado.contas.length; i++) {
                    contasAssociadas.push(clienteProcurado.contas[i]);
                }
                for (let i = 0; i < contasAssociadas.length; i++) {
                    this._banco.excluirConta(contasAssociadas[i].numero);
                }
            }
            this._banco.excluirCliente(clienteProcurado.cpf);
            return `Cliente excluido com sucesso...`;
        }
        else {
            return `Cliente não encontrado...`;
        }
    }
    associarContaCliente(numeroConta, numeroCpf) {
        this._banco.associarContaCliente(numeroConta, numeroCpf);
    }
    listaContas(cpfCliente) {
        return this._banco.listarContasCliente(cpfCliente);
    }
    renderJuros(numeroConta) {
        let confirmacao = false;
        let contaProcurada = this._banco.consultarConta(numeroConta);
        if (contaProcurada) {
            if (contaProcurada instanceof Conta_1.Poupanca) {
                contaProcurada.renderJuros();
                confirmacao = true;
                return confirmacao;
            }
            return confirmacao;
        }
        return confirmacao;
    }
    lerArquivoDeContas(nomeArquivo) {
        this._banco.lerArquivo(nomeArquivo);
    }
    salvarArquivoDeContas(nomeArquivo) {
        this._banco.salvarArquivo(nomeArquivo);
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map