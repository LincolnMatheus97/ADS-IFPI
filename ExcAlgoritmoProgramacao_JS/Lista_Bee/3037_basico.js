import { question } from "readline-sync";

function main() {
    let quantidadeCasos = get_Number();

    while (quantidadeCasos !== 0) {
        let pontuacaoJoao = 0, pontuacaoMaria = 0;

        for (let i = 0; i < 3; i++) {
            let [pontuacao, distancia] = get_Text().split(` `).map(Number);
            pontuacaoJoao += pontuacao * distancia;

        }

        for (let i = 0; i < 3; i++) {
            let [pontuacao, distancia] = get_Text().split(` `).map(Number);
            pontuacaoMaria += pontuacao * distancia;

        }

        if (pontuacaoJoao > pontuacaoMaria) {
            print(`JOAO`);

        } else {
            print(`MARIA`);

        }

        quantidadeCasos--;

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