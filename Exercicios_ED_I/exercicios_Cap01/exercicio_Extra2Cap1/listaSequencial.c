#include <stdio.h>
#include <stdlib.h>

struct filme {
    int cod_Filme;
    char nome_Filme[30];
    double nota_Filme;
};

struct lista_Filmes {
    int quantidade_Filmes;
    struct filme dados_Filme[10];
};

typedef struct lista_Filmes FILMES;

FILMES* criar_Lista() {
    FILMES* list;
    list = (FILMES*)malloc(sizeof(struct lista_Filmes));
    if(list != NULL) {
        list->quantidade_Filmes = 0;
    }

    return list;
}

void liberar_Lista(FILMES* list) {
    free(list);
}

int inserir_FinalLista(FILMES* list, struct filme dados_Filme) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 10) {
        return 0;
    } else {
        list->dados_Filme[list->quantidade_Filmes] = dados_Filme;
        list->quantidade_Filmes++;
        return 1;
    }
}

int inserir_InicioLista(FILMES* list, struct filme dados_Filme) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 10) {
        return 0;
    } else {
        int i;
        for (i = list->quantidade_Filmes - 1; i >= 0; i--) {
            list->dados_Filme[i + 1] = list-> dados_Filme[i];
        }
        list->dados_Filme[0] = dados_Filme;
        list->quantidade_Filmes++;
        return 1;
    }
}

int inserir_FormaOrdenada(FILMES* list, struct filme dados_Filme) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 10) {
        return 0;
    } else {
        int k, i = 0;
        while (i < list->quantidade_Filmes && list->dados_Filme[i].nome_Filme< dados_Filme.nome_Filme) {
            i++;
        }
        for (k = list->quantidade_Filmes - 1; k >= i; k--) {
            list->dados_Filme[k + 1] = list->dados_Filme[k];
        }
        list->dados_Filme[i] = dados_Filme;
        list->quantidade_Filmes++;
        return 1;
    }
}

int remover_FinalLista(FILMES* list) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 0) {
        return 0;
    } else {
        list->quantidade_Filmes--;
        return 1;
    }
}

int remover_InicioLista(FILMES* list) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 0) {
        return 0;
    } else {
        int i;
        for (i = 0; i < list->quantidade_Filmes - 1; i++) {
            list->dados_Filme[i] = list->dados_Filme[i + 1];
        }
        list->quantidade_Filmes--;
        return 1;
    }
}

int remover_Lista(FILMES* list, int codigo_Filme) {
    if (list == NULL) {
        return 0;
    } else if (list->quantidade_Filmes == 0) {
        return 0;
    } else {
        int k, i = 0;
        while (i < list->quantidade_Filmes && list->dados_Filme[i].cod_Filme != codigo_Filme) {
            i++;
        }
        int j = list->quantidade_Filmes;
        if (i == j) {
            return 0;
        }
        for (k = i; k < list->quantidade_Filmes - 1; k++) {
            list->dados_Filme[k] = list->dados_Filme[k + 1];
        }
        list->quantidade_Filmes--;
        return 1;
    }
}

int consultar_Lista_Posicao(FILMES* list, int posicao, struct filme *dados_Filme) {
    if (list == NULL || posicao <= 0 || posicao > list->quantidade_Filmes) {
        return 0;
    } else {
        *dados_Filme = list->dados_Filme[posicao - 1];
        return 1;
    }
}

int consultar_Lista_Conteudo(FILMES* list, int codigo_Filme, struct filme *dados_Filme) {
    if (list == NULL) {
        return 0;
    } else {
        int i = 0;
        while (i < list->quantidade_Filmes && list->dados_Filme[i].cod_Filme != codigo_Filme) {
            i++;
        }
        int j = list->quantidade_Filmes;
        if (i == j) {
            return 0;
        }
        *dados_Filme = list->dados_Filme[i];
        return 1;
    }
}

