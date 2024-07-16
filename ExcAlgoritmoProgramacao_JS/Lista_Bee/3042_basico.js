import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    while (quantidade_Casos > 0) {
        let toque_Tela = 2;
        let contador = 0;

        for (let i = 0; i < quantidade_Casos; i++) {
            let linha = get_Text();
            if (linha === `0 1 1`) {
                if (toque_Tela !== 1) {
                    contador += Math.abs(toque_Tela - 1);
                    toque_Tela = 1;

                }

            } else if (linha === `1 0 1`) {
                if (toque_Tela !== 2) {
                    contador += Math.abs(toque_Tela - 2);
                    toque_Tela = 2;

                }

            } else if (linha === `1 1 0`) {
                if (toque_Tela !== 3) {
                    contador += Math.abs(toque_Tela - 3);
                    toque_Tela = 3;

                }

            }

        }
        print(contador);
        quantidade_Casos = get_Number();

    }
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