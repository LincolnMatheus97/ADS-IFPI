import { question } from "readline-sync";

function main() {
    let l = get_Text();

    while (l !== null && l !== ``) {
        let num = parseInt(l);
        let maiorNumero = 0;

        if (num >= 1 && num <= 500) {
            let num_2 = get_Text().split(` `);
            for (let i = 0; i < num_2.length; i++) {
                let valor = parseInt(num_2[i]);
                if (valor > maiorNumero) {
                    maiorNumero = valor;

                }
            }
            maiorNumero < 10 ? print(`1`) : maiorNumero < 20 ? print(`2`) : print(`3`);
        }

        l = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();