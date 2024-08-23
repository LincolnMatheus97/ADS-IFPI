import { get_negative_number, get_number, get_positive_number, get_random_number, get_text, read_file, print, get_track_number, save_file } from "./utils.js";
import { filter, generate_File_List, generate_List, map, reduce, show_List, values_And_Positions } from "./vetor_utils.js";

// MENU DO PROGRAMA...
export function menuUser() {
    let menu = get_number(`
        --------- PLAY NUMBERS ---------
    
        01 -> INICIALIZAR VETOR NUMERICO
        02 -> MOSTRAR TODOS OS VALORES
        03 -> RESETAR VETOR
        04 -> QUANTIDADES DE ITENS DO VETOR
        05 -> MOSTRAR MENOR E MAIOR VALORES DO VETOR E SUAS POSICOES
        06 -> SOMATORIO DOS VALORES
        07 -> MEDIA DOS VALORES
        08 -> MOSTRAR VALORES POSITIVOS E QUANTIDADE
        09 -> MOSTRAR VALORES NEGATIVOS E QUANTIDADE
        10 -> ATUALIZAR TODOS OS VALORES BASEADO EM UMA REGRA
        11 -> ADICIONAR NOVOS VALORES
        12 -> REMOVER ITENS POR VALOR EXATO
        13 -> REMOVER ITENS POR POSICAO
        14 -> EDITAR VALOR ESPECIFICO POR POSICAO
        15 -> SALVAR VALORES EM ARQUIVO
        16 -> SAIR
    
        -------------------------------
        OPCAO:`
    );

    return menu;
}

// FUNÇÃO INICIALIZADORA DO VETOR...
export function initializer_Vector(titulo) {
    let opcaoMenu = -1, min = 0, max = 0, tamanho = 0, lista = [], nomeArquivo = ``, numeros = ``;

    while(opcaoMenu !== 0) {
        opcaoMenu = get_number(`
            \n\t--------- INICIALIZADOR DE VETOR ---------
            
            \r\t1 -> VALORES DO VETOR AUTOMATICO
            \r\t2 -> VALORES DO VETOR ESCOLHIDO
            \r\t3 -> LER VALORES DO VETOR NO ARQUIVO
            \r\t0 -> VOLTAR PARA O MENU PRINCIPAL

            \r\t------------------------------------------
            \r\tOPCAO:`
        );

        switch(opcaoMenu) {
            case 1:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS AUTOMATICOS...
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                lista = generate_List(tamanho, min, max, get_random_number);
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 2:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS ESCOLHIDOS PELO USER...
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                lista = generate_List(tamanho, min, max, get_track_number);
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 3:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS LIDOS DE UM ARQUIVO...
                nomeArquivo = get_text(`\n\r\tDIGITE O NOME DO ARQUIVO: `)
                numeros = read_file(nomeArquivo);
                lista = generate_File_List(numeros);
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 0:
                // CASO QUE RETORNA AO MENU PRINCIPAL...
                break;
        }
    }
}

