import { question } from "readline-sync";

function main() {
    let n = get_Number();

    while(n !== 0) {
        let matriz = [];

        if(n >= 0 && n <= 100) {
            for (let i = 0; i < n; i++) {
                let linha = [];
    
                for (let j = 0; j < n; j++) {
                    let valor = Math.min(i, j, n - i - 1, n - j - 1) + 1;
                    linha.push(valor);
        
                }
                matriz.push(linha);
        
            }
            for (let i = 0; i < matriz.length; i++) {
                let linha = '';
                for (let j = 0; j < matriz[i].length; j++) {
                    linha += matriz[i][j].toString().padStart(3, ' ') + (j === matriz[i].length - 1 ? '' : ' ');
                }
                print(linha);
            }
            print('');
            matriz = [];

        }
        n = get_Number();

    }
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();