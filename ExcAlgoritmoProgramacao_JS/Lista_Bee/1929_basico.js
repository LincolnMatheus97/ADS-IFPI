import { question } from "readline-sync";

function main() {
    const lados = get_Text().split(` `).map(Number);
    let triangulo = false;
    for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
            for (let k = j + 1; k < 4; k++) {
                if (lados[i] + lados[j] > lados[k] &&
                    lados[i] + lados[k] > lados[j] &&
                    lados[j] + lados[k] > lados[i]) {
                    triangulo = true;
                }
            }
        }
    }

    if (triangulo === true) {
        print(`S`);
    } else {
        print(`N`);
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();