import { question } from "readline-sync";

// Função principal
function main() {
    let count = 0;
    let casos = get_Text();

    while (casos !== '0 0') {
        count++;
        let [nStr, bStr] = casos.trim().split(' ');
        let n = BigInt(nStr);
        let b = BigInt(bStr);

        let ultimo_Digito_BaseB;

        if (n === 0n) {
            // Para n = 0, C(n) = 1
            ultimo_Digito_BaseB = 1n % b;
        } else {
            // Calcula F(n+1) mod b usando Fast Doubling
            let F_n_plus_1 = fibMod(n + 1n, b);
            // Calcula C(n) = (2 * F(n+1) - 1) mod b
            let C_n = (2n * F_n_plus_1 - 1n) % b;
            ultimo_Digito_BaseB = C_n;
        }

        // Imprime o resultado no formato especificado
        print(`Case ${count}: ${n} ${b} ${ultimo_Digito_BaseB}`);

        // Lê o próximo caso de teste
        casos = get_Text();
    }
}

// Função para ler a entrada do usuário
function get_Text() {
    return question();
}

// Função Fast Doubling para calcular F(n) mod m
function fibMod(n, m) {
    let a = 0n;
    let b = 1n;
    let mBig = m;

    // Obtém a representação binária de n
    let bits = n.toString(2);

    // Itera sobre cada bit da representação binária
    for (let i = 0; i < bits.length; i++) {
        // Calcula c = a * (2*b - a) mod m
        let c = (a * ((2n * b) - a + mBig)) % mBig;
        // Calcula d = a^2 + b^2 mod m
        let d = (a * a + b * b) % mBig;

        if (bits[i] === '0') {
            // Atualiza a e b para F(2k) e F(2k+1)
            a = c;
            b = d;
        } else {
            // Atualiza a e b para F(2k+1) e F(2k+2)
            a = d;
            b = (c + d) % mBig;
        }
    }

    return a;
}

// Função para imprimir a saída
function print(texto) {
    console.log(texto);
}

// Executa a função principal
main();