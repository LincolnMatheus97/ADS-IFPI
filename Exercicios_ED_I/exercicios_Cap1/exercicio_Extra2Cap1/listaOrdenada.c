#include <stdio.h>
#include <stdlib.h>

struct carro {
    int num_Serie;
    char nome[30];
    char marca[30];
};

struct elemento {
    struct carro dados;
    struct elemento *prox;
};

typedef struct elemento ELEM;
typedef struct elemento* Lista;

Lista* criar_Lista() {
    Lista* list;
    list = (Lista*)malloc(sizeof(Lista));
    if (list != NULL) {
        *list = NULL;
    }
    return list;
}

void liberar_Lista(Lista* list) {
    if (list != NULL) {
        ELEM* no;
        while ((*list) != NULL) {
            no = *list;
            *list = (*list)->prox;
            free(no);
        }
        free(list);
    }
}

int inserir_Inicio_Lista(Lista* list, struct carro dados) {
    if (list == NULL) {
        return 0;
    }
    ELEM* no = (ELEM*)malloc(sizeof(ELEM));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = dados;
        no->prox = (*list);
        *list = no;
        return 1;
    }
}

int inserir_Final_Lista(Lista* list, struct carro dados) {
    if (list == NULL) {
        return 0;
    }
    ELEM* no = (ELEM*)malloc(sizeof(ELEM));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = dados;
        no->prox = NULL;

        if ((*list) == NULL) {
            *list = no;
            return 1;
        } else {
            ELEM *aux = *list;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = no;
        }
        return 1;
    }
}

int inserir_FormaOrdenada(Lista* list, struct carro dados) {
    if (list == NULL) {
        return 0;
    }
    ELEM* no = (ELEM*)malloc(sizeof(ELEM));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = dados;
        if (*list == NULL) {
            no->prox = *list;
            *list = no;
            return 1;
        } else {
            ELEM *ant, *atual = *list;
            while (atual != NULL && atual->dados.marca < dados.marca) {
                ant = atual;
                atual = atual->prox;
            }
            if (atual == *list) {
                no->prox = *list;
                *list = no;
            } else {
                no->prox = ant->prox;
                ant->prox = no;
            }
        }
        return 1;
    }
}

int remover_InicioLista(Lista* list) {
    if (list == NULL) {
        return 0;
    } else if (*list == NULL) {
        return 0;
    } else {
        ELEM *no = *list;
        *list = no->prox;
        free(no);
        return 1;
    }
}

int remover_FinalLista(Lista* list) {
    if (list == NULL) {
        return 0;
    } else if (*list == NULL) {
        return 0;
    } else {
        ELEM *ant, *no = *list;
        while (no->prox != NULL) {
            ant = no;
            no = no->prox;
        }
        if (no == *list) {
            *list = no->prox;
        } else {
            ant->prox = no->prox;
        }
        free(no);
        return 1;
    }
}

int remover_Lista(Lista* list, int numero_Serie) {
    if (list == NULL) {
        return 0;
    }
    ELEM *ant, *no = *list;
    while(no != NULL && no->dados.num_Serie != numero_Serie) {
        ant = no;
        no = no->prox;
    }
    if (no == NULL) {
        return 0;
    } else if (no == *list) {
        *list = no->prox;
    } else {
        ant->prox = no->prox;
    }
    free(no);
    return 1;
}

int consultar_Pos(Lista* list, int posicao, struct carro *dados) {
    if (list == NULL || posicao <= 0) {
        return 0;
    }
    ELEM *no = *list;
    int i = 1;
    while (no != NULL && i < posicao) {
        no = no->prox;
        i++;
    }
    if (no == NULL) {
        return 0;
    } else {
        *dados = no->dados;
        return 1;
    }
}

int consulta_Especifica(Lista* list, int numero_Serie, struct carro *dados) {
    if (list == NULL) {
        return 0;
    }
    ELEM *no = *list;
    while (no != NULL && no->dados.num_Serie != numero_Serie) {
        no = no->prox;
    }
    if (no == NULL) {
        return 0;
    } else {
        *dados = no->dados;
        return 1;
    }
}

void imprimir_Lista(Lista* list) {
    if (list == NULL) {
        return;
    }
    ELEM* no = *list;
    printf("----- LISTA DE CARROS -----\n");
    while (no != NULL) {
        printf("->NUMERO DE SERIE: %d\n", no->dados.num_Serie);
        printf("->NOME: %s\n", no->dados.nome);
        printf("->MARCA: %s\n", no->dados.marca);
        printf("-----------------------------------\n");

        no = no->prox;
    }
}

int main() {
    struct carro cars[4] = {
        {1, "SAVEIRO", "VW"},
        {2, "TORO", "FIAT"},
        {3, "ONIX", "CHEV"},
        {4, "RANGER", "FORD"}
    };
    Lista* lista = criar_Lista();

    int i;
    for (i = 0; i < 4; i++) {
        inserir_FormaOrdenada(lista, cars[i]);
    }
    imprimir_Lista(lista);

    remover_FinalLista(lista);
    imprimir_Lista(lista);

    // for (i = 0; i < 3; i++) {
    //     inserir_FormaOrdenada(lista, cars[i]);
    // }
    // imprimir_Lista(lista);

    return 0;
}