import fs from 'fs';
import { get_number, get_positive_number, print } from "../utils/io_utils.js";

function main() {
    const LISTA_ALUNOS = lerListaAlunos(`Lista_de_Alunos.txt`);
    let listaAlunoCopia = [...LISTA_ALUNOS];

    let opcao = -1;
    let grupos = [];

    while (opcao !== 0) {
        print(`
                =========================================================================
                                            SORTEIO DE GRUPOS
        
                    Total de Alunos: ${LISTA_ALUNOS.length}
                    1 - Excluir
                    2 - Sortear
                    3 - Mostrar Grupos
                    4 - Gravar Resultado
                    0 - Sair

                =========================================================================`);
        opcao = get_number(`\t\tEscolha uma opcao: `);

        switch (opcao) {
            case 1:
                let excluirAluno = -1;

                while (excluirAluno !== 0) {
                    listaAlunoCopia.forEach((aluno, index) => {
                        print(`\t\t${index + 1}: ${aluno}`);
                    });

                    excluirAluno = get_number(`
                    \r\t\tDigite o numero do aluno que deseja excluir (ou "0" para sair): `);

                    const NUMEROALUNO = parseInt(excluirAluno, 10);
                    if (NUMEROALUNO >= 1 && NUMEROALUNO <= LISTA_ALUNOS.length) {
                        LISTA_ALUNOS.splice(NUMEROALUNO - 1, 1);
                        listaAlunoCopia.splice(NUMEROALUNO - 1, 1);
                    }

                }
                break;
            case 2:
                const NUM_GRUPOS = get_positive_number(`\t\tEm quantos grupos voce deseja separar: `);
                grupos = sortearGrupos(listaAlunoCopia, NUM_GRUPOS);
                listaAlunoCopia = [...LISTA_ALUNOS];
                break;
            case 3:
                exibirGrupos(grupos);
                break;
            case 4:
                let escolha = get_number(`
                Realmente deseja continuar com a gravacao do resultado. Se sim o programa gravara e vai ser 
                encerrado automaticamente. Se deseja continuar digite 0, se nao digite qualquer outro numero: `);
                if(escolha === 0) {
                    opcao = 0;
                    const RESULTADO = `Resultado_Sorteio.txt`;
                    gravarResultado(RESULTADO, grupos);
                    print(`
                    \r\t\tResultado do Sorteio foi gravado em Resultado_Sorteio.txt`);
                    print(`
                    \r\t\tSaindo do Programa...`);
                    break;
                }
                break;
            case 0:
                print(`\t\tSaindo do Programa...`);
                break;
            default:
                print(`\t\tOpção inválida. Tente Novamente...`);
                break;
        }
    }
}

function lerListaAlunos(nomeArquivo) {
    const DATA = fs.readFileSync(nomeArquivo, `utf-8`);
    return DATA.split(`\n`);
}

function sortearGrupos(lista, grupos) {
    const ALUNOS_EMBARALHADOS = embaralharLista(lista);
    const GRUPOS = [];
    const ALUNOS_POR_GRUPO = Math.floor(ALUNOS_EMBARALHADOS.length / grupos);
    let inicioIndex = 0;
    let count = 0;

    while (count < grupos - 1) {
        GRUPOS.push(ALUNOS_EMBARALHADOS.slice(inicioIndex, inicioIndex + ALUNOS_POR_GRUPO));
        inicioIndex += ALUNOS_POR_GRUPO;

        count++;
    }

    GRUPOS.push(ALUNOS_EMBARALHADOS.slice(inicioIndex));

    return GRUPOS;
}

function embaralharLista(lista) {
    return lista.sort(() => Math.random() - 0.5);
}

function exibirGrupos(grupos) {
    grupos.forEach((grupo, index) => {
        const ALUNOS_ORDENADOS = grupo.sort();
        print(`
        \t-------------------------------------------------------
                Grupo ${index + 1}:`);
        ALUNOS_ORDENADOS.forEach(aluno => print(`\t\t${aluno.trim()}`));
    })
}

function gravarResultado(resultado, grupos) {
    let conteudo = ``;

    grupos.forEach((grupo, index) => {
        const ALUNOS_FORMATADOS = grupo.join(`\n`).trim();
        conteudo += `Grupo ${index + 1}:\n${ALUNOS_FORMATADOS}\n\n`;
    });

    fs.writeFileSync(resultado, conteudo);
}

main();