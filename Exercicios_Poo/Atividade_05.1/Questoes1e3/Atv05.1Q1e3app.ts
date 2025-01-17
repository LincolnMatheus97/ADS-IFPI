import { question } from 'readline-sync';
import { Bank } from "./Atv05.1Q1e3classBank";
import { associarContaCliente, consultarCliente, consultarConta, depositarConta, excluirConta, inserirCliente, inserirConta, sacarConta, totalizarSaldos, transferirEntreContas } from './Atv05.1Q1e3funcionabilidadeApp';

function main() {
    let b: Bank = new Bank();
    let escolha: number = -1;

    while (escolha != 0) {
        console.log(`\n
        \t\rBem Vindo
        \t\rEscolha a operação que desejar abaixo...
        \n\t\rPara Contas:
        \t\r1 - Inserir         2 - Consultar           3 - Sacar
        \t\r4 - Depositar       5 - Excluir             6 - Transferir
        \t\r7 - Totalização
        \n\t\rPara Clientes:
        \t\r8 - Inserir         9 - Consultar           10 - Associar
        \n\t\rPara Sair:
        \t\r0 - Sair do Programa`);
        escolha = Number(question(`\n\t\rOpcao Desejada: `));

        switch(escolha) {
            case 1:
                inserirConta(b);
                break;
            case 2:
                consultarConta(b);
                break;
            case 3:
                sacarConta(b);
                break;
            case 4:
                depositarConta(b);
                break;
            case 5:
                excluirConta(b);
                break;
            case 6:
                transferirEntreContas(b);
                break;
            case 7:
                totalizarSaldos(b);
                break;
            case 8:
                inserirCliente(b);
                break;
            case 9:
                consultarCliente(b);
                break;
            case 10:
                associarContaCliente(b);
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