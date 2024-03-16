import { get_number, get_positive_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    const renda_mensal = get_number(`Se desejar informar renda mensal, digite o valor. Se nao digite zero(0): `);
    const valor_bem = get_positive_number(`Digite o valor do bem que deseja: `);
    const prazo_pagamento = get_number(`Digite em quantos meses voce deseja pagar: `);

    let valor_taxa_Adm = percentual(valor_bem, 15);
    let valor_total = Calcular_ValorTotal(valor_bem, valor_taxa_Adm);
    let valor_parcela = Calcular_ValorParcela(valor_total, prazo_pagamento);
    let renda_minima = percentual(valor_total, 10);

    let lance_entrada;
    let valor_lance = 0;
    let escolha;
    let novo_prazo = 0;
    let nova_parcela = 0;
    let mensagem;
    let ultima_nova_parcela = 0;

    mensagem = `
                    ______________________________________________________________________________________
                    //////////////////////////             SIMULAÇÃO            //////////////////////////
                    
                    ### DADOS BASE:

                    ---> Valor do Bem:  -------------------------------------   R$:${valor_bem.toFixed(2)}
                    ---> Prazo: ---------------------------------------------   ${prazo_pagamento} meses
                    ---> Taxa de Administração: -----------------------------   15% sobre R$:${valor_bem.toFixed(2)}
                    ---> Renda Mensal do Contratante:   ---------------------   R$:${renda_mensal.toFixed(2)}
                    
                    ### DADOS DA SIMULAÇÃO:
                    
                    ---> Valor das Parcelas:    -----------------------------   R$:${valor_parcela.toFixed(2)}
                    ---> Valor Total a Pagar:   -----------------------------   R$:${valor_total.toFixed(2)}
                    ---> Valor Taxa de Adm: ---------------------------------   R$:${valor_taxa_Adm.toFixed(2)}

                    --------------------------------------------------------------------------------------
                    `;

    if (Renda_Minima_Eh_Valida(renda_mensal, renda_minima)) {
        lance_entrada = get_text(`Voce deseja dar um lance/entrada (SIM/NAO)? `).toUpperCase();
        mensagem += `
                    ---> Você deseja dar um lance/entrada:    ---------------   ${lance_entrada}`;

        if (Sim_lance_entrada(lance_entrada)) {
            valor_lance = get_number(`Digite um valor de lance: `);
            mensagem += `
                    ---> Valor do Lance:    ---------------------------------   R$:${valor_lance.toFixed(2)}`;

            if (Eh_Possivel_valor_lance(valor_lance, renda_mensal)) {
                escolha = get_text(`Voce deseja reduzir o prazo ou reduzir as parcelas? `).toUpperCase();
                mensagem += `
                    ---> Reduzir Prazo ou Parcela:    -----------------------   ${escolha}`

                if (Eh_ReduzirPrazo(escolha)) {
                    novo_prazo = Calcular_NovoPrazo(valor_parcela, valor_lance, prazo_pagamento);
                    mensagem += `
                    ---> Novo Prazo:   --------------------------------------   ${novo_prazo} meses
                    
                    ______________________________________________________________________________________`;

                } else {
                    valor_total = (valor_total - valor_lance);
                    nova_parcela = Calcular_ValorParcela(valor_total, prazo_pagamento);
                    ultima_nova_parcela = Calcular_ValorUltimaParcela(valor_total, prazo_pagamento);
                    mensagem += `
                    ---> Valor nova Parcela:  -------------------------------   R$:${nova_parcela.toFixed(2)}
                    ---> Valor da Última Parcela:   -------------------------   R$:${ultima_nova_parcela.toFixed(2)}
                    
                    ______________________________________________________________________________________`;
                }

            } else {
                mensagem += `
                    ---> Não é possivel dar esse lance, pois ele utrapassa o limite de até 30% da sua renda.
                    
                    ______________________________________________________________________________________`;
            }

        }

    } else {
        mensagem += `
                    ---> Sua renda mensal não é válida para o resgate. Você deve ter uma renda mínima de ${renda_minima.toFixed(2)}
                    
                    ______________________________________________________________________________________`;
    }
    print(mensagem);
}

function Calcular_ValorTotal(num1, num2) {
    return num1 + num2
}

function Calcular_ValorParcela(num1, num2) {
    return (num1 / num2)
}

function Renda_Minima_Eh_Valida(num1, num2) {
    return (num1 >= num2)
}

function Sim_lance_entrada(texto) {
    return (texto === `SIM`)
}

function Eh_Possivel_valor_lance(num1, num2) {
    return num1 <= num2 * 0.3 ? true : false
}

function Eh_ReduzirPrazo(texto) {
    return (texto === `REDUZIR PRAZO`);
}

function Calcular_NovoPrazo(num1, num2, num3) {
    let quant_parcela = Math.round(num2 / num1);
    return (num3 - quant_parcela);
}

function Calcular_ValorUltimaParcela(valor_total, prazo_pagamento) {
    let prazo = prazo_pagamento;
    let mensagem = 0;

    while (prazo !== 0) {
        let valor = valor_total / prazo_pagamento;
        mensagem = valor;
        prazo--;
    }

    return mensagem;
}

main();