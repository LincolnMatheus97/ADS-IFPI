import { question } from "readline-sync";

function main() {
    let n = get_Text();

    while (n !== ``) {
        let [m, l] = get_Text().split(` `).map(Number);
        let cartasM = [];
        let cartasL = [];

        for (let i = 0; i < m; i++) {
            let cartaM = get_Text().split(` `).map(Number);
            cartasM.push(cartaM);
        }
        for (let i = 0; i < l; i++) {
            let cartaL = get_Text().split(` `).map(Number);
            cartasL.push(cartaL);
        }

        let [marcosEscolha, leoEscolha] = get_Text().split(` `).map(Number);
        let attr = get_Number();

        if (cartasM[marcosEscolha - 1][attr - 1] > cartasL[leoEscolha - 1][attr - 1]) {
            print(`Marcos`);
        } else if (cartasL[leoEscolha - 1][attr - 1] > cartasM[marcosEscolha - 1][attr - 1]) {
            print(`Leonardo`);
        } else {
            print(`Empate`);
        }

        n = get_Text();
        
    }
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