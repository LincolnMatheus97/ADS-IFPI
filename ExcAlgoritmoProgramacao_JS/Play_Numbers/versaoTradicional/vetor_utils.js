import { get_negative_number, get_number, get_positive_number, get_random_number, get_track_number, print } from "./utils.js";

export function generate_Random_List(tamanho, inicio, final) {
    let nova_Lista = [];

    for (let i = 0; i < tamanho; i++) {
        let numero = get_random_number(inicio, final);
        nova_Lista.push(numero);
    }

    return nova_Lista;

}

export function generate_Chosen_List(tamanho, inicio, final) {
    let nova_Lista = [];

    for (let i = 0; i < tamanho; i++) {
        let numero = get_track_number(inicio, final);
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
            if (algarismo >= `0` && algarismo <= `9`) {
                numero += algarismo;
            } else if (numero) {
                nova_Lista.push(parseInt(numero));
                numero = ``;
            }
        }

        if (numero) {
            nova_Lista.push(parseInt(numero));
            numero = ``;
        }
    }

    return nova_Lista;
}

export function show_List(lista, titulo) {
    let texto = ``;

    texto += (`\n\t${titulo}\n`);

    for (let i = 0; i < lista.length; i++) {
        texto += (`\t${i + 1}: ${lista[i]}\n`);
    }

    texto += (`\t---------------------\n`);

    return texto;
}

export function quantity(lista) {
    return lista.length;
}

export function values_And_Positions(lista) {
    let nova_Lista = [];
    let menor = Infinity;
    let posicaoMenor = 0;
    let maior = 0;
    let posicaoMaior = 0;
    let texto = ``;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
            posicaoMaior = [i + 1];
        } else if (lista[i] < menor) {
            menor = lista[i];
            posicaoMenor = [i + 1];
        }
    }

    nova_Lista.push(menor, posicaoMenor, maior, posicaoMaior);

    for (let i = 0; i < nova_Lista.length; i++) {
        if (i % 2 === 0) {
            texto += (`\n\t-> ${nova_Lista[i]}\n`);
        } else {
            texto += (`\t->POSICAO: ${nova_Lista[i]}\n`)
        }
    }

    texto += (`\t---------------------\n`);

    return texto;
}

export function sum(lista) {
    let somatorio = 0;

    for (let numero of lista) {
        somatorio += numero;
    }

    return somatorio;
}

export function average(lista) {
    let somatorio = sum(lista);
    let media = somatorio / lista.length;

    return media;
}

export function filter_PositiveNumbers(lista) {
    let nova_Lista = [];

    for (let numeros of lista) {
        if (get_positive_number(numeros)) {
            nova_Lista.push(numeros);
        }
    }

    return nova_Lista;
}

export function filter_NegativeNumbers(lista) {
    let nova_Lista = [];

    for (let numeros of lista) {
        if (get_negative_number(numeros)) {
            nova_Lista.push(numeros);
        }
    }

    return nova_Lista;
}

export function add_Value(lista) {
    let nova_Lista = lista;
    let novo_Valor = get_number(`\r\tDIGITE UM NOVO VALOR: `);
    nova_Lista.push(novo_Valor);

    return nova_Lista;
}

export function filter_Value(lista, valor) {
    let nova_Lista = [];

    for (let numero of lista) {
        if (numero !== valor) {
            nova_Lista.push(numero);
        }
    }
    return nova_Lista;
}

export function filter_Position(lista, posicao) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        if (i !== (posicao - 1)) {
            nova_Lista.push(lista[i]);
        }
    }

    return nova_Lista;
}

export function map_Multiply(lista, valor) {
    let nova_Lista = [];

    for (let numero of lista) {
        nova_Lista.push(numero * valor);
    }
    return nova_Lista;

}

export function map_Exponential(lista, valor) {
    let nova_Lista = [];

    for (let numero of lista) {
        nova_Lista.push(numero ** valor);
    }
    return nova_Lista;
}

export function map_Order(lista) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        let elementoAtual = lista[i];
        let j = nova_Lista.length - 1;

        while (j >= 0 && nova_Lista[j] > elementoAtual) {
            j--;
        }

        nova_Lista.splice(j + 1, 0, elementoAtual);
    }
    return nova_Lista;

}

export function map_Shuffle(lista) {
    let nova_Lista = [];

    while (lista.length > 0) {
        let indexAleatorio = get_random_number(0, lista.length - 1);
        let elemento = lista.splice(indexAleatorio, 1)[0];

        nova_Lista.push(elemento);
    }

    return nova_Lista;
}

export function edit_Value_Position(lista, posicao, valor) {
    let nova_Lista = lista;

    for (let i = 0; i < nova_Lista.length; i++) {
        if (i === (posicao - 1)) {
            nova_Lista[i] = valor;
        }
    }

    return nova_Lista;
}