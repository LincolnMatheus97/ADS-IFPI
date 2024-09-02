import { question } from "readline-sync";

function main() {
    let quantidade_Casos = get_Number();

    for (let i = 0; i < quantidade_Casos; i++) {
        let numero_Alunos = get_Number();
        let nome_Aluno = get_Text().split(` `);
        let frequencias = get_Text().split(` `);

        let frequencias_S_Ausencias = map(frequencias, (indice, elemento) => elemento.split(``).filter((caracter) => caracter !== `M`));
        let numero_Presencas = map(frequencias_S_Ausencias, (indice, elemento) => elemento.filter((caracter) => caracter === `P`).length / elemento.length);

        let alunos_Frequencias = map(nome_Aluno, (indice, nome) => [nome, numero_Presencas[indice]]);
        let alunos_Baixa_Frequencias = map(alunos_Frequencias, (indice, aluno) => {
            if (aluno[1] < 0.75) {
                return aluno[0];
            } else {
                return null;
            }
        }).filter((nome) => nome !== null);

        print(alunos_Baixa_Frequencias.join(` `));
    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function map(lista, transformadora) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_Lista.push(transformadora(i, lista[i]));
    }

    return nova_Lista;
}

function print(texto) {
    return console.log(texto);
}

main();