import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let dieta = get_Text().trim();
        let cafe_Manha = get_Text().trim();
        let almoco = get_Text().trim();

        let resultado = verficarDieta(dieta, cafe_Manha, almoco);
        print(resultado);
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function verficarDieta(dieta, cafe, almoco) {
    let consumido_Total = cafe + almoco;

    let dieta_Set = new Set(dieta);
    let consumido_Set = new Set();

    for (let alimento of consumido_Total) {
        if (consumido_Set.has(alimento) || !dieta_Set.has(alimento)) {
            return `CHEATER`;
        }
        consumido_Set.add(alimento);
    }

    let jantar = dieta.split(``).filter(alimento => !consumido_Set.has(alimento));
    return jantar.sort().join(``);
}

function print(texto) {
    return console.log(texto);
}

main();