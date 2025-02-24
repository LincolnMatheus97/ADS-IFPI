import { question } from "readline-sync";

function main() {
    let [h1, m1, h2, m2] = get_Text().split(` `).map(Number);

    while (h1 !== 0 || m1 !== 0 || h2 !== 0 || m2 !== 0) {
        let minutosInicias = (h1 * 60) + m1;
        let minutosFinais = (h2 * 60) + m2;

        let minutosTotais;

        if (minutosFinais >= minutosInicias) {
            minutosTotais = minutosFinais - minutosInicias;
        } else {
            minutosTotais = (1440 - minutosInicias) + minutosFinais;
        }

        print(minutosTotais);

        [h1, m1, h2, m2] = get_Text().split(` `).map(Number);
    }
}

function print(texto) {
    return console.log(texto);
}

function get_Text() {
    return question();
}

main();