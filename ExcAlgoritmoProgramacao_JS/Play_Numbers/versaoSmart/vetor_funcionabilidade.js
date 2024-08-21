import { get_negative_number, get_number, get_positive_number, get_random_number, get_text, read_file, print } from "./utils.js";
import { filter, generate_File_List, generate_List, quantity, show_List } from "./vetor_utils.js";

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
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                lista = generate_List(tamanho, min, max, get_random_number);
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 2:
                [min, max] = get_text(`\n\r\tDIGITE OS VALORES MIN E MAX DO VETOR. EX:(-25, 50). `).split(`,`).map(Number);
                tamanho = get_number(`\r\tDIGITE O TAMANHO DO VETOR: `);
                lista = generate_List(tamanho, min, max, i => i = get_number(`\r\tDIGITE UM VALOR: `));
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 3:
                nomeArquivo = get_text(`\n\r\tDIGITE O NOME DO ARQUIVO: `)
                numeros = read_file(nomeArquivo);
                lista = generate_File_List(numeros);
                print(`\r\tVETOR ${titulo} COM SUCESSO!`);
                return lista;
            case 0:
                break;
        }
    }
}

export function show_All_Values(lista) {
    if(lista.length !== 0) {
        print(`\n\r\t---> TODOS OS VALORES:`);
        show_List(lista);
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

}

export function reset_Vector(lista) {
    if(lista.length !== 0) {
        print(`\n\r\t---> VALORES DO VETOR ATUAL:`);
        show_List(lista);
        let escolha = get_text(`\r\tVOCE DESEJA RESETAR E CRIAR UM NOVO VETOR, SIM OU NAO: `).toUpperCase();
        
        if(escolha === `SIM`) {
            initializer_Vector(`RESETADO`);
        }
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }
}

export function quantity_Vector(lista) {
    if(lista.length !== 0) {
        print(`\n\r\t---> QUANTIDADE DE VALORES:`);
        print(`\n\tSEU VETOR POSSUI ${quantity(lista)}`);
        print(`\r\t---------------------`);
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }
}

export function show_PositiveValues_And_Quantity(lista) {
    let nova_Lista = [];

    if(lista.length !== 0) {
        nova_Lista = filter(lista, get_positive_number);
        print(`\n\r\t--->VALORES POSITIVOS E QUANTIDADE:`);
        show_List(nova_Lista);
        print(`\n\tSEU VETOR POSSUI ${quantity(nova_Lista)}`);
        print(`\r\t---------------------`);
        return nova_Lista;
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }

}

export function show_NegativeValues_And_Quantity(lista) {
    let nova_Lista = [];

    if(lista.length !== 0) {
        nova_Lista = filter(lista, get_negative_number);
        print(`\n\r\t--->VALORES NEGATIVOS E QUANTIDADE:`);
        show_List(nova_Lista);
        print(`\n\tSEU VETOR POSSUI ${quantity(nova_Lista)}`);
        print(`\r\t---------------------`);
        return nova_Lista;
    } else {
        print(`\r\tA LISTA ESTÁ VAZIA...`);
    }
    
}