#include <stdio.h>
#include <stdlib.h>

typedef int intItem;

struct noDuplo {
    intItem valor;
    struct noDuplo *prox;
    struct noDuplo *ant;
};

typedef struct noDuplo* LISTA;

LISTA criarLista(intItem x) {
    LISTA listinha = (LISTA)malloc(sizeof(struct noDuplo));
    listinha->valor = x;
    listinha->prox = NULL;
    listinha->ant = NULL;
    return listinha;
}

void inserirNoInicio(intItem x, LISTA *l) {
    LISTA novoNo = (LISTA)malloc(sizeof(struct noDuplo));
    novoNo->valor = x;
    novoNo->prox = *l;
    novoNo->ant = NULL;
    if (*l != NULL) {
        (*l)->ant = novoNo;
    }
    *l = novoNo;
}

void inserirNoFinal(intItem x, LISTA *l) {
    LISTA novoNo = (LISTA)malloc(sizeof(struct noDuplo));
    novoNo->valor = x;
    novoNo->prox = NULL;
    novoNo->ant = NULL;

    if (*l == NULL) {
        *l = novoNo;
    } else {
        LISTA aux = *l;
        while (aux->prox != NULL) {
            aux = aux->prox;
        }
        aux->prox = novoNo;
        novoNo->ant = aux;
    }
}

void removerItemEspecifico(intItem x, LISTA *l) {
    if (*l == NULL) {
        return;
    }
    LISTA ant = NULL, novoNo = *l;
    while (novoNo != NULL && novoNo->valor != x) {
        ant = novoNo;
        novoNo = novoNo->prox;
    }
    if (novoNo == NULL) {
        return;
    }
    if (novoNo == *l) {
        *l = novoNo->prox;
        if (*l != NULL) {
            (*l)->ant = NULL;
        }
    } else {
        ant->prox = novoNo->prox;
        if(novoNo->prox != NULL) {
            novoNo->prox->ant = ant;
        }
    }
    free(novoNo);
}

void mostrarInicioAoFim(LISTA l) {
    while (l != NULL) {
        printf("%d ", l->valor);
        l = l->prox;
    }
}

void mostrarFimAoInicio(LISTA l) {
    if (l == NULL) {
        return;
    }
    while (l->prox != NULL) {
        l = l->prox;
    }
    while (l != NULL) {
        printf("%d ", l->valor);
        l = l->ant;
    }
}