import { get_text, print } from "../utils/io_utils.js";

function main() {
    const lista_Numerica = [-4, -1, 2, 7, 12];
    print(`${lista_Numerica}`);

    // BUSCAR O MENOR ITEM DA LISTA
    let menor_Item = eh_Menor(lista_Numerica, false);
    print(menor_Item);

    // BUSCAR O MAIOR ITEM DA LISTA
    let maior_Item = eh_Maior(lista_Numerica, false);
    print(maior_Item);

    // BUSCAR A POSICAO DO MENOR ITEM DA LISTA
    let posicao_Menor_Item = eh_Menor(lista_Numerica, true);
    print(posicao_Menor_Item);

    // BUSCAR A POSICAO DO MAIOR ITEM DA LISTA
    let posicao_Maior_Item = eh_Maior(lista_Numerica, true);
    print(posicao_Maior_Item);

    const lista_Strings = [`calciferol`, `ferro`, `filoquinona`, `tocoferol`, `zinco`];
    print(`${lista_Strings}`);
    
    // BUSCAR A POSICAO DO ITEM ESCOLHIDO
    let Vitamina_Desejada = get_text(`\nDigite a vitamina que deseja saber a posicao: `);
    let posicao_Desejada = essa_Posicao(lista_Strings, Vitamina_Desejada, true);
    print(posicao_Desejada);

}

// FUNÇÃO GENERICA QUE BUSCA EM UMA LISTA ORDENADA UM ITEM BASEADO EM CARTUCHOS(FUNÇOES OBJETOS OU ARROW FUNCTIONS).
function buscar_Binaria(lista, criterio, posicao = false) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto) / 2);
        let comparacao = criterio(meio);

        if (comparacao === 0) {
            if (!posicao) {
                return lista[meio];
            } else {
                return meio;
            }
        }
        if (comparacao < 0) {
            alto = meio - 1;
        } else {
            baixo = meio + 1
        }

    }
    return null;
}

// CARTUCHO DO MENOR ITEM
function eh_Menor(lista, posicao) {
    let menor = buscar_Binaria(lista, (indice) => {
        if (lista[indice] === Math.min(...lista)) {
            return 0;
        }
        return lista[indice] < Math.min(...lista) ? 1 : -1;
    }, posicao);
    return menor;
}

// CARTUCHO DO MAIOR ITEM
function eh_Maior(lista, posicao) {
    let maior = buscar_Binaria(lista, (indice) => {
        if (lista[indice] === Math.max(...lista)) {
            return 0;
        }
        return lista[indice] < Math.max(...lista) ? 1 : -1;
    }, posicao);
    return maior;
}

// CARTUCHO DA POSICAO DA STRING ESCOLHIDA PELO USER
function essa_Posicao(lista, string, posicao) {
    let eh_posicao = buscar_Binaria(lista, (indice) => {
        let item_Lista = lista[indice];

        if (item_Lista === string) {
            return 0;
        }
        return item_Lista < string ? 1 : -1;
    }, posicao);
    return eh_posicao;
}

main();