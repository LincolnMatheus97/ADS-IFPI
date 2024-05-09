import { question } from "readline-sync";

function main() {
    let t = parseInt(get_Text());

    while (!isNaN(t)) {
        let errou = [];
        let opcoes = [];
        let tt = t;

        for (let i = 0; i < tt; i++) {
            let linha = get_Text();
            while (linha.trim() === "") {
                linha = get_Text();
            }
            opcoes.push(linha.replace(/ /g, '='));
        }

        for (let i = 0; i < tt; i++) {
            let [nome, op, operador] = get_Text().split(` `);
            let str = opcoes[op - 1].split('=');
            let n0 = parseInt(str[0]);
            let n1 = parseInt(str[1]);
            let n2 = parseInt(str[2]);

            if (!numeroValido(n0, n1, n2, operador)) {
                errou.push(nome);
            }
        }

        if (errou.length == tt) {
            print(`None Shall Pass!`);
        } else if (errou.length === 0) {
            print(`You Shall All Pass!`);
        } else {
            print(errou.sort().join(` `));
        }

        opcoes = [];
        errou = 0;
        t = parseInt(get_Text());
    }
}

function get_Text() {
    return question();
}

function numeroValido(n0, n1, n2, operacao) {
    switch (operacao) {
        case '*':
            return n0 * n1 === n2;
        case '+':
            return n0 + n1 === n2;
        case '-':
            return n0 - n1 === n2;
        case 'I':
            return (n0 * n1 !== n2) && (n0 + n1 !== n2) && (n0 - n1 !== n2);
        default:
            return true;
    }
}

function print(texto) {
    return console.log(texto);
}

main();