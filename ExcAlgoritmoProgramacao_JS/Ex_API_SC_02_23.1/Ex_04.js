import { get_number, percentual, porcentagem, print } from "../utils/io_utils.js";

function main() {                                                                                                                                                       // >LEGENDA FOR ME<
    const MONTHLY_INCOME = get_number(`\nDigite sua renda mensal: `);                                                                                                  //MONTHLY_INCOME = renda mensal
    const LOAN_AMOUNT = get_number(`\nDigite o valor do emprestimo: `);                                                                                               //LOAN_AMOUNT = valor de emprestimo
    const TERM = get_number(`\nDigite em quantas parcelas voce deseja dividir o emprestimo(no min = 2 e max = 24): `);                                               //TERM = parcelas

    let monthsToDays = TERM * 30;                                                                                                                                  //monthsToDays = meses(parcelas) em dias 

    let iof = percentual(LOAN_AMOUNT, 38) + (LOAN_AMOUNT * monthsToDays * 0.000082);                                                        

    const SELIC = 0.1375;

    if (TERM >= 2 && TERM <= 24) {
        let fees = calculeFees(TERM, SELIC);
        let missingMonths = 0;                                                                                                                             //missingMonths = meses restantes
        let totalInterest = 0;                                                                                                                            //totalInterest = juros totais

        while (missingMonths < TERM) {
            totalInterest += fees;
            missingMonths++;
        }

        let totalAmountPayable = LOAN_AMOUNT + iof + totalInterest;                                                                                //totalAmountPayable = valor total a pagar
        let amountPaidInInstallments = totalAmountPayable / TERM;                                                                                 //amountPaidInInstallments = valor pago em parcelas
        let incomeImpairment = porcentagem(amountPaidInInstallments, MONTHLY_INCOME);                                                            //incomeImpairment = comprometimento da renda
        let message = ``;

        if (incomeImpairment > 40) {
            message = `NEGADO (renda comprometida acima de 40%)`;
        } else {
            message = `APROVADO`;
        }

        print(`
        ------------------------------------------------------------------------------------
        >>>>>>>>>>>>>>>>              RELATÓRIO DE EMPRÉSTIMO             >>>>>>>>>>>>>>>>>>
        
        -> Valor do Empréstimo  -----------------------------------         R$:${LOAN_AMOUNT}
        -> Valor do IOF -------------------------------------------         R$:${iof.toFixed(2)}
        -> Valor do Juros a pagar   -------------------------------         R$:${totalInterest.toFixed(2)}
        -> Valor Total a pagar  -----------------------------------         R$:${totalAmountPayable.toFixed(2)}
        -> Valor da Parcela Mensal  -------------------------------         ${TERM}x de R$:${amountPaidInInstallments.toFixed(2)}
        -> Renda Comprometida   -----------------------------------         ${incomeImpairment.toFixed(2)}%
        ____________________________________________________________________________________
        
        ESTADO DO EMPRÉSTIMO: ${message}.
        
        ------------------------------------------------------------------------------------`)
    } else {
        print(`\nDigite a quantida de parcelas validas!`);
    }

}

function calculeFees(term, selic) {
    let rate = 0;

    if (term <= 6) {
        rate = percentual(selic, 50);
    } else if (term <= 12) {
        rate = percentual(selic, 75);
    } else if (term <= 18) {
        rate = percentual(selic, 100);
    } else {
        rate = percentual(selic, 130);
    }

    return rate;
}

main();