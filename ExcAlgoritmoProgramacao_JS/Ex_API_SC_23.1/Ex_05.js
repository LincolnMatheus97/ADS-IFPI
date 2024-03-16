import { get_number, get_positive_number, get_text, percentual, print } from "../utils/io_utils.js";

function main() {
    print(`>>>> BALANÇA CALORICA <<<<`);

    const nome = get_text(`Digite Seu Nome: `).toUpperCase();

    let sexo;
    let idade = 0;
    let peso = 0;
    let altura = 0;
    let ritmo_AtvFisica;
    let necessidade_calorica = 0;
    let mensagem;
    let perca_ganho;
    let kilos_perca = 0;
    let kilos_semana = 0.0;
    let semanas = 0;
    let dieta;

    while (Nao_Eh_SexoValido(sexo)) {
        sexo = get_text(`Qual seu sexo ? (Homem ou Mulher): `).toUpperCase();
        if (Nao_Eh_SexoValido(sexo)) {
            print(`Entrada Inválida, Tente Novamente.`);
        }
    }

    while (Nao_Eh_IdadeValida(idade)) {
        idade = get_number(`Qual sua idade: `);
    }

    while (Nao_Eh_PesoValido(peso)) {
        peso = get_number(`Qual seu peso(Kg): `);
    }

    while (Nao_Eh_AlturaValida(altura)) {
        altura = get_number(`Qual sua altura(m): `);
    }

    while (Nao_Eh_AtvFisicaValida(ritmo_AtvFisica)) {
        ritmo_AtvFisica = get_text(`Qual Perfil Atividade Fisica ? (Sendatario, Pouco Ativo, Ativo, Muito Ativo): `).toUpperCase();
        if (Nao_Eh_AtvFisicaValida(ritmo_AtvFisica)) {
            print(`Entrada Inválida, Tente Novamente.`);
        }
    }

    if (Eh_Mulher(sexo)) {
        necessidade_calorica = Calculo_Necessidade(sexo, idade, peso, altura, ritmo_AtvFisica);

    } else {
        necessidade_calorica = Calculo_Necessidade(sexo, idade, peso, altura, ritmo_AtvFisica);

    }

    mensagem = `
    -----------------------------------------------------------------------------------------
    >>>>>>>>>>>>>>>>>>>>>>>>>           FICHA TÉCNICA              >>>>>>>>>>>>>>>>>>>>>>>>>

    ----> Nome :                                ${nome}
    ----> Sexo :                                ${sexo}
    ----> Idade:                                ${idade}
    ----> Peso(Kg):                             ${peso}
    ----> Altura(m):                            ${altura}
    ----> Perfil Atividade Fisíca:              ${ritmo_AtvFisica}
    ________________________________________________________________________________________
        
    Sua Necessidade Calórica Diária é de:       ${necessidade_calorica}. 
        
    ----------------------------------------------------------------------------------------`;

    while (Nao_Eh_PercaGanhoValido(perca_ganho)) {
        perca_ganho = get_text(`Voce deseja Perder ou Ganhar Peso ? ((P) para Perder ou (G) para Ganhar): `).toUpperCase();
        if (Nao_Eh_PercaGanhoValido(perca_ganho)) {
            print(`Entrada Inválida, Tente Novamente.`);
        }
    }

    if (PercaPeso_Positivo(perca_ganho)) {
        while (Nao_Eh_KilosPercaGanhoValido(kilos_perca)) {
            kilos_perca = get_number(`Quantos Kilos voce deseja perder ? `);
        }
        while (Nao_Eh_SemanasValida(semanas)) {
            semanas = get_number(`Voce desejas perder em quantas semanas ? `);
        }

        dieta = Calculo_Ganho_Perca(perca_ganho, kilos_perca, semanas, necessidade_calorica);

        kilos_semana = dieta[4];

        mensagem += `
    
    ----> Você deseja Perder Peso ?             SIM
    _________________________________________________________________________________________
    
    Levando em Consideração que Você vai Consumir ${dieta[0]} Kcal/dia. E Sabendo Baseado na 
    sua Necessidade Calorica Diaria. Podemos formular uma dieta diária em distribuição proporcional, 
    onde:

    ----> Proteínas (40%):                      ${dieta[1]}
    ----> Carboidratos (40%):                   ${dieta[2]}
    ----> Gorduras (20%):                       ${dieta[3]}

    Se Você Manter o Foco, Consegue Perder ${kilos_perca} Kg em ${semanas} Semanas.
    
    ----------------------------------------------------------------------------------------`;

    } else {
        while (Nao_Eh_KilosPercaGanhoValido(kilos_perca)) {
            kilos_perca = get_number(`Quantos Kilos voce deseja ganhar ? `);
        }
        while (Nao_Eh_SemanasValida(semanas)) {
            semanas = get_number(`Voce desejas ganhar em quantas semanas ? `);
        }

        dieta = Calculo_Ganho_Perca(perca_ganho, kilos_perca, semanas, necessidade_calorica);

        kilos_semana = dieta[4];

        mensagem += `
    
    ----> Você deseja Ganhar Peso ?             SIM
    ________________________________________________________________________________________
        
    Levando em Consideração que Você vai Consumir ${dieta[0]} Kcal/dia. E Sabendo Baseado na 
    sua Necessidade Calorica Diaria. Podemos formular uma dieta diária em distribuição proporcional, 
    onde:
    
    ----> Proteínas (40%):                      ${dieta[1]}
    ----> Carboidratos (40%):                   ${dieta[2]}
    ----> Gorduras (20%):                       ${dieta[3]}
    
    Se Você Manter o Foco, Consegue Ganhar ${kilos_perca} Kg em ${semanas} Semanas.
        
    ----------------------------------------------------------------------------------------`

    }

    if (Kilos_Semanas_Eh_1kg(kilos_semana)) {
        mensagem += `
    
    Cuidado, Perder/Ganhar 1kg ou mais por semana pode prejudicar sua saúde ! Tome cuidado !
    
    ----------------------------------------------------------------------------------------`
    }

    print(mensagem);
}

