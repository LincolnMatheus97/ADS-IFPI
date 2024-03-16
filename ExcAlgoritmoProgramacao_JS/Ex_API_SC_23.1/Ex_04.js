import { get_number, get_positive_number, percentual, print } from "../utils/io_utils.js";

function main() {
    const percentual_fipe = get_number(`Digite qual percentual da FIPE voce deseja seu Argo: `);
    const prazo_pagamento = get_positive_number(`Quantos meses voce deseja parcelar (36, 48 ou 60): `);
    const taxa_juros = get_number(`Digite o valor taxa de juros atual mensal (1.2% ~ 2.5%), para o CDC: `);
    const taxa_adm = get_number(`Digite o valor da taxa de administracaoo (10% ~ 15%), para o Consorcio: `);

    const valor_argo = 89000;
    const valor_corolla = 185000;

    let valor_entrada = percentual(valor_argo, percentual_fipe);
    let valor_financiamento = Calcular_financiamento(valor_corolla, valor_entrada);
    let valor_financiamento_consorcio = Calcular_ValorTotal(valor_financiamento, percentual(valor_entrada, taxa_adm));
    let parcelas_cdc = Calcular_ParcelasEJuros_CDC(valor_financiamento, prazo_pagamento, taxa_juros);
    let juros_totais_cdc = Calcular_ParcelasEJuros_CDC(valor_financiamento, prazo_pagamento, taxa_juros);
    let parcelas_consorcio = Calcular_Parcelas_Consorcio(valor_financiamento_consorcio, prazo_pagamento);
    let valor_total_consorcio = Calcular_ValorTotalFinal(parcelas_consorcio, prazo_pagamento);
    let valor_total_cdc = Calcular_ValorTotalFinal(parcelas_cdc[0], prazo_pagamento);

    let mais_vantajoso = valor_total_cdc > valor_total_consorcio ? `Consorcio` : valor_total_cdc < valor_total_consorcio ? `CDC` : `QUALQUER`;

    let mensagem;

    mensagem = `
    ___________________________________________________________________________________________
    
    <><><><><><><><><><><><<><>             SIMULAÇÃO               <><><><><><><><><><><><<><>
    
    ### CDC:
    ---> Valor do Bem:  ------------------------------------------  R$:${valor_corolla.toFixed(2)}
    ---> Valor a ser Parcelado: ----------------------------------  R$:${valor_financiamento.toFixed(2)}
    ---> Juros Totais:  ------------------------------------------  R$:${(juros_totais_cdc[1]).toFixed(2)}
    ---> Parcelamento: -------------------------------------------  ${prazo_pagamento} prestações de R$:${(parcelas_cdc[0]).toFixed(2)}
    ---> Total a Pagar: ------------------------------------------  R$:${valor_total_cdc.toFixed(2)}
    
    -------------------------------------------------------------------------------------------
    
    ### Consorcio:
    ---> Valor do Bem:  ------------------------------------------  R$:${valor_corolla.toFixed(2)}
    ---> Valor a ser Parcelado: ----------------------------------  R$:${valor_financiamento_consorcio.toFixed(2)}
    ---> Juros Totais:  ------------------------------------------  R$:${(percentual(valor_entrada, taxa_adm)).toFixed(2)}
    ---> Parcelamento: -------------------------------------------  ${prazo_pagamento} prestações de R$:${parcelas_consorcio.toFixed(2)}
    ---> Total a Pagar em Parcelas: ------------------------------  R$:${valor_total_consorcio.toFixed(2)}
    ---> Valor Total Pago:  --------------------------------------  R$:${(valor_total_consorcio + valor_entrada).toFixed(2)}
    
    -------------------------------------------------------------------------------------------
    
    Mediante os dados fornecidos, podemos dizer que é mais vantajoso você fazer o financiamento 
    por ${mais_vantajoso}.
    
    ___________________________________________________________________________________________`;

    print(mensagem);
}

function Calcular_financiamento(num1, num2) {
    return (num1 - num2);
}

function Calcular_ValorTotal(num1, num2) {
    return (num1 + num2);
}

function Calcular_ParcelasEJuros_CDC(num1, num2, num3) {
    let parcela = num1 / num2;
    let valor_percentual = (percentual(parcela, num3));
    let valor_final = parcela + valor_percentual;
    let percentual_total = valor_percentual * num2

    return [valor_final, percentual_total];
}

function Calcular_Parcelas_Consorcio(num1, num2) {
    return (num1 / num2);
}

function Calcular_ValorTotalFinal(num1, num2) {
    return (num1 * num2);
}

main();