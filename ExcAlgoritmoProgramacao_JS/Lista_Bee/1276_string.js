import { question } from "readline-sync";

function main() {
    while (true) {
        let casos = get_Text();

        if (casos === ``) {
            print(``);
            casos = get_Text();
            continue;
        }

        if (casos === undefined) {
            break;
        }

        let faixa = casos.split(``).filter((caracter) => caracter.trim() !== ``);
        
        faixa.sort();

        let faixas = reduce(faixa, (acc, valorAtual) => {
            let ultimo_Grupo = acc[acc.length - 1];

            if (!ultimo_Grupo || valorAtual.charCodeAt(0) - ultimo_Grupo[ultimo_Grupo.length - 1].charCodeAt(0) > 1) {
                acc.push([valorAtual]);
            } else {
                ultimo_Grupo.push(valorAtual);
            }
            return acc;
        }, []);

        faixas = map(faixas, (indice, elemento) => `${elemento[0]}:${elemento[elemento.length - 1]}`);

        print(faixas.join(`, `));
    }
}

function get_Text() {
    return question();
}

function reduce(lista, funcao, valorAtual) {
    let acumulado = valorAtual;

    for (let i = 0; i < lista.length; i++) {
        acumulado = funcao(acumulado, lista[i], i, lista);
    }

    return acumulado;
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