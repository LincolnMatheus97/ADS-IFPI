import { question } from "readline-sync";

function main() {
    const idadeDonaMonica = get_Number(), idadeFilho_1 = get_Number(), idadeFilho_2 = get_Number();
    const idadeFilho_3 = idadeDonaMonica - (idadeFilho_1 + idadeFilho_2);
    let idadeFilhoMaisVelho = 0;
    if (idadeFilho_1 > idadeFilho_2 && idadeFilho_1 > idadeFilho_3) {
        idadeFilhoMaisVelho = idadeFilho_1;

    } else if (idadeFilho_2 > idadeFilho_1 && idadeFilho_2 > idadeFilho_3) {
        idadeFilhoMaisVelho = idadeFilho_2;

    } else {
        idadeFilhoMaisVelho = idadeFilho_3;

    }

    print(idadeFilhoMaisVelho);

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();