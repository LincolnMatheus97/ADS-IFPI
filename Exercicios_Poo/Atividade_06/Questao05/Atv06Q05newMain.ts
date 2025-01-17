import { question } from 'readline-sync';
import { Bank } from "../Questao03/Atv06Q03";
import { App } from './Atv06Q05classNewApp';
import { get_date, get_number, get_text } from './Atv06Q05newUtils';

function main() {
    let b: Bank = new Bank();
    let app: App = new App(b);
    let escolha: number = -1, numeroConta: string = '', valor: number = 0, contaOrigem: string = '', contasDestino: string [] = [], cpf: string = ''
    let nomeCliente: string = '', dataNasci: Date = new Date();

    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar           3 - Sacar
        \t\r4 - Depositar       5 - Excluir             6 - Transferir
        \t\r7 - Totalização     8 - Mudar Titularidade
        \n\t\rPara Clientes:
        \t\r9 - Inserir         10 - Consultar           11 - Associar
        \t\r12 - Excluir
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number(question(`\n\t\rOpcao Desejada: `));

        switch(escolha) {
            case 1:
                numeroConta = get_text(`Digite o numero da conta: `);
                app.inserirConta(numeroConta);
                break;
            case 2:
                numeroConta = get_text(`Digite o numero da conta: `);
                app.consultarConta(numeroConta);
                break;
            case 3:
                numeroConta = get_text(`Digite o numero da conta que deseja sacar: `);
                valor = get_number(`Digite o valor que deseja sacar: `);
                app.sacarConta(numeroConta, valor);
                break;
            case 4:
                numeroConta = get_text(`Digite o numero da conta que deseja depositar: `);
                valor = get_number(`Digite o valor que deseja depositar: `);
                app.depositarConta(numeroConta, valor);
                break;
            case 5:
                numeroConta = get_text(`Digite o numero da conta que deseja excluir: `);
                app.excluirConta(numeroConta);
                break;
            case 6:
                contaOrigem = get_text(`Digite o numero da conta de origem: `);
                while (true) {
                    let contaDestino = get_text(`Digite o numero da conta de destino ou 0 para sair: `);
                    if (contaDestino == '0') {
                        break;
                    }
                    contasDestino.push(contaDestino);
                }
                valor = get_number(`Digite o valor que deseja transferir: `);
                if (valor * contasDestino.length > b.consultarConta(contaOrigem).saldo) {
                    console.log(`Saldo insuficiente...`);
                    break;
                }
                app.transferirEntreContas(contaOrigem, contasDestino, valor);
                break;
            case 7:
                cpf = get_text(`Digite o cpf do cliente: `);
                app.totalizarSaldos(cpf);
                break;
            case 8:
                app.mudarTitularidade();
                break;
            case 9:
                nomeCliente = get_text(`\n\rDigite o nome do cliente: `);
                cpf = get_text(`\n\rDigite o numero de CPF do cliente: `);
                dataNasci = get_date(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                app.inserirCliente(nomeCliente, cpf, dataNasci);
                break;
            case 10:
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.consultarCliente(cpf);
                break;
            case 11:
                numeroConta = get_text(`\n\rDigite o numero da conta: `);
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.associarContaCliente(numeroConta, cpf);
                break;
            case 12:
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.excluirCliente(cpf);
                break;
            case 0:
                console.log(`Encerrando Programa...`);
                break;
            default:
                console.log(`Opção Invalida...`)
        }
        question(`Operacao finalizada...Digite Enter`);
    }
}

main();