import { question } from "readline-sync";

function main() {
    let N1 = get_Text();
    let N2 = get_Text();
    let casos = 0;
    
    while (N1 !== `` && N2 !== ``) {
        let qtdSubsequencias = 0;
        let posicao = -1
        let index = 0;

        while ((index = N2.indexOf(N1, index)) !== -1) {
            qtdSubsequencias++;
            posicao = index;
            index++
        }
        casos++;

        print(`Caso #${casos}:`)
        print(`Qtd.Subsequencias: ${qtdSubsequencias}`);
        print(`Pos: ${posicao + 1}`);
        print(``);

        N1 = get_Text();
        N2 = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();