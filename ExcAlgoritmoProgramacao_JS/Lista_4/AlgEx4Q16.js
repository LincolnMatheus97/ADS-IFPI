/*
Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.  
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um 
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo.
*/

import { get_number, percentual, print } from "../utils/io_utils.js";

function main() {
    const emprestimo = 3000;
    const pagamento_dia_util = 200;
    let pagamento_emprestimo = emprestimo;
    let dias = 0;

    while (pagamento_emprestimo > 0) {
        let pergunta = get_number(`O pagamento foi feito no dia útil ? (1-Sim ou 2-Nao): `);

        if (pergunta === 2) {
            let percentil = percentual(emprestimo, 0.85);
            pagamento_emprestimo = pagamento_emprestimo - percentil;
            print(`${pagamento_emprestimo}`)
        } else {
            pagamento_emprestimo = pagamento_emprestimo - pagamento_dia_util;
            print(`${pagamento_emprestimo}`)
        }
        dias++;
    }

    print(`Dado o empréstimo ${emprestimo}, sendo as parcelas ${pagamento_dia_util}. O emprestimo será pago em ${dias} dias úteis.`);
}

main();