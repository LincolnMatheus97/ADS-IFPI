import fs from 'fs';
import { question } from "readline-sync";

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
                    listaAlunoCopia.forEach((aluno, index) => {     //Usei aqui o forEach para iterar e numerar a lista e exibir para usuario.
                        print(`\t\t${index + 1}: ${aluno}`);    
                    });

                    excluirAluno = get_number(`
                    \r\t\tDigite o numero do aluno que deseja excluir (ou "0" para sair): `);   //Aqui pedi o número do aluno que mostrei lá em cima.

                    const NUMEROALUNO = parseInt(excluirAluno, 10);         //Especifico explicitamente que é na base 10, para evitar ambiguidade.
                    if (NUMEROALUNO >= 1 && NUMEROALUNO <= LISTA_ALUNOS.length) {
                        LISTA_ALUNOS.splice(NUMEROALUNO - 1, 1);            //Excluo o aluno da lista original
                        listaAlunoCopia.splice(NUMEROALUNO - 1, 1);         //Excluo o aluno da lista cópia.
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
    const DATA = fs.readFileSync(nomeArquivo, `utf-8`);         //Ler o conteúdo do arquivo.
    return DATA.split(`\n`);                                    //Dividir o conteúdo em linhas e criar a lista de alunos.
}

function sortearGrupos(lista, grupos) {
    const ALUNOS_EMBARALHADOS = embaralharLista(lista);         //Usei essa função para embaralhar os alunos antes de dividir nos grupos.
    const GRUPOS = [];
    const ALUNOS_POR_GRUPO = Math.floor(ALUNOS_EMBARALHADOS.length / grupos);
    let inicioIndex = 0;
    let count = 0;

    while (count < grupos - 1) {
        GRUPOS.push(ALUNOS_EMBARALHADOS.slice(inicioIndex, inicioIndex + ALUNOS_POR_GRUPO));        //Adicionei os alunos e fui dividindo nos grupos de modo que,
        inicioIndex += ALUNOS_POR_GRUPO;                                                            //os grupos fiquem de tamanho aproximados.

        count++;
    }

    GRUPOS.push(ALUNOS_EMBARALHADOS.slice(inicioIndex));        //Já aqui adiciona o ultimo grupo, de modo que se a divisão não for exata,
    return GRUPOS;                                              //ele fica maior que os outros.
}

function embaralharLista(lista) {
    return lista.sort(() => Math.random() - 0.5);       //Aqui diminui 0.5 para fazer com que a comparação seja positiva ou negativa,
}                                                       //no sentindo de que, quando os elementos são comparados se retornar numero 
                                                        //positivo ele troca de lugar os elementos se for negativo ele mantem no lugar.
                                                        //Isso para todos os elementos da lista.

function exibirGrupos(grupos) {
    grupos.forEach((grupo, index) => {           //Uso novamente o forEach para iterar e exibir, agora a lista dos grupos com cada aluno.
        const ALUNOS_ORDENADOS = grupo.sort();
        print(`
        \t-------------------------------------------------------
                Grupo ${index + 1}:`);
        ALUNOS_ORDENADOS.forEach(aluno => print(`\t\t${aluno.trim()}`));    //Uso o trim para remover, os espaços em branco tanto no inicio quanto no final.
    })                                                                      
}

function gravarResultado(resultado, grupos) {
    let conteudo = ``;

    grupos.forEach((grupo, index) => {                                  //Utilizo por forEach para iterar os grupos formatados adequadamente.
        const ALUNOS_FORMATADOS = grupo.join(`\n`).trim();              //O join(\n) para unir os alunos de cada grupo  em uma string formatada.
        conteudo += `Grupo ${index + 1}:\n${ALUNOS_FORMATADOS}\n\n`;
    });

    fs.writeFileSync(resultado, conteudo);          //Aqui para escrever o conteúdo formatado em um novo arquivo.
}

function get_number(texto) {
    return Number(question(texto));
}

function get_positive_number(texto) {

    const numero = get_number(texto);

    if (numero <= 0) {
        print (`****** Valor Inválido ******`)
        return get_positive_number(texto);
    }

    return numero
}

function print(texto){
    return console.log(texto);
}

main();