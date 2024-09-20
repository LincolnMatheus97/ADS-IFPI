import { buscar_Sequencial, filter, gerar_Id, get_number, get_text, map, ordenar_Quick, print, save_file } from "./utils.js";

export function user_Menu() {
    let opcao = get_number(`
        ------------LC MOVIES------------
        
        1 >> CATALOGAR 
        2 >> LISTAR
        3 >> ATUALIZAR 
        4 >> REMOVER
        5 >> ORDENAR
        6 >> BUSCAR
        0 >> SAIR
        
        ---------------------------------
        OPCAO: `
    );

    return opcao;
}

export function ler_Arquivo_Lojas(lojas) {
    let nova_Lista = [];
    let linhas = lojas.split(`\n`);

    for (let linha of linhas) {
        let [nome, logradouro, numero, bairro, contato] = linha.split(`#`);
        let loja = {};
        loja[`id`] = gerar_Id();
        loja[`nome`] = nome;
        loja[`logradouro`] = logradouro;
        loja[`numero`] = parseInt(numero);
        loja[`bairro`] = bairro;
        loja[`contato`] = parseInt(contato);

        nova_Lista.push(loja);
    }

    return nova_Lista;
}

export function ler_Arquivo(filmes, lojas) {
    let nova_Lista = [];
    let linhas = filmes.split(`\n`);
    let idsLojas = map(lojas, (index, lojas) => lojas = lojas.id);


    for (let linha of linhas) {
        let [nome, ano, genero, imdb, bilheteria] = linha.split(`#`);
        let filme = {};
        let lojaAleatoria = idsLojas[Math.floor(Math.random() * idsLojas.length)];

        filme[`loja_id`] = lojaAleatoria;
        filme[`id`] = gerar_Id();
        filme[`nome`] = nome;
        filme[`ano`] = parseInt(ano);
        filme[`genero`] = genero;
        filme[`imdb`] = parseInt(imdb);
        filme[`bilheteria`] = parseInt(bilheteria);

        nova_Lista.push(filme);
    }

    return nova_Lista;
}

export function catalogar(filmes, lojas) {
    print(`\n\t-------CATALOGAÇÃO-------`);
    let filme = {};
    let idsLojas = map(lojas, (index, lojas) => lojas = lojas.id);
    let lojaAleatoria = idsLojas[Math.floor(Math.random() * idsLojas.length)];

    filme[`loja_id`] = lojaAleatoria;
    filme[`id`] = gerar_Id();
    filme[`nome`] = get_text(`\n\tDIGITE O NOME: `);
    filme[`ano`] = get_number(`\r\tDIGITE O ANO: `);
    filme[`genero`] = get_text(`\r\tDIGITE O GENERO: `);
    filme[`imdb`] = get_number(`\r\tDIGITE A NOTA DO IMDB: `);
    filme[`bilheteria`] = get_number(`\r\tDIGITE O VALOR DA BILHETERIA: `);

    print(`\n\tFILME CATALOGADO COM SUCESSO...`);
    filmes.push(filme);

    let novo_filme = get_text(`\n\tDESEJA CATALOGAR UM NOVO FILME? SE SIM DIGITE (S) SE NAO (N): `).toUpperCase();
    if (novo_filme === `S`) {
        catalogar(filmes, lojas);
    }
}

