import { encher_Torre, encher_Torres, encher_Torres_Excecao, menu_Jogadas, mostrar_Torres, verificar_Vencedor } from "./funcionabilidade_utils.js";
import { clean, get_number, get_text, print } from "./utils.js";

export function menu_User() {
    let menu = get_number(`
        ----------- HANOI RGB -----------
        
        ESCOLHA O NIVEL DE JOGO:
        
        1 ~> NIVEL 1
        2 ~> NIVEL 2
        3 ~> NIVEL 3
        0 ~> SAIR
        
        ---------------------------------
        OPCAO: `
    );

    return menu;
}

export function nivel_1() {
    let torre_R = [], torre_G = [], torre_B = [], vencedor = ``; 
    print(`\n\tBEM VINDO AO NIVEL 1 DO HANÓI RGB`);
    let nome_J1 = get_text(`\r\tDIGITE SEU NOME JOGADOR 1: `);
    let quantidade_Elem = get_number(`\r\tDIGITE A QUANTIDADE DE ELEMENTOS QUE A TORRE DEVE CONTER, SENDO MIN(3), MAX(9): `);
    clean();
    
    encher_Torre(torre_R, quantidade_Elem);
    let torre_R_Clone = [...torre_R], torre_G_Clone = [...torre_G], torre_B_Clone = [...torre_B];

    let jogadas_J1 = menu_Jogadas(torre_R_Clone, torre_G_Clone, torre_B_Clone, nome_J1);
    let nome_J2 = get_text(`\r\tDIGITE SEU NOME JOGADOR 2: `);
    clean();
    let jogadas_J2 = menu_Jogadas(torre_R, torre_G, torre_B, nome_J2);

    vencedor = verificar_Vencedor(jogadas_J1, nome_J1, jogadas_J2, nome_J2);
    
    return vencedor;
}

export function nivel_2() {
    let torre_R = [], torre_G = [], torre_B = [], vencedor = ``;
    print(`\n\tBEM VINDO AO NIVEL 2 DO HANÓI RGB`);
    let jogador_1 = get_text(`\r\tDIGITE SEU NOME JOGADOR 1: `);
    let quantidade_Elem = get_number(`\r\tDIGITE A QUANTIDADE DE ELEMENTOS QUE A TORRE DEVE CONTER, SENDO MIN(3), MAX(9): `);
    clean();

    encher_Torres(torre_R, torre_G, torre_B, quantidade_Elem);
    let torre_R_Clone = [...torre_R], torre_G_Clone = [...torre_G], torre_B_Clone = [...torre_B];
    let jogadas_J1 = menu_Jogadas(torre_R_Clone, torre_G_Clone, torre_B_Clone, jogador_1);
    
    let jogador_2 = get_text(`\r\tDIGITE SEU NOME JOGADOR 2: `);
    clean();
    let jogadas_J2 = menu_Jogadas(torre_R, torre_G, torre_B, jogador_2);
    clean();
    vencedor = verificar_Vencedor(jogadas_J1, jogador_1, jogadas_J2, jogador_2);

    return vencedor;
}

export function nivel_3() {
    let torre_R = [], torre_G = [], torre_B = [], vencedor = ``, quantidade_Elem = 9;
    print(`\n\tBEM VINDO AO NIVEL 3 DO HANÓI RGB`);
    let jogador_1 = get_text(`\r\tDIGITE SEU NOME JOGADOR 1: `);
    clean();

    encher_Torres_Excecao(torre_R, torre_G, torre_B, quantidade_Elem);
    let torre_R_Clone = [...torre_R], torre_G_Clone = [...torre_G], torre_B_Clone = [...torre_B];

    let jogadas_J1 = menu_Jogadas(torre_R_Clone, torre_G_Clone, torre_B_Clone, jogador_1);
    let jogador_2 = get_text(`\r\tDIGITE SEU NOME JOGADOR 2: `);
    clean();
    let jogadas_J2 = menu_Jogadas(torre_R, torre_G, torre_B, jogador_2);

    vencedor = verificar_Vencedor(jogadas_J1, jogador_1, jogadas_J2, jogador_2);
    
    return vencedor;
}