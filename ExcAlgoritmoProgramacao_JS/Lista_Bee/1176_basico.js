import { question } from "readline-sync";

function main() {
    const N = 60;
    let fibonnaci = [BigInt(0), BigInt(1)];
    
    for (let i = 2; i <= N ; i++) {
        let soma = BigInt(fibonnaci[i - 1] + fibonnaci[i - 2]);
        fibonnaci.push(soma);
        
    }

    const M = get_Number();
    
    for (let j = 0; j < M; j++) {
        const valor = get_Number();
        
        if(valor >= 0 && valor <= 60) {
            print(`Fib(${valor}) = ${fibonnaci[valor]}`);
            
        }

    }

}

function get_Number() {
    return Number(question());
}

function print(texto) {
    return console.log(texto);
}

main();