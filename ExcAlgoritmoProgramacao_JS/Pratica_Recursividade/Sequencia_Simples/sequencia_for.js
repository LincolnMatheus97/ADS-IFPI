import { get_text, print } from "../utils/io.js";

function main() {
    let [a, b] = get_text(`Digite a faixa de numeros que voce deseja, Exemplo: 10 20: `).split(` `).map(Number);
    let diferenca = Math.abs(a - b);

    for (let i = 0; i < diferenca; i++) {
        print(a);
        
        if (b < 0) {
            a--;
        } else {
            a++;
        }
    }
    print(b);
}

main();