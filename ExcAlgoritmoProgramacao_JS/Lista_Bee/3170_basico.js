import { question } from "readline-sync";

function main() {
    const quantidadeBolinhas = get_Number();
    const quantidadeGalhos = get_Number();
    let quantidadeFaltando = 0;

    if (!(quantidadeGalhos % 2 === 0)) {
        quantidadeFaltando = Math.floor(quantidadeGalhos / 2);
        if (quantidadeBolinhas >= quantidadeFaltando) {
            print(`Amelia tem todas bolinhas!`);

        } else {
            quantidadeFaltando = Math.abs(quantidadeFaltando - quantidadeBolinhas);
            print(`Faltam ${quantidadeFaltando} bolinha(s)`);

        }

    } else {
        quantidadeFaltando = ((quantidadeGalhos / 2));
        if (quantidadeBolinhas >= quantidadeFaltando) {
            print(`Amelia tem todas bolinhas!`);

        } else {
            quantidadeFaltando = Math.abs(quantidadeFaltando - quantidadeBolinhas);
            print(`Faltam ${quantidadeFaltando} bolinha(s)`);

        }

    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();