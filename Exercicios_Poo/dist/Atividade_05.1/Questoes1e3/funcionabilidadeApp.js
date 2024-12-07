"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inserirConta = inserirConta;
exports.consultarConta = consultarConta;
exports.sacarConta = sacarConta;
exports.depositarConta = depositarConta;
exports.excluirConta = excluirConta;
exports.transferirEntreContas = transferirEntreContas;
exports.totalizarSaldos = totalizarSaldos;
exports.inserirCliente = inserirCliente;
exports.consultarCliente = consultarCliente;
exports.associarContaCliente = associarContaCliente;
const classBank_1 = require("./classBank");
const utils_1 = require("./utils");
function inserirConta(banco) {
    let idConta = (0, utils_1.get_number)(`\n\rDigite o numero de identificacao(ID) da conta: `);
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta: `);
    let conta = new classBank_1.Cont(idConta, numeroConta, 0, null);
    if (conta) {
        banco.inserirConta(conta);
    }
}
function consultarConta(banco) {
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        (0, utils_1.print)(`\n\rConta encontrada, dados: ${contaProcurada.toString()}`);
    }
    else {
        (0, utils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
    }
}
function sacarConta(banco) {
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta: `);
    let valorSacar = (0, utils_1.get_number)(`\n\rDigite o valor que deseja sacar: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        if (contaProcurada.consultarSaldo() >= valorSacar) {
            contaProcurada.sacar(valorSacar);
            (0, utils_1.print)(`\n\rValor sacado com sucesso...`);
        }
        else {
            (0, utils_1.print)(`\n\rSaldo insuficiente para sacar...`);
        }
    }
    else {
        (0, utils_1.print)(`Conta de número ${numeroConta}, não encontrada...`);
    }
}
function depositarConta(banco) {
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta: `);
    let valorDeposito = (0, utils_1.get_number)(`\n\rDigite o valor que deseja depositar: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        contaProcurada.depositar(valorDeposito);
        (0, utils_1.print)(`\n\rValor depositado com sucesso...`);
    }
    else {
        (0, utils_1.print)(`Conta de número ${numeroConta}, não encontrada...`);
    }
}
function excluirConta(banco) {
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        banco.excluir(numeroConta);
        (0, utils_1.print)(`\n\rConta excluida com sucesso...`);
    }
    else {
        (0, utils_1.print)(`\n\rConta de número ${numeroConta}, não encontrada...`);
    }
}
function transferirEntreContas(banco) {
    let contasDestino = [];
    let numContaRemetente = (0, utils_1.get_text)(`\n\rDigite o numero da conta, de onde enviara o dinheiro: `);
    let remetenteProcurada = banco.consultarConta(numContaRemetente);
    if (remetenteProcurada) {
        let quantidadeContas = (0, utils_1.get_number)(`\n\rDigite para quantas contas desejar tranferir: `);
        for (let i = 0; i < quantidadeContas; i++) {
            let numContaDestino = (0, utils_1.get_text)(`\n\rDigite o numero da conta, que recebera o dinheiro: `);
            let destinoProcurada = banco.consultarConta(numContaDestino);
            if (destinoProcurada) {
                contasDestino.push(destinoProcurada.numero);
            }
            else {
                (0, utils_1.print)(`\n\rConta de número ${numContaDestino}, não encontrada...`);
            }
        }
        let valorDesejado = (0, utils_1.get_number)(`\n\rDigite o valor que deseja depositar: `);
        if (remetenteProcurada.saldo >= valorDesejado * quantidadeContas) {
            banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
            (0, utils_1.print)(`\n\rTransferência realizada com sucesso...`);
        }
        else {
            (0, utils_1.print)(`\n\rSaldo insuficiente para sacar...`);
        }
    }
    else {
        (0, utils_1.print)(`\n\rConta de número ${numContaRemetente}, não encontrada...`);
    }
}
function totalizarSaldos(banco) {
    let numeroCpf = (0, utils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
    let clienteProcurado = banco.consultarCliente(numeroCpf);
    if (clienteProcurado) {
        let saldoTotal = banco.totalizarSaldoCliente(clienteProcurado.cpf);
        (0, utils_1.print)(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
    }
    else {
        (0, utils_1.print)(`\n\rO cliente de CPF: ${numeroCpf} não foi encontrado...`);
    }
}
function inserirCliente(banco) {
    let idCliente = (0, utils_1.get_number)(`\n\rDigite o numero de identificacao(ID) do cliente: `);
    let nomeCliente = (0, utils_1.get_text)(`\n\rDigite o nome do cliente: `);
    let numeroCpf = (0, utils_1.get_text)(`\n\rDigite o numero de CPF do cliente: `);
    let dataNasci = (0, utils_1.get_date)(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
    let cliente = new classBank_1.Client(idCliente, nomeCliente, numeroCpf, dataNasci);
    if (cliente) {
        banco.inserirCliente(cliente);
    }
}
function consultarCliente(banco) {
    let numeroCpf = (0, utils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
    let clienteProcurado = banco.consultarCliente(numeroCpf);
    if (clienteProcurado) {
        (0, utils_1.print)(`\n\rCliente encontrado, dados: ${clienteProcurado.toString()}`);
    }
    else {
        (0, utils_1.print)(`\n\rCliente não encontrado...`);
    }
}
function associarContaCliente(banco) {
    let numeroConta = (0, utils_1.get_text)(`\n\rDigite o numero da conta que deseja associar: `);
    let numeroCpf = (0, utils_1.get_text)(`\n\rDigite o numero de CPF do Cliente: `);
    banco.associarContaCliente(numeroConta, numeroCpf);
}
//# sourceMappingURL=funcionabilidadeApp.js.map