import { get_text, print } from "../../utils/io_utils.js";

function main() {
    const HORARIO_FORNECIDO = get_text(`Digite um horario qualquer: `).split(` `);
    const [HORA, MINUTO, SEGUNDO] = HORARIO_FORNECIDO[0].split(`:`).map(Number);
    const AM = `AM`, PM = `PM`;
    let novoHorario;

    if (HORARIO_FORNECIDO.includes(AM) || HORARIO_FORNECIDO.includes(PM)) {
        novoHorario = converterMilitar(HORARIO_FORNECIDO[1], HORA, MINUTO, SEGUNDO);
        print(novoHorario);

    } else {
        novoHorario = converterAMPM(HORA, MINUTO, SEGUNDO);
        print(novoHorario);
    }
}

function converterMilitar(nocao, hora, minuto, segundo) {
    let novaHora, horario;

    if (nocao === `AM`) {
        novaHora = hora;
        horario = (`${novaHora <= 9 ? `0` + novaHora : novaHora}:${minuto}:${segundo}`);
    } else {
        novaHora = hora + 12;
        if (novaHora === 24) {
            novaHora = 0;
        }
        horario = (`${novaHora <= 9 ? `0` + novaHora : novaHora}:${minuto}:${segundo}`);
    }
    return horario;

}

function converterAMPM(hora, minuto, segundo) {
    let novaHora, horario;

    if (hora >= 12) {
        novaHora = hora - 12;
        if (novaHora < 0) {
            novaHora = 0;
        }
        horario = (`${novaHora <= 9 ? `0` + novaHora : novaHora}:${minuto}:${segundo} PM`);
    } else {
        if (hora === 0) {
            novaHora = hora;
        } else {
            novaHora = hora + 12;
        }
        horario = (`${novaHora <= 9 ? `0` + novaHora : novaHora}:${minuto}:${segundo} AM`);
    }
    return horario;
}

main();