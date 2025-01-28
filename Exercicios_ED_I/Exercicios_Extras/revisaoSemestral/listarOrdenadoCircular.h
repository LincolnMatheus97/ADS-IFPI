#include <stdio.h>
#include <stdlib.h>

typedef char letra;

struct no{
    letra caracter;
    struct no *prox;
};

typedef struct no* Lista;

Lista criarNo(letra caracter) {
    Lista nozinho = (Lista)malloc(sizeof(struct no));
    nozinho->caracter = caracter;
    nozinho->prox = nozinho;
    return nozinho;
}

void inserirOrdenado(letra caract, Lista *l) {
    Lista nozinho = criarNo(caract);
    if (*l == NULL) {
        *l = nozinho;
    } else {
        Lista atual = *l;
        Lista anterior = NULL;
        do {
            anterior = atual;
            atual = atual->prox;
        } while (atual != *l && atual->caracter < caract);

        if (anterior == atual) {
            nozinho->prox = *l;
            while (atual->prox != *l) {
                atual = atual->prox;
            }
            atual->prox = nozinho;
            *l = nozinho;
        } else {
            nozinho->prox = anterior->prox;
            anterior->prox = nozinho;
        }
    }
}

void removerOrdenado(letra caract, Lista *l) {
    if (*l == NULL) {
        return;
    }
    Lista atual = *l;
    Lista anterior = NULL;
    do {
        anterior = atual;
        atual = atual->prox;
    } while (atual != *l && atual->caracter != caract);

    if (atual == *l) {
        if (atual->prox == *l) {
            free(atual);
            *l = NULL;
        } else {
            Lista aux = *l;
            while (aux->prox != *l) {
                aux = aux->prox;
            }
            aux->prox = atual->prox;
            *l = atual->prox;
            free(atual);
        }
    } else {
        anterior->prox = atual->prox;
        free(atual);
    }
}

void mostrarLista(Lista l) {
    while (l != NULL) {
        printf("%c ", l->caracter);
        l = l->prox;
    }
}