// FUNÇÃO PARA MOSTRAR TODOS OS VALORES DO VETOR...
export function show_All_Values(lista) {
    let texto = ``;
    if (lista.length !== 0) {
        texto += show_List(lista, `---> TODOS OS VALORES DO VETOR:`)
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA RESETAR TODO O VETOR...
export function reset_Vector(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        texto = show_List(lista, `---> VALORES DO VETOR ATUAL:`);
        print(`${texto}`);
        let escolha = get_text(`\r\tVOCE DESEJA RESETAR E CRIAR UM NOVO VETOR, SIM OU NAO: `).toUpperCase();

        if (escolha === `SIM`) {
            nova_Lista = initializer_Vector(`RESETADO`);
        } else {
            nova_Lista = lista;
        }
        
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

    return nova_Lista;
}

// FUNÇÃO PARA MOSTRAR A QUANTIDADE DE VALORES DO VETOR...
export function quantity_Vector(lista) {
    let texto = ``;

    if (lista.length !== 0) {
        texto += (`\n\t---> QUANTIDADE DE VALORES:\n`);
        texto += (`\n\tSEU VETOR POSSUI ${reduce(lista, (acc) => acc + 1, 0)} VALORES\n`);
        texto += (`\t---------------------\n`);
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA MOSTRAR O MENOR E MAIOR VALOR DO VETOR E SUAS POSIÇÕES...
export function lowhigh_Value_And_Positions(lista) {
    let texto = ``;

    if (lista.length !== 0) {
        texto += (`\n\t---> MENOR E MAIOR VALOR E SUAS POSIÇÕES:\n`);
        texto += values_And_Positions(lista);
    } else {
        texto +=(`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA MOSTRAR O SOMATÓRIO DE TODOS OS VALORES DO VETOR...
export function sum_Values(lista) {
    let texto = ``;

    if (lista.length !== 0) {
        texto += (`\n\t---> SOMATORIO DE TODOS OS VALORES:\n`);
        texto += (`\n\tÉ IGUAL À ${reduce(lista, (acc, valorAtual) => acc + valorAtual, 0).toFixed(2)} \n`);
        texto += (`\t---------------------\n`);
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA MOSTRAR A MÉDIA DOS VALORES DO VETOR...
export function average_Values(lista) {
    let texto = ``;

    if (lista.length !== 0) {
        texto += (`\n\t---> MÉDIA DE TODOS OS VALORES:\n`);
        texto += (`\n\tÉ IGUAL À ${(reduce(lista, (acc, valorAtual) => acc + valorAtual, 0) / lista.length).toFixed(2)}\n`);
        texto += (`\t---------------------\n`);
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA MOSTRAR APENAS OS NÚMEROS POSITIVOS DO VETOR E A QUANTIDADE DELES...
export function show_PositiveValues_And_Quantity(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        nova_Lista = filter(lista, (indice, elemento) => get_positive_number(elemento));
        texto += show_List(nova_Lista, `---> TODOS OS VALORES POSITIVOS:`);
        texto += (`\n\tSEU VETOR POSSUI ${reduce(nova_Lista, (acc) => acc + 1,0)} NUMEROS POSITIVOS\n`);
        texto += (`\t---------------------\n`);
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA MOSTRAR APENAS OS NÚMEROS NEGATIVOS DO VETOR E A QUANTIDADES DELES...
export function show_NegativeValues_And_Quantity(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        nova_Lista = filter(lista, (indice, elemento) => get_negative_number(elemento));
        texto += show_List(nova_Lista, `---> TODOS OS VALORES NEGATIVOS:`)
        texto += (`\n\tSEU VETOR POSSUI ${reduce(nova_Lista, (acc) => acc + 1, 0)} NUMEROS NEGATIVOS\n`);
        texto += (`\t---------------------\n`);
    } else {
        texto += (`\tA LISTA ESTÁ VAZIA...\n`);
    }

    return texto;
}

// FUNÇÃO PARA ATUALIZAR BASEADO NAS REGRAS, TODOS OS VALORES DO VETOR...
export function update_AllValues_Rule(lista) {
    let opcaoMenu = -1, valor = 0, nova_Lista = [];

    while (opcaoMenu !== 0) {
        opcaoMenu = get_number(`
            \n\t--------- REGRAS ---------
            
            \r\t1 -> MULTIPLICAR POR UM VALOR
            \r\t2 -> ELEVAR A UM VALOR (EXPONENCIAL)
            \r\t3 -> REDUZIR A UMA FRACAO
            \r\t4 -> SUBSTITUIR VALORES NEGATIVOS POR UM NUMERO DA FAIXA(MIN, MAX)
            \r\t5 -> ORDENAR VALORES
            \r\t6 -> EMBARALHAR VALORES
            \r\t0 -> VOLTAR PARA O MENU PRINCIPAL
            
            \r\t--------------------------
            \r\tOPCAO: `
        );
        switch (opcaoMenu) {
            case 1:
                // CASO ONDE SE MULTIPLICA TODOS OS VALORES DO VETOR, POR UM NÚMERO DETERMINADO PELO USER...
                valor = get_number(`\r\tDIGITE UM VALOR QUE DESEJA MULTIPLICAR POR TODOS OS VALORES DO VETOR: `);
                nova_Lista = map(lista, (indice, elemento) => elemento * valor);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 2:
                // CASO ONDE SE ELEVA TODOS OS VALORES DO VETOR, POR UM NÚMERO DETERMINADO PELO USER...
                valor = get_number(`\r\tDIGITE UM VALOR QUE DESEJA ELEVAR POR TODOS OS VALORES DO VETOR: `);
                nova_Lista = map(lista, (indice, elemento) => elemento ** valor);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 3:
                // CASO ONDE SE MULTIPLICA TODOS OS VALORES DO VETOR, POR UMA FRAÇÃO DETERMINADA PELO USER...
                valor = get_text(`\r\tDIGITE UMA FRACAO QUE DESEJA MULTIPLICAR POR TODOS OS VALORES DO VETOR: `).split(`/`).map(Number);
                nova_Lista = map(lista, (indice, elemento) => parseFloat(((elemento * valor[0]) / valor[1]).toFixed(2)));
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 4:
                // CASO ONDE SE SUBSTITUI OS VALORES NEGATIVOS DO VETOR, POR UM NUMERO DETERMINADO PELO USER...
                nova_Lista = map(lista, (indice, elemento) => 
                    elemento < 0 ? elemento = get_number(`\r\tDIGITE UM NOVO NUMERO POSITIVO: `) : elemento = elemento
                );
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 5:
                // CASO ONDE SE ORDENA OS VALORES DO VETOR EM ORDEM CRESCENTE...
                nova_Lista = lista.sort((a, b) => a - b);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 6:
                // CASO ONDE SE EMBARALHA OS VALORES DO VETOR...
                nova_Lista = lista.sort(() => Math.random() - 0.5);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 0:
                // CASO ONDE SE RETORNA AO MENU PRINCIPAL...
                break;
        }
    }
}

// FUNÇÃO PARA ADICIONAR UM NOVO VALOR NO VETOR...
export function add_Value_In_Vector(lista) {
    let nova_Lista = [...lista];

    if (lista.length !== 0) {
        let escolha = get_text(`\n\r\tVOCE DESEJA ADICIONAR UM NOVO VALOR AO VETOR, SIM OU NAO: `).toUpperCase();

        while (escolha !== `NAO`) {
            nova_Lista.push(get_number(`\r\tDIGITE UM NOVO VALOR: `));
            escolha = get_text(`\r\tVOCE DESEJA ADICIONAR UM NOVO VALOR AO VETOR, SIM OU NAO: `).toUpperCase();
        }

    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

    return nova_Lista;
}

// FUNÇÃO PARA REMOVER UM VALOR EXATO DO VETOR...
export function remove_Items_Exact_Value(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        texto = show_List(lista, `---> REMOVENDO VALOR:`);
        print(`${texto}`);
        let valor = get_number(`\n\r\tVOCE DESEJA REMOVER QUAL VALOR DO VETOR: `);
        nova_Lista = filter(lista, (indice, elemento) => elemento !== valor);
        print(`\r\tVALOR REMOVIDO COM SUCESSO...`);
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

    return nova_Lista;
}

// FUNÇÃO PARA REMOVER UM VALOR EXATO APARTIR DA SUA POSIÇÃO NO VETOR...
export function remove_Items_Exact_Position(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        texto = show_List(lista, `---> REMOVENDO POSICAO:`);
        print(`${texto}`);
        let valor = get_number(`\n\r\tVOCE DESEJA REMOVER QUAL POSICAO DO VETOR: `);
        nova_Lista = filter(lista, (indice, elemento) => indice !== valor - 1);
        print(`\r\tPOSIÇÃO REMOVIDA COM SUCESSO...`);
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

    return nova_Lista;
}

// FUNÇÃO PARA EDITAR UM VALOR APARTIR DA SUA POSIÇÃO NO VETOR...
export function edit_Items_Exact_Position(lista) {
    let nova_Lista = [];
    let texto = ``;

    if (lista.length !== 0) {
        texto = show_List(lista, `---> EDITANDO POSICAO:`);
        print(`${texto}`);
        let posicao = get_number(`\n\r\tVOCE DESEJA EDITAR QUAL POSICAO DO VETOR: `);
        let valor = get_number(`\r\tQUAL VALOR VOCE DESEJA POR NESSA POSICAO ${posicao}: `);
        nova_Lista = map(lista, (indice, elemento) => indice === posicao - 1 ? valor : elemento);
        print(`\r\tPOSIÇÃO EDITA COM SUCESSO...`);
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

    return nova_Lista;
}

// FUNÇÃO PARA SALVAR OS ITENS GERADOS PELO PROGRAMA NUM ARQUIVO...
export function save_Values_File(lista) {
    let nomeArquivo = get_text(`\n\r\tDIGITE O NOME DO ARQUIVO(EX: ARQUIVO.TXT): `);
    let texto = (`
    ${show_All_Values(lista)}
    ${quantity_Vector(lista)}
    ${lowhigh_Value_And_Positions(lista)}
    ${sum_Values(lista)}
    ${average_Values(lista)}
    ${show_PositiveValues_And_Quantity(lista)}
    ${show_NegativeValues_And_Quantity(lista)}`);
    save_file(nomeArquivo, texto);
    print(`\n\r\tARQUIVO SALVO COM SUCESSO...`);
}

// FUNÇÃO PARA SALVAR OS ITENS GERADO PELO PROGRAMA EM UM ARQUIVO JA DETERMINADO...
export function save_Automatic(lista) {
    let nomeArquivo = `registro.txt`;
    let texto = (`
    ${show_All_Values(lista)}
    ${quantity_Vector(lista)}
    ${lowhigh_Value_And_Positions(lista)}
    ${sum_Values(lista)}
    ${average_Values(lista)}
    ${show_PositiveValues_And_Quantity(lista)}
    ${show_NegativeValues_And_Quantity(lista)}`);
    save_file(nomeArquivo, texto);
    print(`\n\r\tARQUIVO SALVO COM SUCESSO... NO ARQUIVO DE NOME REGISTRO.TXT`);
}