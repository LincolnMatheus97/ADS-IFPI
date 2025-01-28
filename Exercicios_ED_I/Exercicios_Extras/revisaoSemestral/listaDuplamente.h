#include <stdio.h>
#include <stdlib.h>

typedef int num;

struct noDuplo {
    num valor;
    struct noDuplo *ant;
    struct noDuplo *prox;
};

typedef struct noDuplo* Lista;

Lista criarNoDuplo(num valor) {
    Lista nozinho = (Lista)malloc(sizeof(struct noDuplo));
    nozinho->valor = valor;
    nozinho->ant = NULL;
    nozinho->prox = NULL;
    return nozinho;
}

void inserirOrdenado(num valor, Lista *l) {
    Lista nozinho = criarNoDuplo(valor);
    if (*l == NULL) {
        *l = nozinho;
    } else {
        Lista atual = *l;
        Lista anterior = NULL;
        while (atual != NULL && atual->valor < valor) {
            anterior = atual;
            atual = atual->prox;
        }
        if (anterior == NULL) {
            nozinho->prox = *l;
            (*l)->ant = nozinho;
            *l = nozinho;
        } else {
            nozinho->prox = anterior->prox;
            nozinho->ant = anterior;
            if (anterior->prox != NULL) {
                anterior->prox->ant = nozinho;
            }
            anterior->prox = nozinho;
        }
    }
}

void removerOrdenadamente(num valor, Lista *l) {
    if (*l == NULL) {
        return;
    }
    Lista atual = *l;
    Lista anterior = NULL;
    while (atual != NULL && atual->valor != valor) {
        anterior = atual;
        atual = atual->prox;
    }
    if (atual == NULL) {
        return;
    }
    if (anterior == NULL) {
        *l = atual->prox;
    } else {
        anterior->prox = atual->prox;
    }
    if (atual->prox != NULL) {
        atual->prox->ant = anterior;
    }
    free(atual);
}

void mostrarLista(Lista l) {
    while (l != NULL) {
        printf("%d ", l->valor);
        l = l->prox;
    }
}