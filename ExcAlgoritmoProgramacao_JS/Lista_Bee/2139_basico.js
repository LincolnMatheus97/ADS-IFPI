import { question } from "readline-sync";

function main() {
    let entradas = get_Text();

    while (entradas !== ``) {
        let [mes, dias] = entradas.split(` `).map(Number);
        let diaDeNatal = 360;
        let totalDias = 0;

        for (let i = 1; i < mes ; i++) {
            const diasPorMes = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            totalDias += diasPorMes[i];

        }
        let diasFaltando = diaDeNatal - (totalDias + dias);

        if (diasFaltando === 0) {
            print(`E natal!`);
        } else if (diasFaltando === 1) {
            print(`E vespera de natal!`);
        } else if (diasFaltando < 0) {
            print(`Ja passou!`);
        } else {
            print(`Faltam ${diasFaltando} dias para o natal!`);
        }
        entradas = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();