/*
Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por 
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula: 
Média Final =   (2 * nota1) + (3 * nota2) + (5 * nota3) 
10 
Se a média final for igual ou superior a 7, o aluno está  aprovado; se a média final for inferior a 7, o 
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total 
de alunos da turma. 
*/

import { get_number, get_positive_number, print } from "../utils/io_utils.js";

function main() {

    let aprovados = 0;
    let reprovados = 0;
    let total_alunos = 0;

    while (true) {
        let matricula = get_number(`Digite a matricula do aluno: `);

        if (matricula === 0) {
            break;
        }

        let nota_1 = get_positive_number(`Digite a primeira nota do aluno: `);
        let nota_2 = get_positive_number(`Digite a segunda nota do aluno: `);
        let nota_3 = get_positive_number(`Digite a terceira nota do aluno: `);

        let media = ((2 * nota_1) + (3 + nota_2) + (5 + nota_3)) / 10;

        if (media >= 7) {
            aprovados++;
        } else {
            reprovados++;
        }

        total_alunos++;
    }
    print(`O total de aprovados é  ${aprovados} e de reprovados ${reprovados}. E o total de alunos da turma é de ${total_alunos}.`);
}

main();