export function atualizarMatriz(matriz, jogada, simbolo) {      
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {            
            if (matriz[i][j] === jogada) {                      
                matriz[i][j] = simbolo;
                return true;
            }
        }
    }
    return false;
}

export function verificarVitoria(matriz, simbolo) {                 
    const combinacao = [
        [matriz[0][0], matriz[0][2], matriz[0][4]],
        [matriz[2][0], matriz[2][2], matriz[2][4]],
        [matriz[4][0], matriz[4][2], matriz[4][4]],                 
        [matriz[0][0], matriz[2][0], matriz[4][0]],                 
        [matriz[0][2], matriz[2][2], matriz[4][2]],                 
        [matriz[0][4], matriz[2][4], matriz[4][4]],                 
        [matriz[0][0], matriz[2][2], matriz[4][4]],
        [matriz[0][4], matriz[2][2], matriz[4][0]]
    ];

    return combinacao.some(linha => linha.every(par => par === simbolo));
}

export function jogadaDaMaquina(matriz, simboloMaquina, simboloJogador) {

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] !== simboloMaquina && matriz[i][j] !== simboloJogador) {           
                let jogadaTemporaria = matriz[i][j];                                            
                matriz[i][j] = simboloMaquina;                                                  
                if (verificarVitoria(matriz, simboloMaquina)) {                                 
                    matriz[i][j] = jogadaTemporaria;
                    return numeroDaJogada(i, j);
                }
                matriz[i][j] = jogadaTemporaria;
            }
        }
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {                                            
            if (matriz[i][j] !== simboloMaquina && matriz[i][j] !== simboloJogador) {           
                let jogadaTemporaria = matriz[i][j];
                matriz[i][j] = simboloJogador;
                if (verificarVitoria(matriz, simboloJogador)) {
                    matriz[i][j] = jogadaTemporaria;
                    return numeroDaJogada(i, j);
                }
                matriz[i][j] = jogadaTemporaria;
            }
        }
    }
    
    if (posicaoDisponivel(matriz, 2, 2)) {
        return numeroDaJogada(2, 2);
    }

    
    const cantos = [[0, 0], [0, 4], [4, 0], [4, 4]];
    for (let i = 0; i < cantos.length; i++) {
        const [linha, coluna] = cantos[i];
        if (posicaoDisponivel(matriz, linha, coluna)) {
            return numeroDaJogada(linha, coluna);
        }
    }

    
    const bordas = [[0, 2], [2, 0], [2, 4], [4, 2]];
    for (let i = 0; i < bordas.length; i++) {
        const [linha, coluna] = bordas[i];
        if (posicaoDisponivel(matriz, linha, coluna)) {
            return numeroDaJogada(linha, coluna);
        }
    }
    
}

function numeroDaJogada(linha, coluna) {
    const coordenadas = [                                                                   
        [0, 0], [0, 2], [0, 4],                                                             
        [2, 0], [2, 2], [2, 4],                                                             
        [4, 0], [4, 2], [4, 4]
    ];
    for (let i = 0; i < coordenadas.length; i++) {
        if (linha === coordenadas[i][0] && coluna === coordenadas[i][1]) {
            return i + 1;
        }
    }
}

function posicaoDisponivel(matriz, linha, coluna) {                                        
    return matriz[linha][coluna] !== 'X' && matriz[linha][coluna] !== 'O';                 
}