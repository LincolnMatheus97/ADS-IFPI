import { Client, Bank, Cont } from "./classBank";
import { get_date, get_number, get_text, print } from "./utils";

export function inserirConta(banco: Bank): any {
    let idConta = get_number(`\n\rDigite o numero de identificacao(ID) da conta: `);
    let numeroConta = get_text(`\n\rDigite o numero da conta: `);

    let conta: Cont = new Cont(idConta, numeroConta, 0, null);
    if (conta) {
        banco.inserirConta(conta);
    }
}

export function consultarConta(banco: Bank): any {
    let numeroConta = get_text(`\n\rDigite o numero da conta: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        print(`\n\rConta encontrada, dados: ${contaProcurada.toString()}`);
    } else {
        print(`\n\rConta de número ${numeroConta}, não encontrada...`);
    }
}

export function sacarConta(banco: Bank): any {
    let numeroConta = get_text(`\n\rDigite o numero da conta: `);
    let valorSacar = get_number(`\n\rDigite o valor que deseja sacar: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if (contaProcurada) {
        if(contaProcurada.consultarSaldo() >= valorSacar) {
            contaProcurada.sacar(valorSacar);
            print(`\n\rValor sacado com sucesso...`);
        } else {
            print(`\n\rSaldo insuficiente para sacar...`);
        }
    } else {
        print(`Conta de número ${numeroConta}, não encontrada...`);
    }
}

export function depositarConta(banco: Bank): any {
    let numeroConta = get_text(`\n\rDigite o numero da conta: `);
    let valorDeposito = get_number(`\n\rDigite o valor que deseja depositar: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if(contaProcurada) {
        contaProcurada.depositar(valorDeposito);
        print(`\n\rValor depositado com sucesso...`);
    } else {
        print(`Conta de número ${numeroConta}, não encontrada...`);
    }
}

export function excluirConta(banco: Bank): any {
    let numeroConta = get_text(`\n\rDigite o numero da conta: `);
    let contaProcurada = banco.consultarConta(numeroConta);
    if(contaProcurada) {
        banco.excluir(numeroConta);
        print(`\n\rConta excluida com sucesso...`);
    } else {
        print(`\n\rConta de número ${numeroConta}, não encontrada...`);
    }
}

export function transferirEntreContas(banco: Bank): any {
    let contasDestino: string[] = [];
    let numContaRemetente = get_text(`\n\rDigite o numero da conta, de onde enviara o dinheiro: `);
    let remetenteProcurada = banco.consultarConta(numContaRemetente);
    if(remetenteProcurada) {
        let quantidadeContas = get_number(`\n\rDigite para quantas contas desejar tranferir: `);
        for (let i = 0; i < quantidadeContas; i++) {
            let numContaDestino = get_text(`\n\rDigite o numero da conta, que recebera o dinheiro: `);
            let destinoProcurada = banco.consultarConta(numContaDestino);
            if(destinoProcurada) {
                contasDestino.push(destinoProcurada.numero);
            } else {
                print(`\n\rConta de número ${numContaDestino}, não encontrada...`);
            }
        }
        let valorDesejado = get_number(`\n\rDigite o valor que deseja depositar: `);
        if (remetenteProcurada.saldo >= valorDesejado * quantidadeContas) {
            banco.transferir(valorDesejado, remetenteProcurada, ...contasDestino);
            print(`\n\rTransferência realizada com sucesso...`);
        } else {
            print(`\n\rSaldo insuficiente para sacar...`);
        }
    } else {
        print(`\n\rConta de número ${numContaRemetente}, não encontrada...`);
    }
}

export function totalizarSaldos(banco: Bank): any {
    let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
    let clienteProcurado = banco.consultarCliente(numeroCpf);
    if (clienteProcurado) {
        let saldoTotal = banco.totalizarSaldoCliente(clienteProcurado.cpf);
        print(`\n\rO cliente possui um total em suas contas de R$: ${saldoTotal.toFixed(2)}.`);
    } else {
        print(`\n\rO cliente de CPF: ${numeroCpf} não foi encontrado...`);
    }
}

export function inserirCliente(banco: Bank): any {
    let idCliente = get_number(`\n\rDigite o numero de identificacao(ID) do cliente: `);
    let nomeCliente = get_text(`\n\rDigite o nome do cliente: `);
    let numeroCpf = get_text(`\n\rDigite o numero de CPF do cliente: `);
    let dataNasci = get_date(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);

    let cliente: Client = new Client(idCliente, nomeCliente, numeroCpf, dataNasci);
    if(cliente) {
        banco.inserirCliente(cliente);
    }
}

export function consultarCliente(banco: Bank): any {
    let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
    let clienteProcurado = banco.consultarCliente(numeroCpf);
    if (clienteProcurado) {
        print(`\n\rCliente encontrado, dados: ${clienteProcurado.toString()}`);
    } else {
        print(`\n\rCliente não encontrado...`);
    }
}

export function associarContaCliente(banco: Bank): any {
    let numeroConta = get_text(`\n\rDigite o numero da conta que deseja associar: `);
    let numeroCpf = get_text(`\n\rDigite o numero de CPF do Cliente: `);
    banco.associarContaCliente(numeroConta, numeroCpf);
}