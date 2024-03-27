import { question } from "readline-sync";

function main() {
    const INPUT_1 = get_text().toUpperCase();
    const INPUT_2 = get_text().toUpperCase();
    const INPUT_3 = get_text().toUpperCase();

    let output;

    if (INPUT_1 === `VERTEBRADO`) {
        if (INPUT_2 === `AVE`) {
            if (INPUT_3 === `CARNIVORO`) {
                output = `aguia`;
            } else {
                output = `pomba`;
            }
        } else {
            if (INPUT_3 === `ONIVORO`) {
                output = `homem`;
            } else {
                output = `vaca`;
            }
        }
    } else {
        if (INPUT_2 === `INSETO`) {
            if (INPUT_3 === `HEMATOFAGO`) {
                output = `pulga`;
            } else {
                output = `lagarta`;
            }
        } else {
            if (INPUT_3 === `HEMATOFAGO`) {
                output = `sanguessuga`;
            } else {
                output = `minhoca`;
            }
        }
    }
    print(`${output}`);
}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

main();