export function listar(filmes, filme_Loja = false, loja = false, lojas) {
    let texto = ``;

    if (!filme_Loja) {
        texto += `\n\t-------DADOS DO FILME-------\n`;

        for (let i = 0; i < filmes.length; i++) {
            let filme = filmes[i];

            texto += `\n`
            texto += `\tID DA LOJA: ${filme[`loja_id`]}\n`;
            texto += `\tID DO FILME: ${filme[`id`]}\n`;
            texto += `\tNOME: ${filme[`nome`]}\n`;
            texto += `\tANO: ${filme[`ano`]}\n`;
            texto += `\tGENERO: ${filme[`genero`]}\n`;
            texto += `\tIMDB: ${filme[`imdb`]}\n`;
            texto += `\tBILHETERIA: R$${filme[`bilheteria`]}\n`;
            texto += `\n\t----------------------------\n`;
        }
        texto += `\n\t-------PODE SE ENCONTRAR EM-------\n`;

        for (let i = 0; i < lojas.length; i++) {
            let loja = lojas[i];

            texto += `\n`
            texto += `\tNOME: ${loja[`nome`]}\n`;
            texto += `\tLOGRADOURO: ${loja[`logradouro`]}\n`;
            texto += `\tNUMERO: ${loja[`numero`]}\n`;
            texto += `\tBAIRRO: ${loja[`bairro`]}\n`;
            texto += `\tCONTATO: +${loja[`contato`]}\n`;
            texto += `\n\t----------------------------\n`;
        }
        return texto;
    } else if (!loja) {
        texto += `\n\t-------PODE SE ENCONTRAR EM-------\n`;

        for (let i = 0; i < lojas.length; i++) {
            let loja = lojas[i];

            texto += `\n`
            texto += `\tNOME: ${loja[`nome`]}\n`;
            texto += `\tLOGRADOURO: ${loja[`logradouro`]}\n`;
            texto += `\tNUMERO: ${loja[`numero`]}\n`;
            texto += `\tBAIRRO: ${loja[`bairro`]}\n`;
            texto += `\tCONTATO: +${loja[`contato`]}\n`;
            texto += `\n\t----------------------------\n`;
        }
        return texto;
    } else {
        texto += `\n\t-------LISTA DE FILMES-------\n`;

        for (let i = 0; i < filmes.length; i++) {
            let filme = filmes[i];

            texto += `\n`
            texto += `\tID DA LOJA: ${filme[`loja_id`]}\n`;
            texto += `\tID DO FILME: ${filme[`id`]}\n`;
            texto += `\tNOME: ${filme[`nome`]}\n`;
            texto += `\tANO: ${filme[`ano`]}\n`;
            texto += `\tGENERO: ${filme[`genero`]}\n`;
            texto += `\tIMDB: ${filme[`imdb`]}\n`;
            texto += `\tBILHETERIA: R$${filme[`bilheteria`]}\n`;
            texto += `\n\t----------------------------\n`;
        }
        return texto;
    }
}

export function atualizar(lista) {
    let texto = ``;
    texto += `\n\t< POSICAO |         ID          | NOME >\n`;
    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i];
        texto += `\n\t${i + 1} | ${filme[`id`]} | ${filme[`nome`]}\n`;
    }
    print(`\n\t${texto}`);

    let id_atualizado = get_text(`\n\tDIGITE O ID DO FILME QUE DESEJA ATUALIZAR: `);

    let nova_Lista = map(lista, (index, filme) => {
        if (filme[`id`] === id_atualizado) {
            filme[`nome`] = get_text(`\n\tDIGITE O NOME: `);
            filme[`ano`] = get_number(`\r\tDIGITE O ANO: `);
            filme[`genero`] = get_text(`\r\tDIGITE O GENERO: `);
            filme[`imdb`] = get_number(`\r\tDIGITE A NOTA DO IMDB: `);
            filme[`bilheteria`] = get_number(`\r\tDIGITE O VALOR DA BILHETERIA: `);

            print(`\n\tFILME ATUALIZADO COM SUCESSO...`);
        }
        return filme;
    });

    return nova_Lista;
}

export function remover(lista) {
    let texto = ``;
    texto += `< POSICAO | NOME >\n`;
    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i];
        texto += `\n\t${i + 1} | ${filme[`nome`]}\n`;
    }
    print(`\n\t${texto}`);

    let nome_FilmeRemovido = get_text(`\n\tDIGITE O NOME DO FILME QUE DESEJA REMOVER: `);

    let nova_Lista = filter(lista, (index, filme) => filme[`nome`] !== nome_FilmeRemovido);
    print(`\n\tFILME REMOVIDO COM SUCESSO...`);

    return nova_Lista;
}

