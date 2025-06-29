import { question } from "readline-sync";

function main() {
    const bCorte = getNumber();
    const tCorte = getNumber();

    const areaNota = 11200;
    const areaCorte = ((bCorte + tCorte) * 70) / 2;
    const areaRestante = areaNota - areaCorte;

    if (areaCorte > areaRestante) {
        print("1");
    } else if (areaCorte < areaRestante) {
        print("2");
    } else {
        print("0");
    }
}

function getNumber() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();