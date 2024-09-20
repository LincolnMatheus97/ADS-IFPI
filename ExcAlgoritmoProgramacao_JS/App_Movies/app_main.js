import { atualizar, buscar, catalogar, ler_Arquivo, ler_Arquivo_Lojas, listar, ordenar, remover, save_Automatic, user_Menu } from "./funcionabilidade_app.js";
import { clean, print, read_file } from "./utils.js";

function main() {
    let opcao_Menu = -1, lista_Filmes = ``;
    let dados_Lojas = read_file(`conjunto_Lojas.txt`);
    let catalogo_Lojas = ler_Arquivo_Lojas(dados_Lojas);
    let dados_Filmes = read_file(`filmes_Arquivados.txt`);
    let catalogo_Movies = ler_Arquivo(dados_Filmes, catalogo_Lojas);

    while (opcao_Menu !== 0) {
        opcao_Menu = user_Menu();
        clean();

        switch (opcao_Menu) {
            case 1:
                catalogar(catalogo_Movies, catalogo_Lojas);
                clean();
                break;
            case 2:
                clean();
                lista_Filmes = listar(catalogo_Movies, true, true, {});
                print(lista_Filmes);
                break;
            case 3:
                catalogo_Movies = atualizar(catalogo_Movies);
                clean();
                break;
            case 4:
                catalogo_Movies = remover(catalogo_Movies);
                clean();
                break;
            case 5:
                catalogo_Movies = ordenar(catalogo_Movies);
                break;
            case 6:
                lista_Filmes = buscar(catalogo_Movies, catalogo_Lojas);
                print(lista_Filmes);
                break;
            case 0:
                save_Automatic(catalogo_Movies, catalogo_Lojas);
                break;
        }
    }
}

main();