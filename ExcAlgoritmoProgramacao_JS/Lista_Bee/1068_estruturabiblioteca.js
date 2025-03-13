import { question } from 'readline-sync'

function main() {
    let frase = get_Text().split(``);

    while (frase.length !== 0) {
        let aux = [];
        let balanceado = true;
        for (let i = 0; i < frase.length; i++) {
            let atual = frase[i];

            if (atual === `(`) {
                aux.unshift(atual);
            } else if (atual === `)`) {
                if (aux.length === 0) {
                    balanceado = false;
                    break;
                }
                let topo = aux[0];
                aux.shift();

                if(atual === `)` && topo != `(`) {
                    balanceado = false;
                    break;
                }
            }
        }

        if (aux.length !== 0) {
            balanceado = false;
        }

        if (balanceado) {
            print(`correct`);
        } else {
            print(`incorrect`);
        }

        frase = get_Text().split(``);
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();