import { question } from "readline-sync";

function main() {
    let reclamacao = get_Text();

    while (reclamacao !== null && reclamacao !== ``) {
        let numeroReclamacao = parseInt(reclamacao);

        if (numeroReclamacao === 0) {
            print(`vai ter copa!`);
        } else {
            print(`vai ter duas!`)
        }

        reclamacao = get_Text();
    }
}

function get_Text() {
    return question();
}

function print(text) {
    return console.log(text)
}

main();