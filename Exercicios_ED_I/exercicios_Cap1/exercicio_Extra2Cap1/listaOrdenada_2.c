#include <stdio.h>
#include <stdlib.h>

struct pessoa {
    int cpf;
    char nome[30];
};

struct no {
    struct pessoa dados;
    struct no *prox;
};

typedef struct no NO;
typedef struct no* LISTA;

LISTA* criar_Lista() {
    LISTA* list = (LISTA*)malloc(sizeof(LISTA));
    if (list != NULL) {
        *list = NULL;
    }
    return list;
}

void liberar_Memoria(LISTA* list) {
    if (list != NULL) {
        NO* nozinho;
        while (*list != NULL) {
            nozinho = *list;
            *list = (*list)->prox;
            free(nozinho);
        }
        free(list);
    }
}

int inserir_InicioLista(LISTA* list, struct pessoa dados) {
    if (list == NULL) {
        return 0;
    }
    NO* nozinho = (NO*)malloc(sizeof(NO));
    if (nozinho == NULL) {
        return 0;
    } else {
        nozinho->dados = dados;
        nozinho->prox = *list;
        *list = nozinho;
        return 1;
    }
}

int inserir_FinalLista(LISTA* list, struct pessoa dados) {
    if (list == NULL) {
        return 0;
    }
    NO* nozinho = (NO*)malloc(sizeof(NO));
    if (nozinho == NULL) {
        return 0;
    } else {
        nozinho->dados = dados;
        nozinho->prox = NULL;

        if ((*list) == NULL) {
            *list = nozinho;
        } else {
            NO* aux = *list;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
        }
        return 1;
    }
}

int inserir_FormaOrdenada(LISTA* list, struct pessoa dados) {
    if (list == NULL) {
        return 0;
    }
    NO* nozinho = (NO*)malloc(sizeof(NO));
    if (nozinho == NULL) {
        return 0;
    } else {
        nozinho->dados = dados;
        if ((*list) == NULL) {
            nozinho->prox = *list;
            *list = nozinho;
        } else {
            NO *ant, *atual = *list;
            while (atual != NULL && atual->dados.cpf < dados.cpf) {
                ant = atual;
                atual = atual->prox;
            }
            if (atual == *list) {
                nozinho->prox = *list;
                *list = nozinho;
            } else {
                nozinho->prox = ant->prox;
                ant->prox = nozinho;
            }
        }
        return 1;
    }
}

int remover_InicioLista(LISTA* list) {
    if (list == NULL) {
        return 0;
    } else if (*list == NULL) {
        return 0;
    } else {
        NO *nozinho = *list;
        *list = nozinho->prox;
        free(nozinho);
        return 1;
    }
}

int remover_FinalLista(LISTA* list) {
    if (list == NULL) {
        return 0;
    } else if (*list == NULL) {
        return 0;
    } else {
        NO *ant, *nozinho = *list;
        while (nozinho->prox != NULL) {
            ant = nozinho;
            nozinho = nozinho->prox;
        }
        if (nozinho == *list) {
            *list = nozinho->prox;
        } else {
            ant->prox = nozinho->prox;
        }
        free(nozinho);
        return 1;
    }
}

int remover_Lista(LISTA* list, int cpf) {
    if (list == NULL) {
        return 0;
    }
    NO *ant, *nozinho = *list;
    while (nozinho != NULL && nozinho->dados.cpf != cpf) {
        ant = nozinho;
        nozinho = nozinho->prox;
    }
    if (nozinho == NULL) {
        return 0;
    } else if (nozinho == *list) {
        *list = nozinho->prox;
    } else {
        ant->prox = nozinho->prox;
    }
    free(nozinho);
    return 1;
}

int consultar_Posicao(LISTA* list, int posicao, struct pessoa *dados) {
    if (list == NULL || posicao <= 0) {
        return 0;
    }
    NO *nozinho = *list;
    int i = 1;
    while (nozinho != NULL && i < posicao) {
        nozinho = nozinho->prox;
        i++;
    }
    if (nozinho == NULL) {
        return 0;
    } else {
        *dados = nozinho->dados;
        return 1;
    }
}

int consultar_Conteudo(LISTA* list, char nome[30], struct pessoa *dados) {
    if (list == NULL) {
        return 0;
    }
    NO *nozinho = *list;

    while (nozinho != NULL && nozinho->dados.nome != nome) {
        nozinho = nozinho->prox;
    }
    if (nozinho == NULL) {
        return 0;
    } else {
        *dados = nozinho->dados;
        return 1;
    }
}

void imprimir_Lista(LISTA* list) {
    if (list == NULL) {
        return;
    }
    NO* nozinho = *list;
    printf(".....   LISTA DE PESSOAS    .....\n");
    while (nozinho != NULL) {
        printf("CPF: %d\n", nozinho->dados.cpf);
        printf("NOME: %s\n", nozinho->dados.nome);
        printf("....................\n");

        nozinho = nozinho->prox;
    }
}