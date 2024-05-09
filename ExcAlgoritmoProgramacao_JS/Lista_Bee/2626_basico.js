import { question } from "readline-sync";

function main() {
    let a = get_Text();

    while (a !== ``) {
        let [dodo, leo, peper] = a.split(` `);

        if ((dodo === `pedra` && leo === `tesoura` && peper === `tesoura`) ||
            (dodo === `papel` && leo === `pedra` && peper === `pedra`) ||
            (dodo === `tesoura` && leo === `papel` && peper === `papel`)) {
            print(`Os atributos dos monstros vao ser inteligencia, sabedoria...`);

        } else if ((leo === `pedra` && dodo === `tesoura` && peper === `tesoura`) ||
            (leo === `papel` && dodo === `pedra` && peper === `pedra`) ||
            (leo === `tesoura` && dodo === `papel` && peper === `papel`)) {
            print(`Iron Maiden's gonna get you, no matter how far!`);

        } else if ((peper === `pedra` && dodo === `tesoura` && leo === `tesoura`) ||
            (peper === `papel` && dodo === `pedra` && leo === `pedra`) ||
            (peper === `tesoura` && dodo === `papel` && leo === `papel`)) {
            print(`Urano perdeu algo muito precioso...`);

        } else {
            print(`Putz vei, o Leo ta demorando muito pra jogar...`);
        }

        a = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();