#include <stdio.h>

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