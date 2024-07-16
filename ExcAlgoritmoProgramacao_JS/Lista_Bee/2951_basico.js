import { question } from "readline-sync";

function main() {
    let [runas_Existentes, amizade_Necessaria] = get_Text().split(` `);
    let lista_Runas = [];
    let lista_NivelRunas = [];

    for (let i = 0; i < runas_Existentes; i++) {
        let [sigla_Runa, nivelRuna] = get_Text().split(` `);
        lista_Runas.push(sigla_Runa);
        lista_NivelRunas.push(parseInt(nivelRuna));

    }

    let quantidade_Runas = get_Number();
    let runas_Selecionadas = get_Text().split(` `);
    let somatario_NivelRunas = 0;

    for (let j = 0; j < runas_Selecionadas.length; j++) {
        let indice_RunaSelecionada = lista_Runas.indexOf(runas_Selecionadas[j]);
        if (indice_RunaSelecionada !== -1) {
            somatario_NivelRunas += lista_NivelRunas[indice_RunaSelecionada];

        }

    }

    print(somatario_NivelRunas);
    if (somatario_NivelRunas >= amizade_Necessaria) {
        print(`You shall pass!`);

    } else {
        print(`My precioooous`);

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