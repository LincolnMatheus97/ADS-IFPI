import { adicionar_Topo, clean, get_number, print, remover_Topo, verificar_Validade } from "./utils.js";

let elemento_Random = ``;

export function encher_Torre(lista, numero) {
    let elementos = [`R`, `G`, `B`];

    for (let i = 0; i < numero; i++) {
        elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
        lista.push(elemento_Random);
    }
}

export function encher_Torres(lista_1, lista_2, lista_3, numero) {
    let elementos = [`R`, `G`, `B`];
    let listas = [lista_1, lista_2, lista_3];

    for (let i = 0; i < listas.length; i++) {
        elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
        listas[i].push(elemento_Random);
    }

    for (let i = 0; i < numero - 3; i++) {
        elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
        let lista_Random = listas[Math.floor(Math.random() * listas.length)];
        lista_Random.push(elemento_Random);
    }
}

export function encher_Torres_Excecao(lista_1, lista_2, lista_3, numero) {
    let elementos = [`R`, `G`, `B`];
    let listas = [lista_1, lista_2, lista_3];

    for (let i = 0; i < listas.length; i++) {
        elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
        while (elemento_Random === elementos[i]) {
            elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
        }
        listas[i].push(elemento_Random);
    }

    for (let i = 0; i < listas.length; i++) {
        for (let j = 0; j < numero - 1; j++) {
            elemento_Random = elementos[Math.floor(Math.random() * elementos.length)];
            listas[i].push(elemento_Random);
        }
    }
}

export function mostrar_Torres(lista_1, lista_2, lista_3) {
    let texto = ``;

    texto += `\n\tTorre R:[${lista_1.join(`,`)}]`;
    texto += `\n\tTorre G:[${lista_2.join(`,`)}]`;
    texto += `\n\tTorre B:[${lista_3.join(`,`)}]`;

    return texto;
}

export function menu_Jogadas(lista_1, lista_2, lista_3, nome_Jogador) {
    let validacao = false, elemento_R = ``, elemento_G = ``, elemento_B = ``, jogadas = 0;

    while (validacao !== true) {
        let operacao = get_number(`
            \r\t----------- HANOI RGB -----------
            \r\t${mostrar_Torres(lista_1, lista_2, lista_3)}
            
            \r\t------------------------------------------------------
            
            \r\t1 ~> OPERACAO RG: MOVA DE R PARA G
            \r\t2 ~> OPERACAO RB: MOVA DE R PARA B
            \r\t3 ~> OPERACAO GR: MOVA DE G PARA R
            \r\t4 ~> OPERACAO GB: MOVA DE G PARA B
            \r\t5 ~> OPERACAO BR: MOVA DE B PARA R
            \r\t6 ~> OPERACAO BG: MOVA DE B PARA G
            
            \r\t------------------------------------------------------
            
            \r\tOPERACAO: `
        );
        clean();
        
        switch (operacao) {
            case 1:
                elemento_R = remover_Topo(lista_1);
                if (elemento_R) {
                    adicionar_Topo(lista_2, elemento_R);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA R ESTÁ VAZIA...`)
                }
                break;
            case 2:
                elemento_R = remover_Topo(lista_1);
                if (elemento_R) {
                    adicionar_Topo(lista_3, elemento_R);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA R ESTÁ VAZIA...`)
                }
                break;
            case 3:
                elemento_G = remover_Topo(lista_2);
                if (elemento_G) {
                    adicionar_Topo(lista_1, elemento_G);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA G ESTÁ VAZIA...`)
                }
                break;
            case 4:
                elemento_G = remover_Topo(lista_2);
                if (elemento_G) {
                    adicionar_Topo(lista_3, elemento_G);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA G ESTÁ VAZIA...`)
                }
                break;
            case 5:
                elemento_B = remover_Topo(lista_3);
                if (elemento_B) {
                    adicionar_Topo(lista_1, elemento_B);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA B ESTÁ VAZIA...`)
                }
                break;
            case 6:
                elemento_B = remover_Topo(lista_3);
                if (elemento_B) {
                    adicionar_Topo(lista_2, elemento_B);
                    jogadas++;
                } else {
                    print(`\n\tA LISTA B ESTÁ VAZIA...`)
                }
                break;
        }
        validacao = verificar_Validade(lista_1, lista_2, lista_3);
    }
    print(`\r\t----------- HANOI RGB -----------`);
    print(`\r\t${mostrar_Torres(lista_1, lista_2, lista_3)}`)
    print(`\n\tParabens ${nome_Jogador}, você completou em ${jogadas} jogadas!\n`);
    return jogadas;
}

export function verificar_Vencedor(jogadas_J1, nome_J1, jogadas_J2, nome_J2) {
    let texto = ``;

    if (jogadas_J1 < jogadas_J2) {
        texto = (`\r\tO JOGADOR ${nome_J1} VENCEU COM ${jogadas_J2 - jogadas_J1} JOGADA A MENOS QUE O JOGADOR ${nome_J2}!`);
    } else if (jogadas_J2 < jogadas_J1) {
        texto = (`\r\tO JOGADOR ${nome_J2} VENCEU COM ${jogadas_J1 - jogadas_J2} JOGADA A MENOS QUE O JOGADOR ${nome_J1}!`);
    } else {
        texto = (`\r\tA PARTIDA TERMINOU EMPATADA!`);
    }

    return texto;
}