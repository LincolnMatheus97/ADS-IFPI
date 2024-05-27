import { get_number, get_text, print } from "../utils/io_utils.js";
import { exibirJogoDaVelha, jogoDaVelha } from "./criarJogo.js";
import { atualizarMatriz, jogadaDaMaquina, verificarVitoria } from "./funcionabilidadeJogo.js";

function main() {
    let opcao = -1;
    let player, escolhaPlayer1, escolhaPlayer2, maquina, matriz, jogada;

    while (opcao !== 3) {
        print(`
        -----------------------
            JOGO DA VELHA
        -> 1 - Vs Computador
        -> 2 - Vs Jogador
        -> 3 - Sair do Jogo
        -----------------------`);
        opcao = get_number(`\tOpcao: `);

        switch (opcao) {

            case 1:
                let escolha = -1;

                while (escolha !== 3) {
                    print(`
                    \r\t-----------------------
                    \r\t    JOGO DA VELHA
                    \r\t-> 1 - Computador começa
                    \r\t-> 2 - Você começa
                    \r\t-> 3 - Voltar para o menu Principal
                    \r\t-----------------------`);
                    escolha = get_number(`\r\tOpcao: `);

                    switch (escolha) {
                        case 1:
                            player = `Maquina`;
                            maquina = Math.random() < 0.5 ? `X` : `O`;
                            escolhaPlayer1 = maquina === `X` ? `O` : `X`;

                            matriz = jogoDaVelha();

                            for (let turno = 0; turno < 9; turno++) {
                                print(exibirJogoDaVelha(matriz));

                                if (player === `Maquina`) {
                                    print(`\tA maquina está fazendo sua jogada...`);
                                    jogada = jogadaDaMaquina(matriz, maquina, escolhaPlayer1);
                                } else {
                                    print(`\tJogador 1, faça sua jogada.`);
                                    jogada = get_number(`\tDigite o numero que deseja fazer sua jogada: `);
                                }

                                if (atualizarMatriz(matriz, jogada, player === `Maquina` ? maquina : escolhaPlayer1)) {
                                    if (verificarVitoria(matriz, player === `Maquina` ? maquina : escolhaPlayer1)) {
                                        print(exibirJogoDaVelha(matriz));
                                        print(`\tMaquina venceu!`);
                                        break;
                                    }
                                    if (turno === 8) {
                                        print(`\tEmpate!`);
                                    }
                                    player = player === `Maquina` ? `1` : `Maquina`;
                                } else {
                                    print(`\tJogada Inválida. Tente novamente.`);
                                    turno--;
                                }
                            }
                            print(`\tJogo encerrado.`);
                            break;
                        case 2:
                            player = `Jogador 1`;
                            escolhaPlayer1 = get_text(`\tJogador 1, escolha X ou O: `).toUpperCase();
                            maquina = escolhaPlayer1 === `X` ? `O` : `X`;

                            matriz = jogoDaVelha();

                            for (let turno = 0; turno < 9; turno++) {
                                print(exibirJogoDaVelha(matriz));

                                if (player === `Jogador 1`) {
                                    print(`\tJogador 1, faça sua jogada.`);
                                    jogada = get_number(`\tDigite o numero que deseja fazer sua jogada: `);
                                } else {
                                    print(`\tA maquina está fazendo sua jogada...`);
                                    jogada = jogadaDaMaquina(matriz, maquina, escolhaPlayer1);
                                }

                                if (atualizarMatriz(matriz, jogada, player === `Jogador 1` ? escolhaPlayer1 : maquina)) {
                                    if (verificarVitoria(matriz, player === `Jogador 1` ? escolhaPlayer1 : maquina)) {
                                        print(exibirJogoDaVelha(matriz));
                                        print(`\tMaquina venceu!`);
                                        break;
                                    }
                                    if (turno === 8) {
                                        print(`\tEmpate!`);
                                    }
                                    player = player === `Jogador 1` ? `Maquina` : `Jogador 1`;
                                } else {
                                    print(`\tJogada Inválida. Tente novamente.`);
                                    turno--;
                                }
                            }
                            print(`\tJogo encerrado.`);
                            break;
                        case 3:
                            print(`\tVoltando para o menu principal...`);
                            break;
                        default:
                            print(`\tOpção inválida. Tente novamente.`);
                    }
                }
                break;

            case 2:
                player = `1`;
                escolhaPlayer1 = get_text(`\tJogador 1, escolha X ou O: `).toUpperCase();
                escolhaPlayer2 = escolhaPlayer1 === `X` ? `O` : `X`;

                matriz = jogoDaVelha();

                for (let turno = 0; turno < 9; turno++) {
                    print(exibirJogoDaVelha(matriz));

                    print(`\tJogador ${player}, faça sua jogada.`);
                    jogada = get_number(`\tDigite o numero que deseja fazer sua jogada: `);

                    if (atualizarMatriz(matriz, jogada, player === `1` ? escolhaPlayer1 : escolhaPlayer2)) {
                        if (verificarVitoria(matriz, player === `1` ? escolhaPlayer1 : escolhaPlayer2)) {
                            print(exibirJogoDaVelha(matriz));
                            print(`\tJogador ${player} venceu!`);
                            break;
                        }
                        if (turno === 8) {
                            print(`\tEmpate !`);
                        }
                        player = player === `1` ? `2` : `1`;
                    } else {
                        print(`\tJogada Inválida. Tente novamente.`);
                        turno--;
                    }
                }
                print(`\tJogo encerrado.`);
                break;

            case 3:
                print(`\tSaindo do Jogo...`);
                break;

            default:
                print(`\tOpção inválida. Tente novamente.`);
        }
    }
}

main();