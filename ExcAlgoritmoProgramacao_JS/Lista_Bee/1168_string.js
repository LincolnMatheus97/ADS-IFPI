import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let numeros = get_Text().split(``);
        let leds = 0;

        for (let numero of numeros) {
            if (numero === `1`) {
                leds += 2;
            } else if (numero === `7`) {
                leds += 3;
            } else if (numero === `4`) {
                leds += 4;
            } else if (numero === `8`) {
                leds += 7;
            } else if (numero === `2` || numero === `3` || numero === `5`) {
                leds += 5;
            } else {
                leds += 6;
            }
        }

        print(`${leds} leds`);
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