import { question } from "readline-sync";

function main() {
    let valorTotal = getNumber();
    let parcelas = getNumber();
    let valorParcela = []

    for (let i = 0; i < parcelas; i++) {
        valorParcela.push(Math.floor(valorTotal/parcelas));
    } 

    if ((valorTotal % parcelas) != 0) {
        let resto = valorTotal % parcelas;

        let parcelasAdd = parcelas;

        while ((resto % parcelasAdd) != 0) {
            parcelasAdd--;
        }

        for (let i = 0; i < parcelasAdd; i++) {
            valorParcela[i] = valorParcela[i] + (resto / parcelasAdd);
        }
    }

    for (let i = 0; i < parcelas; i++) {
        print(valorParcela[i]);
    }    
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();