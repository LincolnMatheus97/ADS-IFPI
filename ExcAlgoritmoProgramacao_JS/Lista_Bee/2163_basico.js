import { question } from "readline-sync";

function main() {
    let matriz = [];
    let [n, m] = get_Text().split(` `).map(Number);
    let linha = 0;
    let coluna = 0;

    for (let i = 0; i < n; i++) {
        let numeros = get_Text().split(` `).map(Number);
        matriz.push(numeros);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matriz[i][j] === 42) {
                if (
                    i > 0 && i < n - 1 &&
                    j > 0 && j < m - 1 &&
                    matriz[i - 1][j - 1] === 7 &&
                    matriz[i - 1][j] === 7 &&
                    matriz[i - 1][j + 1] === 7 &&
                    matriz[i][j - 1] === 7 &&
                    matriz[i][j + 1] === 7 &&
                    matriz[i + 1][j - 1] === 7 &&
                    matriz[i + 1][j] === 7 &&
                    matriz[i + 1][j + 1] === 7
                ) {
                    linha = i + 1;
                    coluna = j + 1;
                    break;
                }
            }
        }
        if (linha !== 0 && coluna !== 0) break;
    }

    print(`${linha} ${coluna}`);

}

function get_Text() {
    return question();
}

function print(texto) {
    console.log(texto);
}

main();