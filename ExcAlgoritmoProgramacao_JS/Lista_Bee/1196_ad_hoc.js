import { question } from 'readline-sync'

function main() {
    const tecladoMap = {
        '1': '`', '2': '1', '3': '2', '4': '3', '5': '4', '6': '5', '7': '6', '8': '7', '9': '8', '0': '9', '-': '0', '=': '-',
        'W': 'Q', 'E': 'W', 'R': 'E', 'T': 'R', 'Y': 'T', 'U': 'Y', 'I': 'U', 'O': 'I', 'P': 'O', '[': 'P', ']': '[', '\\': ']',
        'S': 'A', 'D': 'S', 'F': 'D', 'G': 'F', 'H': 'G', 'J': 'H', 'K': 'J', 'L': 'K', ';': 'L', '\'': ';',
        'X': 'Z', 'C': 'X', 'V': 'C', 'B': 'V', 'N': 'B', 'M': 'N', ',': 'M', '.': ',', '/': '.',
    };

    while (true) {
        let fraseCodificada = get_Text();
        if (!fraseCodificada) break;

        let fraseDecodificada = ``;

        for (let i = 0; i < fraseCodificada.length; i++) {
            let caractere = fraseCodificada[i];
            if (caractere === ` `) {
                fraseDecodificada += ` `;
            } else {
                fraseDecodificada += tecladoMap[caractere] || caractere;
            }
        }
        print(fraseDecodificada);
    }
}

function get_Text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();