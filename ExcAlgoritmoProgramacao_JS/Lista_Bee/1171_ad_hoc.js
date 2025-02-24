import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    let lista = [];
    for (let i = 0; i < quantidadeCasos; i++) {
        let valor = get_Number();
        lista.push(valor);
    }
    
    mostrarFrequencia(lista);

}

function mostrarFrequencia(lista) {
    let listaOrdenada = lista.sort((a, b) => a - b);
    let contador = 1;

    for (let k = 0; k < listaOrdenada.length; k++) {
        if (listaOrdenada[k] === listaOrdenada[k + 1]) {
            contador++;
        } else {
            print(`${listaOrdenada[k]} aparece ${contador} vez(es)`);
            contador = 1;
        }
    }
}

function print(texto) {
    return console.log(texto);
}

function get_Number() {
    return parseInt(question());
}

main();