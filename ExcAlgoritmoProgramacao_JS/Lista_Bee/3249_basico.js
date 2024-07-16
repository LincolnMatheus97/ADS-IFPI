import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();
    let quantidade_Vitorias = 0;

    while (quantidade_Casos !== 0) {
        let sequencia_Golpes = get_Text();
        let vitoria = true;
        for (let i = 0; i < sequencia_Golpes.length; i++) {
            if (sequencia_Golpes[i] === `C` && sequencia_Golpes[i + 1] === `D`) {
                vitoria = false;
                break;

            }

        }

        if (vitoria) {
            quantidade_Vitorias++;

        }

        quantidade_Casos--;

    }

    print(quantidade_Vitorias);

}

function get_Text() {
    return question();

}

function get_Number() {
    return Number(question());

}

function print(texto) {
    return console.log(texto);

}

main();