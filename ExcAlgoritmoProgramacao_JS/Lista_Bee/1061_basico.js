import { question } from "readline-sync";

function main() {
    const DAYSTAR = get_text().split(` `);
    const TIMESTART = get_text().split(`:`);
    const DAYEND = get_text().split(` `);
    const TIMEEND = get_text().split(`:`);

    let dayStart = parseInt(DAYSTAR[1]);
    let hourStart = parseInt(TIMESTART[0]);
    let minStart = parseInt(TIMESTART[1]);
    let secondStart = parseInt(TIMESTART[2]);
    let dayEnd = parseInt(DAYEND[1]);
    let hourEnd = parseInt(TIMEEND[0]);
    let minEnd = parseInt(TIMEEND[1]);
    let secondEnd = parseInt(TIMEEND[2]);

    let durationTime = get_time(dayStart, hourStart, minStart, secondStart, dayEnd, hourEnd, minEnd, secondEnd);
    
    let w = durationTime[0];
    let x = durationTime[1];
    let y = durationTime[2];
    let z = durationTime[3];

    print(`${w} dia(s)`);
    print(`${x} hora(s)`);
    print(`${y} minuto(s)`);
    print(`${z} segundo(s)`);

}

function get_text() {
    return question();
}

function print(texto) {
    return console.log(texto);
}

function get_time(num1, num2, num3, num4, num5, num6, num7, num8) {
    let durationSecond = (((num5 * 86_400) + (num6 * 3_600) + (num7 * 60) + num8) - ((num1 * 86_400) + (num2 * 3_600) + (num3 * 60) + num4));
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;

    if(durationSecond <= 0) {
        durationSecond += 86_400;
        
    }
    day = Math.floor(durationSecond / 86_400);
    hour = Math.floor(durationSecond % 86_400 / 3_600);
    minute = Math.floor((durationSecond % 3_600) / 60);
    second = durationSecond % 60;
    return [day ,hour, minute, second];

}

main();