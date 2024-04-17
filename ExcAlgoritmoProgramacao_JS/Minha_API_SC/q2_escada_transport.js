import { get_number, get_text, porcentagem, print } from "./utils.js";

function main() {
    print(`\n------   PERCA PESO  ------`);
    const peso = get_number(`\nDigite seu peso: `);
    const sexo = get_text(`\nVoce e Homem(H) ou Mulher(M): `).toUpperCase();
    const percaPeso = get_number(`\nDigite quantos quilos voce deseja perder: `);
    const tempoTreino = get_number(`\nDigite quantas horas voce deseja treinar por dia: `);
    const umKgEmCalorias = 7_000;
    let MEDIA_POR_MINUTO_CALORIAS_TRANSPORT = 0;
    let MEDIA_POR_MINUTO_CALORIAS_ESCADA = 0;

    if (sexo === `H` || sexo === `M`) {
        if (sexo === `H`) {
            MEDIA_POR_MINUTO_CALORIAS_TRANSPORT = 20;
            MEDIA_POR_MINUTO_CALORIAS_ESCADA = 14.29;

        } else {
            MEDIA_POR_MINUTO_CALORIAS_TRANSPORT = 16.67;
            MEDIA_POR_MINUTO_CALORIAS_ESCADA = 12.5;

        }

        let percaPesoEmCalorias = percaPeso * umKgEmCalorias;
        let tempoTotalTreino = tempoTreino * 60;

        let tempoParaEscada = tempoTotalTreino - get_number(`\nQuantos minutos voce deseja fazer de Transport ? `);
        let tempoParaTransport = tempoTotalTreino - tempoParaEscada;

        let caloriasPerdidasTransport = tempoParaTransport * MEDIA_POR_MINUTO_CALORIAS_TRANSPORT;
        let caloriasPerdidasEscada = tempoParaEscada * MEDIA_POR_MINUTO_CALORIAS_ESCADA;
        let percaPesoEmCaloriasPorDia = caloriasPerdidasTransport + caloriasPerdidasEscada;
        let diasParaPerder = 0;

        while (percaPesoEmCaloriasPorDia <= percaPesoEmCalorias) {
            caloriasPerdidasTransport += tempoParaTransport * MEDIA_POR_MINUTO_CALORIAS_TRANSPORT;
            caloriasPerdidasEscada += tempoParaEscada * MEDIA_POR_MINUTO_CALORIAS_ESCADA;
            percaPesoEmCaloriasPorDia += caloriasPerdidasTransport + caloriasPerdidasEscada;

            diasParaPerder++;
        }

        let semanasParaPerder = ``;
        if (diasParaPerder < 7) {
            semanasParaPerder = `${diasParaPerder} dias`;
        } else {
            semanasParaPerder = `${Math.floor(diasParaPerder / 7)} semanas`;
        };

        const PROPORCAO_TREINO_TRANSPORT = porcentagem(tempoParaTransport, tempoTotalTreino);
        const PROPORCAO_TREINO_ESCADA = porcentagem(tempoParaEscada, tempoTotalTreino);

        print(`
        ---------------------------------------------------------------------------------
        * Bem Vindo ao Perca Peso ! =)
        
        Você possui ${peso}kg, e deseja perder ${percaPeso}kg. Seu sexo é ${sexo}, e deseja treinar
        ${tempoTreino} horas por dia, e sabendo que deseja treinar ${tempoParaTransport} minutos 
        no Transport aonde isso representa ${PROPORCAO_TREINO_TRANSPORT.toFixed(2)}% do seu tempo 
        de treino e ficando com ${tempoParaEscada} minutos na Escada, representando ${PROPORCAO_TREINO_ESCADA.toFixed(2)}%
        do seu tempo de treino, você perderá a quantidade de peso desejado em ${semanasParaPerder} .
        
        ---------------------------------------------------------------------------------`);

    } else {
        print(`Digite um sexo válido.`);

    }

}

main();