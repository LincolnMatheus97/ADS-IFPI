import { question } from "readline-sync";

function main() {
    let n = get_Text();

    while (n !== ``) {
        let [m, k] = n.split(` `).map(Number);
        let matriz = [];

        for (let i = 0; i < m; i++) {
            let entradas = get_Text().split(` `).map(Number);
            matriz.push(entradas);
        }

        for (let i = 0; i < m; i++) {
            let linha = ``;

            for (let j = 0; j < k; j++) {
                if (matriz[i][j] === 1) {
                    linha += `9`
                } else {
                    let numb = calcularNumero(matriz, i, j);
                    linha += `${numb}`;
                }
            }
            print(linha);
        }

        n = get_Text();
    }

}

function get_Text() {
    return question();
}

function calcularNumero(matriz, i, j) {
    let n = 0;
    let l = matriz.length - 1;
    let c = matriz[0].length - 1;

    if (i > 0 && matriz[i - 1][j] === 1) {
        n++;
    }
    if (i < l && matriz[i + 1][j] === 1) {
        n++;
    }
    if (j > 0 && matriz[i][j - 1] === 1) {
        n++;
    }
    if (j < c && matriz[i][j + 1] === 1) {
        n++;
    }
    return n;
}

function print(texto) {
    return console.log(texto);
}

main();