void imprimir_Lista(FILMES* list) {
    if (list == NULL) {
        return;
    } else {
        int i;
        printf("-----> LISTA DE FILMES\n");
        for (i = 0; i < list->quantidade_Filmes; i++) {
            printf("CODIGO DO FILME: %d\n", list->dados_Filme[i].cod_Filme);
            printf("NOME DO FILME: %s\n", list->dados_Filme[i].nome_Filme);
            printf("NOTA DO FILME: %.1lf\n", list->dados_Filme[i].nota_Filme);
            printf("----------------------------------------------->\n");
        }
    }
}

int main() {

    //CRIO UM "CATALOGO DE FILMES" DO TIPO DA ESTRUTURA ABSTRATA filme;
    struct filme catalogo[4] = {
        {3, "Senhor dos Aneis", 9.8},
        {4, "Senhor dos Aneis 2", 9.5},
        {1, "Senhor dos Aneis 3", 10},
        {2, "O Hobbit", 9.2}
    };

    //CRIO UMA ESTRUTUA DO TIPO VETOR PARA AGRUPAR OS DADOS DE FORMA SEQUENCIAL E ESTATICO DA ESTRUTURA ABSTRATA filme;
    FILMES* lista = criar_Lista();

    //INSIRO OS DADOS DA TDA filme, NO VETOR lista DE FORMA QUE OS DADOS SEJAM AGRUPADOS ADICIONANDO SEMPRE NO FINAL DA LISTA
    int i;
    for (i = 0; i < 4; i++) {
        inserir_FinalLista(lista, catalogo[i]);
    }
    imprimir_Lista(lista);

    //CONSULTO NA MINHA lista COM BASE NAS POSIÇOES DOS DADOS DE TDA catalogo DENTRO DELA, E VERIFICO SE EXISTE OU NAO
    int posicao_Desejada = 4;
    int consulta = consultar_Lista_Posicao(lista, posicao_Desejada, catalogo);
    if (consulta) {
        printf("O FILME EXISTE NO CATALOGO, NA POSICAO: %d\n", posicao_Desejada);
    } else {
        printf("O FILME NAO EXISTE NO CATALOGO, NA POSICAO: %d\n", posicao_Desejada);
    }

    //CONSULTO NA MINHA lista COM ALGUMA CARACTERISTICA DA MINHA TDA catalogo DENTRO DELA, E VERIFICO SE EXISTE OU NAO
    int codigo_Desejado = 7;
    int consulta_2 = consultar_Lista_Conteudo(lista, codigo_Desejado, catalogo);
    if (consulta_2) {
        printf("O FILME DE CODIGO %d EXISTE NO CATALOGO\n", codigo_Desejado);
    } else {
        printf("O FILME DE CODIGO %d NAO EXISTE NO CATALOGO\n", codigo_Desejado);
    }

    // INSIRO OS DADOS DA TDA catalogo, NO VETOR lista DE FORMA ORDENADA POR ALGUMA CARACTERISTA DE catalogo
    // int i;
    // for (i = 0; i < 4; i++) {
    //     inserir_FormaOrdenada(lista, catalogo[i]);
    // }
    // imprimir_Lista(lista);

    //REMOVE UM ITEM DA lista BASEADO NA CARACTERISTICA "codigo_Desejado" DA TDA filme;
    // int removido = remover_Lista(lista, codigo_Desejado);
    // if (removido) {
    //     printf("FILME REMOVIDO DO CATALOGO COM SUCESSO...\n");
    // } else {
    //     printf("A REMOCAO FALHOU...\n");
    // }

    //REMOVE O PRIMEIRO ITEM DA lista;
    int removido = remover_InicioLista(lista);
    if (removido) {
        printf("FILME REMOVIDO DO CATALOGO COM SUCESSO...\n");
    } else {
        printf("A REMOCAO FALHOU...\n");
    }
    imprimir_Lista(lista);
    
    return 0;
}