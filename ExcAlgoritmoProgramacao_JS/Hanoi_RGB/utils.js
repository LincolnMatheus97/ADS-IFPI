import { question } from "readline-sync";

export function get_number(texto) {
    return Number(question(texto));
}

export function get_text(mensagem) {
    return question(mensagem);
}

export function print(texto){
    return console.log(texto);
}

export function clean() {
    console.clear();
}

export function remover_Topo(lista) {
    return lista.length > 0 ? lista.shift() : null;
}

export function adicionar_Topo(lista, elemento) {
    return lista.unshift(elemento);
}

export function verificar_Validade(lista_1, lista_2, lista_3) {
    for (let elemento of lista_1) {
        if (elemento !== `R`) {
            return false;
        }
    }

    for (let elemento of lista_2) {
        if (elemento !== `G`) {
            return false;
        }
    }

    for (let elemento of lista_3) {
        if (elemento !== `B`) {
            return false;
        }
    }

    return true;
}