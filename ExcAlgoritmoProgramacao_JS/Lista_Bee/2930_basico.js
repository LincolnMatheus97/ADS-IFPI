import { question } from "readline-sync";

function main() {
    let [dataEntregueDeVerificacao, dataFinalDeVerificacao] = get_Text().split(` `).map(Number);
    if (dataFinalDeVerificacao >= 24 || dataEntregueDeVerificacao > dataFinalDeVerificacao) {
        print(`Eu odeio a professora!`);

    } else if (dataEntregueDeVerificacao <= dataFinalDeVerificacao - 3) {
        print(`Muito bem! Apresenta antes do Natal!`);

    } else {
        print(`Parece o trabalho do meu filho!`);
        dataEntregueDeVerificacao += 2;
        if (dataEntregueDeVerificacao < 24) {
            print(`TCC Apresentado!`);

        } else {
            print(`Fail! Entao eh nataaaaal!`);

        }

    }

}

function get_Text() {
    return question();

}

function print(texto) {
    return console.log(texto);
}

main();