import { get_number, get_positive_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {                                                                                                                                                       // >LEGENDA FOR ME<
    const GOAL = get_text(`\nMariana, qual sua meta sua meta com esse investimento: `);                                                                                //GOAL = meta                                                                             
    const HOWNEED = get_positive_number(`\nQuanto voce precisa em (R$) para essa sua meta: `);                                                                        //HOWNEED = quanto precisa
    const WAGE = get_number(`\nQuanto e seu salario: `);                                                                                                             //WAGE = salário
    const PERCENTS = get_number(`\nQuantos % voce deseja investir mensalmente, seu investimento tem ser inferior a 30% ao seu salario: `);                          //PERCENTS = percentual
    const RATE = get_number(`\nQual a taxa do seu investimento, entre (0.01% e 1%):  `);                                                                           //RATE = taxa

    let monthlyInvestment = percentual(WAGE, PERCENTS);                                                                                                          //monthlyInvestment = investimento por mes

    let newBalance = 0;                                                                                                                                        //newBalance = novo balanço
    let months = 0;                                                                                                                                           //months = meses

    if (PERCENTS < 30) {

        if (RATE >= 0.01 && RATE <= 1) {

            while (newBalance < HOWNEED) {
                newBalance += monthlyInvestment + (percentual(newBalance, RATE));
                months++;
            }

            if (months >= 12) {
                let years = Math.floor(months / 12);                                                                                              //years = anos
                let remainingMonths = months % 12;                                                                                               //remainingMonths = meses restantes
        
                print(`\nMariana você atingira sua meta em ${years} anos e ${remainingMonths} meses.\n`);
            } else {
                print(`\nMariana você atingira sua meta em ${months} meses.\n`);
            }

        }else {
            print(`\nDigite um taxa válida entre o intervalo fornecido !\n`);
        }

    } else {
        print(`\nDigite uma porcentagem válida como dito na descrição !\n`);
    }
}

main();