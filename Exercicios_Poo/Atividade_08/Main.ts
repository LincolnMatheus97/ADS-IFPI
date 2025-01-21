import { question } from 'readline-sync';
import { Bank } from "./Banco";
import { App } from './App';
import { get_date, get_number, get_text, print } from './Utils';

function main() {
    let b: Bank = new Bank();
    let app: App = new App(b);
    let arquivoContasInativas: string = 'CNC.txt', arquivoContasAtivas: string = 'CC.txt';
    let escolha: number = -1, numeroConta: string = '', valor: number = 0, contaOrigem: string = '', contasDestino: string[] = [], cpf: string = ''
    let nomeCliente: string = '', dataNasci: Date = new Date(), verificacao: boolean, decisao: string  = '', resultadoConsulta: any = '', resultadoMudanca: any = '';

    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar                  3 - Sacar
        \t\r4 - Depositar       5 - Excluir                    6 - Transferir
        \t\r7 - Totalização     8 - Mudar Titularidade         9 - Render Juros
        \n\t\rPara Clientes:
        \t\r10 - Inserir        11 - Consultar                 12 - Associar
        \t\r13 - Excluir        14 - Ler Arquivo De Contas     15 - Salvar Arquivo De Contas
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number(question(`\n\t\rOpcao Desejada: `));

        switch (escolha) {
            case 1:
                numeroConta = get_text(`Digite o numero da conta: `);
                decisao = get_text(`Deseja criar Conta Corrente ou Poupanca? 1-(Corrente), 2-(Poupanca) ou 3-(Imposto): `)
                if (decisao === `1`) {
                    app.inserirContaCorrente(numeroConta);
                } else if (decisao === `2`) {
                    app.inserirContaPoupanca(numeroConta);
                } else if (decisao === `3`) {
                    app.inserirContaImposto(numeroConta);
                }
                print(`Conta criada com sucesso...`);
                break;
            case 2:
                numeroConta = get_text(`Digite o numero da conta: `);
                resultadoConsulta = app.consultarConta(numeroConta);
                print(resultadoConsulta.mensagem);
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
                app.transferirEntreContas(contaOrigem, contasDestino, valor);
                break;
            case 7:
                cpf = get_text(`Digite o cpf do cliente: `);
                app.totalizarSaldos(cpf);
                break;
            case 8:
                numeroConta = get_text(`Digite o numero da conta: `);
                resultadoConsulta = app.consultarConta(numeroConta);

                if (resultadoConsulta.sucesso) {
                    print(resultadoConsulta.mensagem);
                    escolha = get_number(`Deseja mudar a titularidade da conta? 1-(Sim) ou 2-(Nao): `);
                    if (escolha === 1) {
                        cpf = get_text(`Digite o numero de CPF do novo Cliente Titular: `);
                        resultadoMudanca = app.mudarTitularidade(numeroConta, cpf);
                        print(resultadoMudanca);
                    } else {
                        print(`Operacao cancelada...`);
                    }
                } else {
                    print(resultadoConsulta.mensagem);
                }
                break;
            case 9:
                numeroConta = get_text(`Digite o numero da conta: `);
                verificacao = app.renderJuros(numeroConta);
                if (verificacao) {
                    print(`Juros rendidos com sucesso...`);
                } else {
                    print(`Conta não encontrada...`);
                }
                break;
            case 10:
                nomeCliente = get_text(`\n\rDigite o nome do cliente: `);
                cpf = get_text(`\n\rDigite o numero de CPF do cliente: `);
                dataNasci = get_date(`\n\rDigite a data de aniversario do cliente. EX: (ano, mes, dia): `);
                app.inserirCliente(nomeCliente, cpf, dataNasci);
                break;
            case 11:
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.consultarCliente(cpf);
                break;
            case 12:
                numeroConta = get_text(`\n\rDigite o numero da conta: `);
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.associarContaCliente(numeroConta, cpf);
                break;
            case 13:
                cpf = get_text(`\n\rDigite o cpf do cliente: `);
                app.excluirCliente(cpf);
                break;
            case 14:
                app.lerArquivoDeContas(arquivoContasInativas);
                print(`Arquivo lido com sucesso...`);
                break;
            case 15:
                app.salvarArquivoDeContas(arquivoContasAtivas);
                print(`Arquivo salvo com sucesso...`);
                break;
            case 0:
                print(`Encerrando Programa...`);
                break;
            default:
                print(`Opção Invalida...`)
        }
        question(`Operacao finalizada...Digite Enter`);
    }
}

main();