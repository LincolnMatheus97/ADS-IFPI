import { get_number, get_positive_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    const valor_veiculo = get_positive_number(`Digite o valor do veiculo que voce deseja fazer o financiamento: `);
    const renda_comprador = get_positive_number(`Digite sua renda mensal: `);
    const ocupacao = get_positive_number(`Digite o numero referente seu tipo de emprego, (1 -Publico ou 2 -Privado): `);
    const valor_entrada = get_positive_number(`Quanto voce deseja dar de entrada? `);
    const percentual_saida = get_positive_number(`Qual percentual voce deseja deixar para a Saida(Ultima Parcela)? (%)? `);
    const prazo_pagamento = get_positive_number(`Em quantos meses voce deseja pagar o financiamento? `);
    const taxa_juros = get_positive_number(`Qual a taxa de juros do financiamento, (valor tem ser maior que 1.87%)? `);
    const taxa_inflacao = get_number(`Qual a taxa atual da inflacao ao mes (%)? `);

    const iof = 0.38
    const prazo_pagamento_dias = prazo_pagamento * 30;
    const iof_dia = 0.01118;

    let valor_saida = percentual(valor_veiculo, percentual_saida);
    let valor_corrigido = valor_saida * percentual(1, taxa_inflacao);
    let valor_financiamento = Calcular_ValorFinanciamento(valor_veiculo, valor_entrada, valor_corrigido);
    let valor_iof = percentual(valor_financiamento, iof);
    let valor_financiamento_iof = Calcular_ValorFinanciamentoIOF(valor_financiamento, valor_iof);
    let valor_taxajuros = Calcular_ValorTaxaJuros(valor_financiamento, prazo_pagamento, taxa_juros);
    let valor_iof_diario = percentual(prazo_pagamento_dias, iof_dia)
    let valor_financiamento_total = Calcular_ValorFinanciamentoTotal(valor_financiamento_iof, valor_taxajuros, valor_iof_diario);
    let valor_parcelas = Calcular_ValorParcelas(valor_financiamento_total, prazo_pagamento);
    let valor_total_parcelas = Calcular_Total(valor_parcelas, prazo_pagamento);

    let mensagem;

    if (Valor_EntradaSaida_Valido(valor_veiculo, valor_entrada, valor_corrigido)) {
        if (Parcela_Pode_Ser_Paga(valor_parcelas, renda_comprador, ocupacao)) {
            mensagem = `
            -------------------------------------------------------------------------------
            ~~~~~~~~~~~~~~~~~~~             FINANCIAMENTO               ~~~~~~~~~~~~~~~~~~~
            
            ---> Valor do Veículo   ---------------------------------   R$:${valor_veiculo}
            ---> Valor de Entrada   ---------------------------------   R$:${valor_entrada}
            ---> Valor a ser Financiado sem IOF ---------------------   R$:${valor_financiamento.toFixed(2)}
            ---> Valor do IOF   -------------------------------------   R$:${valor_iof.toFixed(2)}
            ---> Valor a ser Financiado com IOF ---------------------   R$:${valor_financiamento_iof.toFixed(2)}
            ---> Valor Saída    -------------------------------------   R$:${valor_corrigido.toFixed(2)}
            ---> Parcelamento   -------------------------------------   ${prazo_pagamento} parcelas de R$:${valor_parcelas.toFixed(2)}
            ---> Valor Total Parcelas:  -----------------------------   R$:${valor_total_parcelas.toFixed(2)}
            ---> Valor Total ----------------------------------------   R$:${(valor_total_parcelas + valor_entrada + valor_saida).toFixed(2)}
            
            ______________________________________________________________________________
            
            Observação: As Parcelas cabem na renda do comprador !
            
            ------------------------------------------------------------------------------`;
        } else {
            mensagem = `
            ALERTA: As Parcelas não cabem na renda do comprador !`;
        }
    } else {
        mensagem = `
        ALERTA: O valor da Entrada tem que ser no minino 30% do valor do veículo, assim como o valor de saída tem que
                ser de no máximo 30% do valor do mesmo.`;
    }

    print(mensagem);
}

function Calcular_ValorFinanciamento(num1, num2, num3) {
    return (num1 - num2 - num3);
}

function Calcular_ValorFinanciamentoIOF(num1, num2) {
    return (num1 + num2);
}

function Calcular_ValorTaxaJuros(num1, num2, num3) {
    let parcela = num1 / num2;
    let valor_percentual = (percentual(parcela, num3));

    return (valor_percentual);
}

function Calcular_ValorFinanciamentoTotal(num1, num2, num3) {
    return (num1 + num2 + num3);
}

function Calcular_ValorParcelas(num1, num2) {
    return (num1 / num2);
}

function Calcular_Total(num1, num2) {
    return (num1 * num2);
}

function Valor_EntradaSaida_Valido(num1, num2, num3) {
    let percentual_entrada = percentual(num1, 30);
    
    return ((num2 === percentual_entrada && num3 === percentual_entrada) ? true : false);
}

function Parcela_Pode_Ser_Paga(num1, num2, num3) {
    let percente_privado = percentual(num2, 30);
    let percente_publico = percentual(num2, 35);

    return ((num3 === `1` && num1 < percente_publico) ? true : (num3 === `2` && num1 < percente_privado) ? true : false);
}

main();