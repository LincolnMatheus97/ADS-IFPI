import { question } from "readline-sync";

function main() {
    const T = get_Number();
    if(T <= 100) {
        for (let i = 1; i <= T; i++) {
            let escolha = get_Text().split(` `);
    
            if (escolha[0] === `tesoura`) {
                if (escolha[1] === `papel`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `lagarto`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `pedra`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else if (escolha[1] === `Spock`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else {
                    print(`Caso #${i}: De novo!`)
                }
            } else if (escolha[0] === `papel`) {
                if (escolha[1] === `pedra`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `Spock`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `tesoura`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else if (escolha[1] === `lagarto`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else {
                    print(`Caso #${i}: De novo!`)
                }
            } else if (escolha[0] === `pedra`) {
                if (escolha[1] === `lagarto`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `tesoura`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `papel`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else if (escolha[1] === `Spock`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else {
                    print(`Caso #${i}: De novo!`)
                }
            } else if (escolha[0] === `lagarto`) {
                if (escolha[1] === `Spock`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `papel`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `tesoura`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else if (escolha[1] === `pedra`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else {
                    print(`Caso #${i}: De novo!`)
                }
            } else if (escolha[0] === `Spock`) {
                if (escolha[1] === `tesoura`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `pedra`) {
                    print(`Caso #${i}: Bazinga!`);
                } else if (escolha[1] === `papel`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else if (escolha[1] === `lagarto`) {
                    print(`Caso #${i}: Raj trapaceou!`);
                } else {
                    print(`Caso #${i}: De novo!`)
                }
            }
        }
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