import { question } from "readline-sync";

function main() {
    let matriz = [];
    let ordem = 12;
    let linhaDesejada = get_Number();
    let operacao = get_Text().toUpperCase();
    let s = 0;

    if(linhaDesejada >= 0 && linhaDesejada <= 11) {
        for(let i = 0; i < ordem; i++) {
            let linha = [];
    
            for(let j = 0; j < ordem; j++) {
                let valor = get_Number();
                linha.push(valor);
    
                if(i === linhaDesejada) {
                    s += valor;
                }
    
            }
            matriz.push(linha);
    
        }

    }
    let m = s / ordem;
    
    if(operacao === `S`) {
        print(`${s.toFixed(1)}`);

    }else if(operacao === `M`) {
        print(`${m.toFixed(1)}`);

    }

}

function get_Number() {
    return Number(question());
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();