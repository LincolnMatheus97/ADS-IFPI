import { print } from "./utils.js";

export function generate_List(tamanho, inicio, final, funcao) {
    let nova_Lista = [];
    
    for (let i = 0; i < tamanho; i++) {
        let numero = funcao(inicio, final);
        while(numero < inicio || numero > final) {
            print(`\r\tNUMERO INVALIDO!`);
            numero = funcao(inicio, final);
        }
        nova_Lista.push(numero);
    }

    return nova_Lista;
}

export function generate_File_List(lista) {
    let nova_Lista = [];
    let numero = ``;
    let linhas = lista.split(`\n`);

    for (let linha of linhas) {
        for (let algarismo of linha) {
            if(algarismo >= `0` && algarismo <= `9`) {
                numero += algarismo;
            } else if (numero) {
                nova_Lista.push(parseInt(numero));
                numero = ``;
            }
        }

        if(numero) {
            nova_Lista.push(parseInt(numero));
            numero = ``;
        }
    }

    return nova_Lista;
}

export function show_List(lista) {
    for (let i = 0; i < lista.length; i++) {
        print(`\r\t${i + 1}: ${lista[i]}`)
    }

    print(`\r\t---------------------`);

}

export function quantity(lista) {
    return lista.length;
}

export function filter(lista, criterio) {
    let nova_Lista = [];

    for (let elemento of lista) {
        if(criterio(elemento)) {
            nova_Lista.push(elemento);
        }
    }

    return nova_Lista;
}
