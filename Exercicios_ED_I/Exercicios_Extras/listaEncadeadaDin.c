#include <stdio.h>
#include <stdlib.h>

typedef int Item;

typedef struct no {
    Item valor;
    struct no *prox;
};

typedef struct no Elemento;
typedef struct no* Lista;

Lista criar_Lista() {
    Lista* nozinho = (Lista*)malloc(sizeof(Lista));
    if (nozinho != NULL) {
        *nozinho = NULL;
    }
    return nozinho;
}

Lista no(Item x, Lista p) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    nozinho->valor = x;
    nozinho->prox = p;
    return nozinho;
}

void inserir_Inicio(int x, Lista *list) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = *list;
        *list = nozinho;
    } 
}

void inserir_Final(int x, Lista *list) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = NULL;
        
        if (*list == NULL) {
            *list = nozinho;
        } else {
            Elemento* aux = *list;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
        }
    } 
}

void enfileirar(int x, Lista *list) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        
        if (*list == NULL) {
            *list = nozinho;
            nozinho->prox = nozinho;
        } else {
            Elemento* aux = *list;
            while (aux->prox != *list) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
            nozinho->prox = *list;
        }
    } 
}

void remover_Inicio(Lista *list) {
    if (*list != NULL) {
        Elemento* nozinho = *list;
        *list = nozinho->prox;
        free(nozinho);
    }
}

void remover_Final(Lista *list) {
    Elemento *aux, *nozinho = *list;
    while (nozinho->prox != NULL) {
        aux = nozinho;
        nozinho = nozinho->prox;
    }
    if (nozinho == *list) {
        *list = nozinho->prox;
    } else {
        aux->prox = nozinho->prox;
    }
    free(nozinho);
}

void desenfileirar(Lista *list) {
    if (*list == (*list)->prox) {
        free(*list);
        *list = NULL;
    }
    Elemento *atual = *list;
    while (atual->prox != *list) {
        atual = atual->prox;
    }
    Elemento *nozinho = *list;
    atual->prox = nozinho->prox;
    *list = nozinho->prox;
    free(nozinho);
}

void mostrar_Lista(Lista list) {
    while (list != NULL) {
        printf("%d ", list->valor);
        list = list->prox;
    }
}

void mostrar_Fila(Lista list) {
    Elemento *atual = list;
    do {
        printf("%d ", atual->valor);
        atual = atual->prox;
    } while (atual != list);
}

void consultar_Lista(int x, Lista list) {
    if (list == NULL) {
        return;
    }
    if(x == list->valor) {
        return 1;
    }
    return consultar_Lista(x, list->prox);
}