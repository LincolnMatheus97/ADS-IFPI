import { question } from "readline-sync";

function main() {
    const [distanciaPalantirs, raioPalantirSauron, raioPalantirSaruman] = get_Text().split(` `).map(Number);
    const imc = distanciaPalantirs / (raioPalantirSauron + raioPalantirSaruman);
    print(imc.toFixed(2));

}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();