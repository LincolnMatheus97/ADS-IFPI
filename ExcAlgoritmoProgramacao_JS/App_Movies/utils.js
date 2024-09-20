import { question } from "readline-sync";
import { monotonicFactory } from "ulidx";
import fs from 'fs';

export function get_number(texto) {
    return Number(question(texto));
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function print(texto) {
    return console.log(texto);
}

export function clean() {
    console.clear();
}

export function gerar_Id() {
    const ulid = monotonicFactory();
    return ulid(150000);
}

export function map(lista, transformadora) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_Lista.push(transformadora(i, lista[i]));
    }

    return nova_Lista;
}

export function filter(lista, criterio) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        if (criterio(i, lista[i])) {
            nova_Lista.push(lista[i]);
        }
    }

    return nova_Lista;
}

export function read_file(nomeArquivo) {
    return fs.readFileSync(nomeArquivo, `utf-8`);
}

export function ordenar_Quick(lista, reverse, criterio) {
    if (lista.length < 2) {
        return lista;
    }

    let pivor = lista[0];
    let menores = lista.slice(1).filter((filme) => filme[criterio] <= pivor[criterio]);
    let maiores = lista.slice(1).filter((filme) => filme[criterio] > pivor[criterio]);

    if (!reverse) {
        return [...ordenar_Quick(menores, reverse, criterio), pivor, ...ordenar_Quick(maiores, reverse, criterio)];
    } else {
        return [...ordenar_Quick(maiores, reverse, criterio), pivor, ...ordenar_Quick(menores, reverse, criterio)];
    }
}

export function buscar_Sequencial(lista, criterio, item_Base) {
    let item_Buscado = item_Base;

    for (let i = 0; i < lista.length; i++) {
        item_Buscado = criterio(lista[i], item_Buscado, i);

    }
    return item_Buscado;
}

export function save_file(nomeArquivo, conteudo) {
    return fs.writeFileSync(nomeArquivo, conteudo);
}