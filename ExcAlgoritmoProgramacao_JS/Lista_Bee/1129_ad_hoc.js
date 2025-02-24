import { question } from "readline-sync";

function main() {
    let tons = [];

    while(true) {
        let quantida_Casos = get_Number();
        if (quantida_Casos === 0) break;
        while (quantida_Casos > 0) {
            let valores = get_Text().split(" ");
            for (let i = 0; i < 5; i++) {
                tons.push(parseInt(valores[i]));
            }
            calcularAlternativa(tons);
            tons = [];
            quantida_Casos--;
        }
    }
}

function calcularAlternativa(tons) {
    let marcada = -1;
    let marcadas = 0;

    for (let i = 0; i < 5; i++) {
        if (tons[i] <= 127) {
            marcada = i;
            marcadas++;
        }
    }
    if (marcadas === 1) {
        print(String.fromCharCode(65 + marcada));
    } else {
        print("*");
    }
}

function print(texto) {
    return console.log(texto);
}

function get_Number() {
    return parseInt(question());
}

function get_Text() {
    return question();
}

main();