import { get_number, percentual, print } from "../utils/io_utils.js";

function main() {                                                                                                           // >LEGENDA FOR ME<
    const A = get_number(`Digite um valor entre (0 a 100), referente ao criterio A: `);                                 
    const B = get_number(`Digite um valor entre (0 a 100), referente ao criterio B: `);
    const C = get_number(`Digite um valor entre (0 a 100), referente ao criterio A: `);

    if (A >= 0 && A <= 100 && B >= 0 && B <= 100 && C >= 0 && C <= 100) {
        let valueScore1_0 = (percentual(260, A)) + (percentual(570, B)) + (percentual(170, C));                        //valueScore1_0 = valor score 1.0
        let valueScore2_0 = (percentual(620, A)) + (percentual(190, B)) + (percentual(190, C));                       //valueScore2_0 = valor score 2.0

        let categoryScore1_0 = indicateCategory1_0(valueScore1_0);                                                  //categoryScore1_0 = categoria score 1.0                                   
        let categoryScore2_0 = indicateCategory2_0(valueScore2_0);                                                 //categoryScore2_0 = vategoria score 2.0

        print(`
        ______________________________________________________________________________
        <><><><><><><><><>              SERASA SCORE                <><><><><><><><><>
        
        -> Critério A   --------------------------------------      ${A}%
        -> Critério B   --------------------------------------      ${B}%
        -> Critério C   --------------------------------------      ${C}%
        ------------------------------------------------------------------------------
        
        -> Score 1.0
            Valor   -----------------------------------------       ${valueScore1_0.toFixed(2)}
            Categoria   -------------------------------------       ${categoryScore1_0}
        -> Score 2.0
            Valor   -----------------------------------------       ${valueScore2_0.toFixed(2)}
            Categoria   -------------------------------------       ${categoryScore2_0}
        _____________________________________________________________________________`);

    } else {
        print(`\nDigite um valor válido !`);
    }

}

function indicateCategory1_0(value) {
    let category = ``;

    if (value >= 0 && value <= 400) {
        category = `BAIXO`;
    } else if (value <= 600) {
        category = `REGULAR`;
    } else if (value <= 800) {
        category = `BOM`;
    } else {
        category = `MUITO BOM`;
    }

    return category;
}

function indicateCategory2_0(value) {
    let category = ``;

    if (value >= 0 && value <= 300) {
        category = `BAIXO`;
    } else if (value <= 500) {
        category = `REGULAR`;
    } else if (value <= 700) {
        category = `BOM`;
    } else {
        category = `MUITO BOM`;
    }

    return category;
}

main();