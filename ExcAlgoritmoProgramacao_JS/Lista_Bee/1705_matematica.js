import { question } from "readline-sync";

function main() {
    let divisores_Map = new Map();
    let entrada = get_Number();

    while (entrada !== 0) {
        if (divisores_Map.has(entrada)) {
            print(divisores_Map.get(entrada));
        } else {
            let resultado = encontrar_Mult_Binario(entrada);
            divisores_Map.set(entrada, resultado);
            print(resultado);
        }

        entrada = get_Number();
    }
}

function get_Number() {
    return Number(question());
}

function encontrar_Mult_Binario(numero) {
    let queue = ['1'];
    let visitados = new Set();

    while (queue.length > 0) {
        let atual = queue.shift();
        let multiplo = BigInt(atual);

        if (multiplo % BigInt(numero) === BigInt(0)) {
            if (multiplo < BigInt(10 ** 12)) {
                return multiplo.toString();
            } else {
                return `-1`;
            }
        }

        let prox_Zero = atual + '0';
        let prox_Um = atual + '1';

        if (BigInt(prox_Zero) < BigInt(10 ** 12) && !visitados.has(prox_Zero)) {
            queue.push(prox_Zero);
            visitados.add(prox_Zero);
        }

        if (BigInt(prox_Um) < BigInt(10 ** 12) && !visitados.has(prox_Um)) {
            queue.push(prox_Um);
            visitados.add(prox_Um);
        }
    }

    return `-1`;
}

function print(texto) {
    return console.log(texto);
}

main();