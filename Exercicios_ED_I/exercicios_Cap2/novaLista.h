#include <stdio.h>
#include <stdlib.h>

typedef int Item;

struct no {
    Item valor;
    struct no *prox;
};

typedef struct no* Lista;
typedef struct no Elemento;

Lista no(Item x, Lista ponteiro) {
    Lista list = (Lista)malloc(sizeof(struct no));
    list->valor = x;
    list->prox = ponteiro;
    return list;
}

void exibir_Lista(Lista list) {
    while (list != NULL) {
        printf("%d ", list->valor);
        list = list->prox;
    }
}

void liberar_Lista(Lista *list) {
    while (*list != NULL) {
        Elemento* nozinho = *list;
        *list = nozinho->prox;
        free(nozinho);
    }
}

int consultar_Lista(Item x, Lista list) {
    if (list == NULL) {
        return 0;
    }
    if (x = list->valor) {
        return 1;
    } 
    return consultar_Lista(x, list->prox);
}

int tamanho_Lista(Lista list) {
    if (list == NULL) {
        return 0;
    }
    return 1 + tamanho_Lista(list->prox);
}

void mostrar_Invert(Lista list) {
    if (list == NULL) {
        return;
    }
    mostrar_Invert(list->prox);
    printf("%d", list->valor);
}

int ocorrencias(int x, Lista list) {
    if (list == NULL) {
        return 0;
    }
    while (list != NULL) {
        if (x == list->valor) {
            return 1 + ocorrencias(x, list->prox);
        }
        list = list->prox;
    }
    return 0;
}

int ultimoItem(Lista list) {
    int ultimo = 0;

    while (list != NULL) {
        ultimo = list->valor;
        list = list->prox;
    }
    return ultimo;
}

int somarItens(Lista list) {
    if (list == NULL) {
        return 0;
    }
    return list->valor + somarItens(list->prox);
}

Lista substituirValores(Item x, Item y, Lista list) {
    if (list == NULL) {
        return;
    }
    if (list->valor == x) {
        list->valor = y;
    }
    substituirValores(x, y, list->prox);
}

int eh_Igual(Lista a, Lista b) {
    if (a == NULL || b == NULL) {
        return 1;
    }
    if (tamanho_Lista(a) != tamanho_Lista(b)) {
        return 0;
    }
    if (a->valor == b->valor) {
        return 1;
    }
    return eh_Igual(a->prox, b->prox);
}

int enesimoItem(Item x, Lista list) {
    if (list == NULL) {
        printf("Fatal ERROR\n");
        exit(1);
    }
    if (x == 1) {
        return list->valor;
    }
    return enesimoItem(x - 1, list->prox);
}

typedef struct no* Pilha;

void empilhar(Item x, Pilha *pilha) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = *pilha;
        *pilha = nozinho;
    }
}

void desempilhar(Pilha *pilha) {
    if (*pilha != NULL) {
        Elemento* nozinho = *pilha;
        *pilha = nozinho->prox;
        free(nozinho);
    }
}

typedef struct no* Fila;

void enfileirar(Item x, Fila *fila) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = NULL;

        if (*fila == NULL) {
            *fila = nozinho;
        } else {
            Elemento* aux = *fila;
            while (aux != NULL) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
        }
    }
}

void desenfileira(Fila *fila) {
    if (*fila == (*fila)->prox) {
        free(*fila);
        *fila = NULL;
    }
    struct no *atual = *fila;
    while (atual->prox != *fila) {
        atual = atual->prox;
    }
    struct no *nozinho = *fila;
    atual->prox = nozinho->prox;
    *fila = nozinho->prox;
    free(nozinho);
}