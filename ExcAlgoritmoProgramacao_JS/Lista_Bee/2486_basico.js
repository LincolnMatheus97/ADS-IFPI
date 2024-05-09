import { question } from "readline-sync";

function main() {
    const tabela = [`suco`, 120, `morango`, 85, `mamao`, 85, `goiaba`, 70, `manga`, 56, `laranja`, 50, `brocolis`, 34];
    let t = get_Number();

    while (t !== 0) {
        let quantidadeVitamina = 0;

        for (let i = 0; i < t; i++) {
            let [quantidade, alimento] = get_Text().split(` `);
            let index = tabela.indexOf(alimento);
            if (index !== -1 && index % 2 === 0) {
                let quantidadeN = parseInt(quantidade);
                quantidadeVitamina += (quantidadeN * tabela[index + 1]);
            }
        }
        if (quantidadeVitamina >= 110 && quantidadeVitamina <= 130) {
            print(`${quantidadeVitamina} mg`);
        } else if (quantidadeVitamina > 130) {
            print(`Menos ${quantidadeVitamina - 130} mg`);
        } else {
            print(`Mais ${110 - quantidadeVitamina} mg`);
        }

        t = get_Number();
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();