import { get_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    const valor_aparelho = get_number(`
            --->    Digite quanto custo o aparelho de celular: `);
    let opcao = get_number(`
            --->    Digite uma opcao de pagamento:
            -----------------------------------------        
                    1 - Pix / Especie
                    2 - Cartao Debito
                    3 - Cartao Credito
                _________________________
            --->    Sua Opcao: `);

    let valor_total = 0.0;
    let desconto = 0;
    let juros = 0;
    let forma_pagamento;
    let entrada = 0;
    let parcelas = 0;

    switch (opcao) {
        case 1:
            valor_total = Calcular_ValorTotal(valor_aparelho, opcao);
            desconto = Calcular_Desconto(valor_aparelho, valor_total);
            forma_pagamento = `Pix / Espécie`;
            break;
        case 2:
            valor_total = Calcular_ValorTotal(valor_aparelho, opcao);
            desconto = Calcular_Desconto(valor_aparelho, valor_total);
            forma_pagamento = `Cartão Debito`;
            break;
        case 3:
            entrada = get_number(`Deseja dar uma entrada ? Se sim digite um valor, se nao digite o valor zero(0): `)
            parcelas = get_number(`Digite um numero de parcelas, no maximo (12): `)
            valor_total = Calcular_ValorTotal_Credito(valor_aparelho, parcelas, entrada);
            juros = Calcular_Juros(valor_aparelho, parcelas);
            forma_pagamento = `Cartão Credito`;
            break;
        default:
            print(`Digite uma opção válida. Tente novamente.`);
            break;
    }

    print(`
    ------------------------------------------------------------------
    <><><><><><><><><>          NOTA FISCAL         <><><><><><><><><>
    
    ---> Valor do Aparelho:                         R$:${valor_aparelho}
    ---> Forma de Pagamento:                        ${forma_pagamento}
    ---> Desconto (-):                              R$:${desconto.toFixed(2)}
    ---> Entrada (-):                               R$:${entrada.toFixed(2)}
    ---> Parcelas (/):                              ${parcelas}
    ---> Juros (+):                                 R$:${juros.toFixed(2)}
    __________________________________________________________________
    
    ---> Valor Total à Pagar:                       R$:${valor_total.toFixed(2)}
    
    ------------------------------------------------------------------`);
}

function Calcular_ValorTotal(numero, opcao) {
    return (opcao === 1 ? (numero - percentual(numero, 15)) : (numero - percentual(numero, 10)));
}

function Calcular_Desconto(numero_1, numero_2) {
    return (numero_1 - numero_2);
}

function Calcular_ValorTotal_Credito(numero, parcela, entrada) {
    return (numero - entrada + (percentual(numero, 4)) + (parcela * 0.015));
}

function Calcular_Juros(numero, parcela) {
    return (percentual(numero, 4) + (parcela * 0.015));
}

main();