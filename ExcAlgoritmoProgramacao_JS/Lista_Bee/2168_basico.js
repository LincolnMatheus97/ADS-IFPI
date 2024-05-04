import { question } from "readline-sync";

function main() {
    const N = get_Number();
    let matriz = [];

    for (let i = 0; i < N + 1; i++) {
        let numeros = get_Text().split(` `).map(Number);
        matriz.push(numeros);
    }

    let status = ``;

    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
        let quadraSegura = false;
        
        if (matriz[i][j] + matriz[i][j + 1] + matriz[i + 1][j] + matriz[i + 1][j + 1] >= 2) {
            quadraSegura = true;
        }
        status += quadraSegura ? 'S' : 'U';
        
        }
        if (i < N - 1) status += '\n';
    }
    print(status);

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