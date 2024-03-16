import { get_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    const nome_professor = get_text(`Digite seu nome: `).toUpperCase();
    const horas_semanais = get_number(`Quantas aulas semanais voce ministra: `);
    const qualificacao = get_text(`Digite qual sua Qualificacao, (Especializacao, Mestrado ou Doutorado): `).toUpperCase();
    const experiencia = get_number(`Digite o seu tempo (meses) de experiencia como docente: `);
    const quantidade_filho = get_number(`Quantos filhos voce tem menores de 6 anos: `);
    const valor_planosaude = get_number(`Quanto custa seu plano de saude: `);

    let valor_hora_aula = Calcular_hora_aula(qualificacao, experiencia);
    let salario_base_semanal = Calcular_Salario_Semanal(valor_hora_aula, horas_semanais);
    let salario_base_mensal = Calcular_Salario_Mensal(salario_base_semanal);
    let auxilio_creche = Calcular_Beneficio_Creche(quantidade_filho);
    let auxilio_plano_saude = Calcular_Beneficio_PlanoSaude(valor_planosaude);
    let auxilio_combustivel = Calcular_Beneficios_Combustivel(horas_semanais);
    let salario_bruto = Calcular_Salario_Bruto(salario_base_mensal, auxilio_creche, auxilio_plano_saude, auxilio_combustivel);

    let previdencia_social = Calcular_Previdencia(salario_bruto);
    let imposto_renda = Calcular_ImpostoRenda(salario_bruto, previdencia_social);
    let salario_liquido = Calcular_Salario_Liquido(salario_bruto, previdencia_social, imposto_renda);

    print(`
    ____________________________________________________________________________________________________
    <><><><><><><><><><><><                  CONTRACHEQUE                       <><><><><><><><><><><><>
    
    # DADOS DO FUNCIONÁRIO:
    ---> Nome Funcionário:  -------------------------------------------         ${nome_professor}
    ---> Horas Semanas Ministradas: -----------------------------------         ${horas_semanais} hora/semanal
    ---> Qualificação (E, M ou D):  -----------------------------------         ${qualificacao}
    ---> Tempo Experiência de Docente:  -------------------------------         ${experiencia} meses
    ---> Quantidade Filhos menores de 6 anos:   -----------------------         ${quantidade_filho} filho(s)
    ---> Valor Plano de Saúde:  ---------------------------------------         R$:${valor_planosaude}
    
    ____________________________________________________________________________________________________
    
    # DADOS DO PAGAMENTO:
    ---> Valor base Hora/Aula na Universidade:  -----------------------         R$:30.00
    ---> Valor Hora/Professor:  ---------------------------------------         R$:${valor_hora_aula.toFixed(2)}
    ---> Salário Base Semanal:  ---------------------------------------         R$:${salario_base_semanal.toFixed(2)}
    
    # GANHOS (+):
    ---> Salário Base Mensal:   ---------------------------------------         R$:${salario_base_mensal.toFixed(2)}
    ---> Auxílio Creche:    -------------------------------------------         R$:${auxilio_creche.toFixed(2)}
    ---> Ressarcimento Saúde:   ---------------------------------------         R$:${auxilio_plano_saude.toFixed(2)}
    ---> Auxílio Combustível:   ---------------------------------------         R$:${auxilio_combustivel.toFixed(2)}
    ---> Salário Bruto: -----------------------------------------------         R$:${salario_bruto.toFixed(2)}
    
    # DESCONTOS (-):
    ---> Previdência:   -----------------------------------------------         R$:${previdencia_social.toFixed(2)}
    ---> Imposto de Renda:  -------------------------------------------         R$:${imposto_renda.toFixed(2)}
    ---> Descontos Totais:  -------------------------------------------         R$:${(previdencia_social + imposto_renda).toFixed(2)}
    
    # SALÁRIO LIQUÍDO (GANHOS - DESCONTOS):
    ---> Salário Liquído:   -------------------------------------------         R$:${salario_liquido.toFixed(2)}
    
    ____________________________________________________________________________________________________`);
}

function Calcular_hora_aula(texto, numero) {
    const valor_base = 30;
    let percentil_qualificacao = 0;
    let meses_experiencia = numero - (numero % 7);
    let percentil_experiencia = 0;

    while (meses_experiencia >= 7) {
        meses_experiencia -= 7;
        percentil_experiencia += 5;
    }

    percentil_qualificacao = texto === `ESPECIALIZACAO` ? 20 : texto === `MESTRADO` ? 30 : 50;

    return (valor_base + percentual(valor_base, percentil_qualificacao) + percentual(valor_base, percentil_experiencia));

}

function Calcular_Salario_Semanal(num1, num2) {
    return (num1 * num2);
}

function Calcular_Salario_Mensal(num) {
    return (4.5 * num);
}

function Calcular_Beneficio_Creche(num) {
    return (num * 700);
}

function Calcular_Beneficio_PlanoSaude(num) {
    let desconto = percentual(num, 50);

    if (desconto > 500) {
        desconto = 500;
    }

    return (num - desconto);
}

function Calcular_Beneficios_Combustivel(num) {
    let combutivel_gasto = num - (num % 8);
    let bonus_combustivel = 0;

    while (combutivel_gasto >= 8) {
        combutivel_gasto -= 8;
        bonus_combustivel += 30;
    }

    return bonus_combustivel;
}

function Calcular_Salario_Bruto(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4);
}

function Calcular_Previdencia(num) {
    let percentil = 0;

    percentil = num <= 1302.00 ? 7.5 : num <= 2500.00 ? 9 : num <= 3900.00 ? 12 : num <= 7500.00 ? 14 : 16;

    return (percentual(num, percentil));
}

function Calcular_ImpostoRenda(num1, num2) {
    let salario = num1 - num2;
    let percentil = 0;

    percentil = salario <= 5000 ? 0 : 27.5;

    return (percentual(salario, percentil));
}

function Calcular_Salario_Liquido(num1, num2, num3) {
    return (num1 - num2 - num3);
}

main();