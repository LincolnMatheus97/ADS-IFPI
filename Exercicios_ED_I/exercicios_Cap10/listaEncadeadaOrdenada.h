#include <stdio.h>
#include <stdlib.h>

typedef int numero;

struct no{
    numero idade;
    struct no *prox;
};

typedef struct no* Lista;

// Lista encadeada
Lista criarNo(numero idade, Lista l) {
    Lista nozinho = (Lista)malloc(sizeof(struct no));
    nozinho->idade = idade;
    nozinho->prox = l;
    return nozinho;
}

void inserirInicio(numero idade, Lista *l) {
    Lista nozinho = (Lista)malloc(sizeof(struct no));
    nozinho->idade = idade;
    nozinho->prox = *l;
    *l = nozinho;
}

void inserirFinal(numero idade, Lista *l) {
    Lista nozinho = (Lista)malloc(sizeof(struct no));
    nozinho->idade = idade;
    nozinho->prox  = NULL;

    if (*l == NULL) {
        *l = nozinho;
    } else {
        Lista aux = *l;
        while (aux->prox != NULL) {
            aux = aux->prox;
        }
        aux->prox = nozinho;
    }
}

void removerInicio(Lista *l) {
    Lista nozinho = *l;
    *l = nozinho->prox;
    free(nozinho);
}

void removerFinal(Lista *l) {
    Lista ant, nozinho = *l;
    while (nozinho->prox != NULL) {
        ant = nozinho;
        nozinho = nozinho->prox;
    }
    if (nozinho == (*l)) {
        *l = nozinho->prox;
    } else {
        ant->prox = nozinho->prox;
    }
    free(nozinho);
}

int buscarItem(numero x, Lista l) {
    if (l == NULL) {
        return 0;
    }
    if (l->idade == x) {
        return 1;
    }
    return buscarItem(x, l->prox);
}

void mostrarLista(Lista l) {
    while (l != NULL) {
        printf("%d ", l->idade);
        l = l->prox;
    }
}

// Lista Ordenada
void inserirOrdenado(numero idade, Lista *l) {
    while (*l != NULL && (*l)->idade < idade) {
        l = &(*l)->prox;
    }
    *l = criarNo(idade, *l);
}

void removerOrdenado(numero idade, Lista *l) {
    while (*l != NULL && (*l)->idade < idade) {
        l = &(*l)->prox;
    }
    if (*l == NULL || (*l)->idade > idade) {
        abort();
    }
    Lista aux = *l;
    *l = aux->prox;
    free(aux);
}

int buscarOrdenado(numero x, Lista l) {
    while (l != NULL && l->idade < x) {
        l = l->prox;
    }
    return (l != NULL && l->idade == x);
}