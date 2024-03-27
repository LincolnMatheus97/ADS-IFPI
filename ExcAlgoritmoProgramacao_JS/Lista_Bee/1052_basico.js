import { question } from "readline-sync";

function main() {
    const MOUNTH = get_number();
    let menssage;

    menssage = (MOUNTH === 1) ? `January` : (MOUNTH === 2) ? `February` : (MOUNTH === 3) ? `March` : (MOUNTH === 4) ?
        `April` : (MOUNTH === 5) ? `May` : (MOUNTH === 6) ? `June` : (MOUNTH === 7) ? `July` : (MOUNTH === 8) ? `August` :
            (MOUNTH === 9) ? `September` : (MOUNTH === 10) ? `October` : (MOUNTH === 11) ? `November` : `December`;

    print(menssage);
}

function get_number() {
    return parseInt(question());
}

function print(texto) {
    return console.log(texto);
}

main();