export function ordenar(lista) {
    let opcaoMenu = -1, ordenacao = false, questionamento = ``, nova_Lista = [];

    while (opcaoMenu !== 0) {
        opcaoMenu = get_number(`\n
            \r\t------------LC MOVIES------------
            
            \r\t1 >> ORDEM ALFABETICA
            \r\t2 >> ORDEM ID
            \r\t3 >> ORDEM DE IMDB
            \r\t4 >> ORDEM DE BILHETERIA
            \r\t0 >> SAIR
            
            \r\t----------------------------------
            \r\tOPCAO: `
        );

        switch (opcaoMenu) {
            case 1:
                questionamento = get_text(`\n\tVOCE DESEJA POR EM ORDEM ALFABETICA OU EM ORDEM REVERSA? (ALFABETICA) OU (REVERSA): `).toUpperCase();
                questionamento === `ALFABETICA` ? nova_Lista = ordenar_Quick(lista, ordenacao, [`nome`]) : nova_Lista = ordenar_Quick(lista, ordenacao = true, [`nome`]);
                return nova_Lista;
            case 2:
                questionamento = get_text(`\n\tVOCE DESEJA POR EM ORDEM ASCENDENTE OU EM ORDEM DECRESCENTE? (ASCENDENTE) OU (DECRESCENTE): `).toUpperCase();
                questionamento === `ASCENDENTE` ? nova_Lista = ordenar_Quick(lista, ordenacao, [`id`]) : nova_Lista = ordenar_Quick(lista, ordenacao = true, [`id`]);
                return nova_Lista;
            case 3:
                questionamento = get_text(`\n\tVOCE DESEJA POR EM ORDEM ASCENDENTE OU EM ORDEM DECRESCENTE? (ASCENDENTE) OU (DECRESCENTE): `).toUpperCase();
                questionamento === `ASCENDENTE` ? nova_Lista = ordenar_Quick(lista, ordenacao, [`imdb`]) : nova_Lista = ordenar_Quick(lista, ordenacao = true, [`imdb`]);
                return nova_Lista;
            case 4:
                questionamento = get_text(`\n\tVOCE DESEJA POR EM ORDEM ASCENDENTE OU EM ORDEM DECRESCENTE? (ASCENDENTE) OU (DECRESCENTE): `).toUpperCase();
                questionamento === `ASCENDENTE` ? nova_Lista = ordenar_Quick(lista, ordenacao, [`bilheteria`]) : nova_Lista = ordenar_Quick(lista, ordenacao = true, [`bilheteria`]);
                return nova_Lista;
        }
    }
}

export function buscar(filmes, lojas) {
    let opcaoMenu = -1, texto = ``, filme_Desejado = ``, bairro_Desejado = ``;

    while (opcaoMenu !== 0) {
        opcaoMenu = get_number(`\n
            \r\t------------LC MOVIES------------
            
            \r\t1 >> BUSCAR FILME ESPECIFICO
            \r\t2 >> BUSCAR LOJA ESPECIFICA
            \r\t0 >> SAIR
            
            \r\t----------------------------------
            \r\tOPCAO: `
        );

        switch (opcaoMenu) {
            case 1:
                filme_Desejado = get_text(`\n\tDIGITE O NOME DO FILME QUE ESTA PROCURANDO: `).toLowerCase();
                let dados_Filme_Desejado = buscar_Sequencial(filmes, (item_Lista, item_Procurado, indice) => {
                    if (item_Lista.nome === filme_Desejado) {
                        return item_Lista;
                    }
                    return item_Procurado;
                }, null);

                let dados_Loja_Filme = buscar_Sequencial(lojas, (item_Lista, item_Procurado, indice) => {
                    if (item_Lista.id === dados_Filme_Desejado.loja_id) {
                        return item_Lista;
                    }
                    return item_Procurado;
                }, null);

                if (dados_Filme_Desejado !== null) {
                    texto = listar([dados_Filme_Desejado], false, true, [dados_Loja_Filme]);
                } else {
                    texto = `\n\tFILME NÃO ENCONTRADO.`;
                }
                return texto;
            case 2:
                bairro_Desejado = get_text(`\n\tDIGITE O SEU BAIRRO: `).toUpperCase();
                let dados_Loja_Desejada = buscar_Sequencial(lojas, (item_Lista, item_Procurado, indice) => {
                    if (item_Lista.bairro === bairro_Desejado) {
                        return item_Lista;
                    }
                    return item_Procurado;
                }, null);

                if (dados_Loja_Desejada !== null) {
                    texto = listar({}, true, false, [dados_Loja_Desejada]);
                } else {
                    texto = `\n\tBAIRRO NÃO ENCONTRADO.`;
                }
                return texto;
        }
    }
}

export function save_Automatic(filmes, lojas) {
    let nomeArquivo = `registros.txt`;
    let texto = (`
    ${listar(filmes, true, true, {})}
    ${listar({}, true, false, lojas)}`);
    save_file(nomeArquivo, texto);
    print(`\n\tARQUIVO SALVO COM SUCESSO... NO ARQUIVO DE NOME REGISTRO.TXT`);
}