import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos != 0) {
        let [n, m] = get_Text().split(` `).map(Number);
        let resultante = n ** m;

        let quantidadeDigitos = determinarDigitos(resultante);
        print(quantidadeDigitos);

        quantidadeCasos--;
        
    }

}

function get_Number() {
    return Number(question());
    
}

function get_Text() {
    return question();

}

function determinarDigitos(valor) {
    if (valor === 0) {
        return 1;
    }
    return Math.floor(Math.log10(valor)) + 1;

}

function print(texto) {
    return console.log(texto);

}

main();