import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos !== 0) {
        let strings = [];
        for (let i = 0; i < quantidadeCasos; i++) {
            strings.push(get_Text());
        }

        strings.sort((a, b) => a.length - b.length);
        let colecao = new Array(quantidadeCasos).fill(1);
        let sequenciaMaxima = 1;

        for (let i = 1; i < quantidadeCasos; i++) {
            for (let j = 0; j < i; j++) {
                if(strings[i].includes(strings[j])){
                    colecao[i] = Math.max(colecao[i], colecao[j] + 1);
                    
                }
            }
            sequenciaMaxima = Math.max(sequenciaMaxima, colecao[i]);
        }
        
        print(sequenciaMaxima);
        quantidadeCasos = get_Number();

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