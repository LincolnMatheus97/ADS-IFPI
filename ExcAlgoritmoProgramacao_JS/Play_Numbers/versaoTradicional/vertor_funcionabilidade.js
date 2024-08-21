import { get_number, get_text, print, read_file, save_file } from "./utils.js";
import { add_Value, average, edit_Value_Position, filter_NegativeNumbers, filter_Position, filter_PositiveNumbers, filter_Value, generate_Chosen_List, generate_File_List, generate_Random_List, map_Exponential, map_Multiply, map_Order, map_Shuffle, quantity, show_List, sum, values_And_Positions } from "./vetor_utils.js";

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
    let opcaoMenu = -1, min = 0, max = 0, tamanho = 0, nova_Lista = [], nomeArquivo = ``, numeros = ``;

    while (opcaoMenu !== 0) {
        opcaoMenu = get_number(`
            \n\t--------- INICIALIZADOR DE VETOR ---------
            
            \r\t1 -> VALORES DO VETOR AUTOMATICO
            \r\t2 -> VALORES DO VETOR ESCOLHIDO
            \r\t3 -> LER VALORES DO VETOR NO ARQUIVO
            \r\t0 -> VOLTAR PARA O MENU PRINCIPAL

            \r\t------------------------------------------
            \r\tOPCAO:`
        );

        switch (opcaoMenu) {
            case 1:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS AUTOMATICOS...
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                nova_Lista = generate_Random_List(tamanho, min, max);
                print(`\n\r\tVETOR ${titulo} COM SUCESSO!`);
                return nova_Lista;
            case 2:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS ESCOLHIDOS PELO USER...
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                nova_Lista = generate_Chosen_List(tamanho, min, max);
                print(`\n\r\tVETOR ${titulo} COM SUCESSO!`);
                return nova_Lista;
            case 3:
                // CASO ONDE SE GERA UM VETOR COM NÚMEROS LIDOS DE UM ARQUIVO...
                nomeArquivo = get_text(`\n\r\tDIGITE O NOME DO ARQUIVO: `)
                numeros = read_file(nomeArquivo);
                nova_Lista = generate_File_List(numeros);
                print(`\n\r\tVETOR ${titulo} COM SUCESSO!`);
                return nova_Lista;
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
        texto += (`\n\tSEU VETOR POSSUI ${quantity(lista)} VALORES\n`);
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
        texto += (`\n\tÉ IGUAL À ${sum(lista)}\n`);
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
        texto += (`\n\tÉ IGUAL À ${average(lista).toFixed(2)}\n`);
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
        nova_Lista = filter_PositiveNumbers(lista);
        texto += show_List(nova_Lista, `---> TODOS OS VALORES POSITIVOS:`);
        texto += (`\n\tSEU VETOR POSSUI ${quantity(nova_Lista)} NUMEROS POSITIVOS\n`);
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
        nova_Lista = filter_NegativeNumbers(lista);
        texto += show_List(nova_Lista, `---> TODOS OS VALORES NEGATIVOS:`)
        texto += (`\n\tSEU VETOR POSSUI ${quantity(nova_Lista)} NUMEROS NEGATIVOS\n`);
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
                nova_Lista = map_Multiply(lista, valor);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 2:
                // CASO ONDE SE ELEVA TODOS OS VALORES DO VETOR, POR UM NÚMERO DETERMINADO PELO USER...
                valor = get_number(`\r\tDIGITE UM VALOR QUE DESEJA ELEVAR POR TODOS OS VALORES DO VETOR: `);
                nova_Lista = map_Exponential(lista, valor);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 3:
                break;
            case 4:
                break;
            case 5:
                // CASO ONDE SE ORDENA OS VALORES DO VETOR EM ORDEM CRESCENTE...
                nova_Lista = map_Order(lista);
                print(`\n\r\tVETOR ATUALIZADO COM SUCESSO!`);
                return nova_Lista;
            case 6:
                // CASO ONDE SE EMBARALHA OS VALORES DO VETOR...
                nova_Lista = map_Shuffle(lista);
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
    let nova_Lista = [];

    if (lista.length !== 0) {
        let escolha = get_text(`\n\r\tVOCE DESEJA ADICIONAR UM NOVO VALOR AO VETOR, SIM OU NAO: `).toUpperCase();

        while (escolha !== `NAO`) {
            nova_Lista = add_Value(lista);
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
        nova_Lista = filter_Value(lista, valor);
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
        nova_Lista = filter_Position(lista, valor);
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
        nova_Lista = edit_Value_Position(lista, posicao, valor);
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