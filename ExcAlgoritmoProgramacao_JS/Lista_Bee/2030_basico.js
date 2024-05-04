import { question } from "readline-sync";

function main() {
    const N = get_Number();

    for (let i = 0; i < N; i++) {
        let escolha_1 = get_Text();
        let escolha_2 = get_Text();
        let ganhador = ``;

        if (escolha_1 === `ataque`) {
            if (escolha_2 === `pedra`) {
                ganhador = `Jogador 1 venceu`;
            } else if (escolha_2 === `papel`) {
                ganhador = `Jogador 1 venceu`;
            } else {
                ganhador = `Aniquilacao mutua`;
            }
        } else if (escolha_1 === `pedra`) {
            if (escolha_2 === `pedra`) {
                ganhador = `Sem ganhador`;
            } else if (escolha_2 === `papel`) {
                ganhador = `Jogador 1 venceu`;
            } else {
                ganhador = `Jogador 2 venceu`;
            }
        } else if (escolha_1 === `papel`) {
            if (escolha_2 === `pedra`) {
                ganhador = `Jogador 2 venceu`;
            } else if (escolha_2 === `papel`) {
                ganhador = `Ambos venceram`;
            } else {
                ganhador = `Jogador 2 venceu`;
            }
        }
        print(ganhador);
        ganhador = ``;
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();