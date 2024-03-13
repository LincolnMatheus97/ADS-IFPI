import { get_positive_number, percentual, print } from "../utils/io_utils.js";

function main() {
    const duracao_curso = get_positive_number(`Qual a duracao do curso que voce deseja: `);
    const valor_mensalidade = get_positive_number(`Qual o valor da mensalidade: `);
    const taxa_selic = get_positive_number(`Qual o valor atual da taxa SELIC: `);
    const salario_minimo = get_positive_number(`Qual o valor do salario minimo atual: `);
    const renda_familiar = get_positive_number(`Quanto em (R$) a renda da sua familia: `);
    const quantidade_familiar = get_positive_number(`Quantos sao os membros da sua familia: `);
    const ano_semestre = get_positive_number(`Qual o ano e semestre que voce deseja ingressar: `);

    let mensagem;

    if (Renda_Familiar_Aprovada(renda_familiar, quantidade_familiar, salario_minimo)) {
        let valor_anual = Calcular_ValorTotalCurso(duracao_curso, valor_mensalidade);
        let taxa_juros = Calular_Taxa_Juros(valor_anual, taxa_selic, renda_familiar);
        let duracao_curso_multiplo6 = Math.ceil(duracao_curso * 12 / 6);
        let parcela_fixa = duracao_curso_multiplo6 * 150 + 900;
        let saldo_devedor = Calcular_SaldoDevedor(parcela_fixa, valor_anual, taxa_juros);
        let valor_parcela_pos_carencia = Calcular_ParcelasAposCarencia(saldo_devedor, duracao_curso);
        let renda_minima = Calcular_RendaMinima(valor_parcela_pos_carencia);
        let conclusao_pagamento = Calcular_Conclusao(duracao_curso, ano_semestre);

        mensagem = `
        ------------------------------------------------------------------------------------------------
        >>>>>>>>>>>>>>>>>>>>>>>       VOCÊ FOI APROVADO PARA O CONTRATO       >>>>>>>>>>>>>>>>>>>>>>>>>
        
        ----> Valor a ser Financiado:                                         R$: ${valor_anual.toFixed(2)}
        ----> Valor Total dos Juros:                                          R$: ${taxa_juros.toFixed(2)}
        ----> Valor Total de Saldo Devedor:                                   R$: ${saldo_devedor.toFixed(2)}
        ----> Valor Total pago pela Carência:                                 R$: ${parcela_fixa.toFixed(2)}
        ----> Valor da Parcela do Financiamento:                              R$: ${valor_parcela_pos_carencia.toFixed(2)}
        ----> Você deverá ter Renda Mínima de:                                R$: ${renda_minima.toFixed(2)}
        ________________________________________________________________________________________________
        
        Você iniciou o curso em ${ano_semestre}, e concluirá o pagamento do financiamneto em ${conclusao_pagamento[0]}.${conclusao_pagamento[1]}
        
        ------------------------------------------------------------------------------------------------`;

    } else {
        mensagem = `
        ######################          VOCÊ NÃO FOI APROVADO PARA O CONTRATO           ######################`
    }

    print(mensagem);
}

function Renda_Familiar_Aprovada(renda_familiar, quantidade_familiar, salario_minimo) {
    return (renda_familiar <= (3 * salario_minimo * quantidade_familiar));
}

function Calcular_ValorTotalCurso(duracao_curso, valor_mensalidade) {
    return (duracao_curso * 12 * valor_mensalidade);
}

function Calular_Taxa_Juros(valor_anual, taxa_selic, renda_familiar) {
    let taxa;

    if (renda_familiar <= 1.5 * renda_familiar) {
        taxa = percentual(taxa_selic, 10) * valor_anual / 100;

    } else if (renda_familiar <= 2 * renda_familiar) {
        taxa = percentual(taxa_selic, 15) * valor_anual / 100;

    } else if (renda_familiar <= 2.5 * renda_familiar) {
        taxa = percentual(taxa_selic, 20) * valor_anual / 100;

    } else {
        taxa = percentual(taxa_selic, 25) * valor_anual / 100;
    }

    return taxa;
}

function Calcular_SaldoDevedor(parcela_fixa, valor_anual, taxa_juros) {
    return ((valor_anual + taxa_juros - parcela_fixa));
}

function Calcular_ParcelasAposCarencia(saldo_devedor, duracao_curso) {
    duracao_curso *= 12;
    duracao_curso -= 18;
    let duracao_parcelas = Math.min(duracao_curso, duracao_curso * 4);
    return (saldo_devedor / duracao_parcelas);
}

function Calcular_RendaMinima(valor_parcela) {
    return (valor_parcela / 0.1);
}

function Calcular_Conclusao(duracao_curso, ano_semestre) {
    let duracao_anos = duracao_curso;
    duracao_anos += 1.5;

    let ano = Math.floor(ano_semestre);
    let semestre = ano_semestre % 1;

    ano += duracao_anos;

    if (semestre === 1) {
        semestre = `2`;
    } else {
        ano++;
        semestre = `1`;
    }

    return [ano, semestre];
}

main();