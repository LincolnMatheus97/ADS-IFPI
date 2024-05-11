import { question } from "readline-sync";

function main() {
    let a = get_Number();

    while (a > 0) {
        for (let i = 0; i < a; i++) {
            let codigo = get_Text();
            let letraCorrespondente = determinarLetra(codigo);
            print(letraCorrespondente);
        }

        a = get_Number();

    }
}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function determinarLetra(codigo) {
    const alfabeto = [
        { codigo: '.', letra: `a` },
        { codigo: '..', letra: `b` },
        { codigo: '...', letra: `c` },
        { codigo: '. .', letra: `d` },
        { codigo: '.. ..', letra: `e` },
        { codigo: '... ...', letra: `f` },
        { codigo: '. . .', letra: `g` },
        { codigo: '.. .. ..', letra: `h` },
        { codigo: '... ... ...', letra: `i` },
        { codigo: '. . . .', letra: `j` },
        { codigo: '.. .. .. ..', letra: `k` },
        { codigo: '... ... ... ...', letra: `l` },
        { codigo: '. . . . .', letra: `m` },
        { codigo: '.. .. .. .. ..', letra: `n` },
        { codigo: '... ... ... ... ...', letra: `o` },
        { codigo: '. . . . . .', letra: `p` },
        { codigo: '.. .. .. .. .. ..', letra: `q` },
        { codigo: '... ... ... ... ... ...', letra: `r` },
        { codigo: '. . . . . . .', letra: `s` },
        { codigo: '.. .. .. .. .. .. ..', letra: `t` },
        { codigo: '... ... ... ... ... ... ...', letra: `u` },
        { codigo: '. . . . . . . .', letra: `v` },
        { codigo: '.. .. .. .. .. .. .. ..', letra: `w` },
        { codigo: '... ... ... ... ... ... ... ...', letra: `x` },
        { codigo: '. . . . . . . . .', letra: `y` },
        { codigo: '.. .. .. .. .. .. .. .. ..', letra: `z` },
    ];
    const letracorrespondente = alfabeto.find(letra => letra.codigo === codigo);
    return letracorrespondente.letra;
}

function print(texto) {
    return console.log(texto);
}

main();