function Nao_Eh_SexoValido(sexo) {
    return !(sexo === `HOMEM` || sexo === `MULHER`);
}

function Nao_Eh_IdadeValida(idade) {
    return !(idade > 0);
}

function Nao_Eh_PesoValido(peso) {
    return !(peso > 0);
}

function Nao_Eh_AlturaValida(altura) {
    return !(altura > 0);
}

function Nao_Eh_AtvFisicaValida(ritmo_AtvFisica) {
    return !(ritmo_AtvFisica === `SEDENTARIO` || ritmo_AtvFisica === `POUCO ATIVO` ||
        ritmo_AtvFisica === `ATIVO` || ritmo_AtvFisica === `MUITO ATIVO`);
}

function Eh_Mulher(sexo) {
    return (sexo === `MULHER`);
}

function Calculo_Necessidade(sexo, idade, peso, altura, ritmo_AtvFisica) {
    let calculo;
    let af = 0.0;

    if (sexo === `MULHER`) {
        if (ritmo_AtvFisica === `SEDENTARIO`) {
            af = 1.00;
        } else if (ritmo_AtvFisica === `POUCO ATIVO`) {
            af = 1.12;
        } else if (ritmo_AtvFisica === `ATIVO`) {
            af = 1.27;
        } else {
            af = 1.45;
        }

        calculo = 354 - (6.91 * idade) + af * (9.36 * peso) + (726 * altura);
    } else {
        if (ritmo_AtvFisica === `SEDENTARIO`) {
            af = 1.00;
        } else if (ritmo_AtvFisica === `POUCO ATIVO`) {
            af = 1.11;
        } else if (ritmo_AtvFisica === `ATIVO`) {
            af = 1.25;
        } else {
            af = 1.48;
        }
        calculo = 662 - (9.53 * idade) + af * (15.91 * peso) + (593.6 * altura);
    }

    return Math.round(calculo);
}

function Nao_Eh_PercaGanhoValido(perca_ganho) {
    return !(perca_ganho == `P` || perca_ganho == `G`)
}

function PercaPeso_Positivo(perca_ganho) {
    return (perca_ganho === `P`);
}

function Nao_Eh_KilosPercaGanhoValido(kilos_perca) {
    return !(kilos_perca > 0);
}

function Nao_Eh_SemanasValida(semanas) {
    return !(semanas > 0);
}

function Calculo_Ganho_Perca(perca_ganho, kilos_perca, semanas, necessidade_calorica) {
    let total_kcal = 0;
    let kcal_semanais = 0.0;
    let kcal_diarias = 0.0;
    let dieta = 0.0;
    let proteina = 0.0;
    let carboidratos = 0.0;
    let gorduras = 0.0;
    let kilos_smn = 0.0;

    if (perca_ganho === `P`) {
        total_kcal = kilos_perca * 7700;
        kcal_semanais = total_kcal / semanas;
        kcal_diarias = kcal_semanais / 7;
        dieta = (necessidade_calorica - kcal_diarias);

        proteina = percentual(dieta, 40);
        carboidratos = percentual(dieta, 40);
        gorduras = percentual(dieta, 20);

        kilos_smn = semanas / kilos_perca;

    } else {
        total_kcal = kilos_perca * 7700;
        kcal_semanais = total_kcal / semanas;
        kcal_diarias = kcal_semanais / 7;
        dieta = (necessidade_calorica + kcal_diarias);

        proteina = percentual(dieta, 40);
        carboidratos = percentual(dieta, 40);
        gorduras = percentual(dieta, 20);

        kilos_smn = semanas / kilos_perca;
    }

    return [Math.round(kcal_diarias), Math.round(proteina), Math.round(carboidratos), Math.round(gorduras), kilos_smn]
}

function Kilos_Semanas_Eh_1kg(kilos_semana) {
    if (kilos_semana >= 1) {
        return false;
    } else {
        return true;
    }
}

main();