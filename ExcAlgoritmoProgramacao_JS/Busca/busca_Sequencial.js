import { get_text, print } from "../utils/io_utils.js";

function main() {
    const lista_Numerica = [-1, 5, `-7`, 6, 2, 4];
    const lista_Strings = [`zinco`, `ferro`, `calciferol`, `tocoferol`, `filoquinona`];

    // BUSCAR O MENOR ITEM DA LISTA NUMERICA
    print(`${lista_Numerica}`);
    let menor_Item = eh_Menor(lista_Numerica);
    print(`O menor item da lista é ${menor_Item}!`);

    // BUSCAR A POSICAO DO ITEM ESCOLHIDO PELO USER NA LISTA DE STRING
    print(`${lista_Strings}`);
    let vitamina_Desejada = get_text(`\nDigite o nome da vitamina que queira saber sua posicao na lista: `);
    let posicao_Desejada = eh_posicao(lista_Strings, vitamina_Desejada);
    print(`\nA posição da vitamina desejada é ${posicao_Desejada} na lista!`);
}

// FUNÇÃO GENERICA QUE BUSCA EM UMA LISTA UM ITEM BASEADO EM CARTUCHOS(FUNÇOES OBJETOS OU ARROW FUNCTIONS).
function buscar_Sequencial(lista, criterio, item_Base) {
    let item_Buscado = item_Base;

    for (let i = 0; i < lista.length; i++) {
        item_Buscado = criterio(lista[i], item_Buscado, i);

    }
    return item_Buscado;
}

// FUNÇÃO CARTUCHO PARA ACHAR O MENOR ITEM DA LISTA
function eh_Menor(lista) {
    let menor = buscar_Sequencial(lista, (item_Lista, item_Desejado, indice) =>
        item_Lista < item_Desejado ? item_Desejado = item_Lista : item_Desejado = item_Desejado, 0)
        ;
    return menor;
}

// FUNÇÃO CARTUCHO PARA ACHAR A POSICAO DO ITEM ESCOLHIDO PELO USER NA LISTA
function eh_posicao(lista, string) {
    let posicao = buscar_Sequencial(lista, (item_Lista, item_Desejado, indice) =>
        item_Lista === string ? item_Desejado = indice + 1 : item_Desejado = item_Desejado, 0)
        ;
    return posicao;
}

main();