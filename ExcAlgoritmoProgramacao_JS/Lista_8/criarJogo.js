export function jogoDaVelha() {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < 5; i++) {
        let linha = [];

        for (let j = 0; j < 5; j++) {
            if ((i === 0 && j === 1) || (i === 2 && j === 1) || (i === 4 && j === 1) ||
                (i === 0 && j === 3) || (i === 2 && j === 3) || (i === 4 && j === 3)) {
                linha.push(`|`);
            } else if (i === 1 || i === 3) {
                linha.push(`-`);
            } else {
                linha.push(contador);
                contador++;
            }

        }
        matriz.push(linha);

    }
    return matriz;

}

export function exibirJogoDaVelha(matriz) {
    let jogoDaVelha = ``;
    for (let m = 0; m < matriz.length; m++) {
        jogoDaVelha += `\n\t\t${matriz[m].join(` `)}`;
    }
    return `
    \t----------------------------
    ${jogoDaVelha}
    
    \t----------------------------`;
}
