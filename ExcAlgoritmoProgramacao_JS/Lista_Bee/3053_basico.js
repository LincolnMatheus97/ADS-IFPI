import { question } from "readline-sync";

function main() {
    let quantidadeCaso = get_Number();
    let moeda = get_Text().toUpperCase();

    while (quantidadeCaso !== 0) {
        let movimentoDaMoeda = get_Number();
        if (movimentoDaMoeda === 1) {
            if(moeda === `A`) {
                moeda = `B`;

            } else if (moeda === `B`){
                moeda = `A`;

            }

        }else if (movimentoDaMoeda === 2) {
            if(moeda === `B`) {
                moeda = `C`;

            }else if (moeda === `C`){
                moeda = `B`;

            }

        }else {
            if(moeda === `C`) {
                moeda = `A`;

            }else if (moeda === `A`){
                moeda = `C`

            }

        }

        quantidadeCaso--;

    }

    print(moeda);

}

function get_Text() {
    return question();
}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();