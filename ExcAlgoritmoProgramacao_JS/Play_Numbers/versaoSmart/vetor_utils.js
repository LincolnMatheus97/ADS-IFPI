// FUNÇÃO GENERICA PARA GERAR LISTA ALEATORIA OU ESCOLHENDO OS NÚMEROS...
export function generate_List(tamanho, inicio, final, funcao) {
    let nova_Lista = [];
    
    for (let i = 0; i < tamanho; i++) {
        let numero = funcao(inicio, final);
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
            if((algarismo === `-`) || (algarismo >= `0` && algarismo <= `9`)) {
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

export function show_List(lista, titulo) {
    let texto = ``;

    texto += (`\n\t${titulo}\n`);

    for (let i = 0; i < lista.length; i++) {
        texto += (`\t${i + 1}: ${lista[i]}\n`);
    }

    texto += (`\t---------------------\n`);

    return texto;
}

// FUNÇÃO GENERICA DE REDUZIR UM VETOR...
export function reduce(lista, funcao, valorAtual) {
    let acumulado = valorAtual;

    for (let i = 0; i < lista.length; i++) {
        acumulado = (funcao(acumulado, lista[i], i, lista));
    }

    return acumulado;
}

export function values_And_Positions(lista) {
    let texto = ``;

    let menor = reduce(lista, (acc, valorAtual) => Math.min(acc, valorAtual), Infinity);
    let posicaoMenor = reduce(lista, (menorIndice, atual, indice, array) => atual < array[menorIndice] ? indice : menorIndice, 0);
    let maior = reduce(lista, (acc, valorAtual) => Math.max(acc, valorAtual), 0);
    let posicaoMaior = reduce(lista, (menorIndice, atual, indice, array) => atual > array[menorIndice] ? indice : menorIndice, 0);

    texto += `\n\t-> Menor Valor: ${menor}\n\t-> POSICAO: ${posicaoMenor + 1}\n`;
    texto += `\t-> Maior Valor: ${maior}\n\t-> POSICAO: ${posicaoMaior + 1}\n`;
    texto += `\t---------------------\n`;

    return texto;
}

// FUNÇÃO GENERICA DE FILTAR UM VETOR...
export function filter(lista, criterio) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        if(criterio(i, lista[i])) {
            nova_Lista.push(lista[i]);
        }
    }

    return nova_Lista;
}

// FUNÇÃO GENERICA DE MAPEAR UM VETOR...
export function map(lista, transformadora) {
    let nova_Lista = [];

    for (let i = 0; i < lista.length; i++) {
        nova_Lista.push(transformadora(i, lista[i]));
    }
    
    return nova_Lista;
}