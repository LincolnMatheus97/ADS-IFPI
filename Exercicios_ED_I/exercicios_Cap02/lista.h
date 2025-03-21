#include <stdio.h>
#include <stdlib.h>

typedef int item;

struct no {
    item valor;
    struct no *prox;
};

typedef struct no* Lista;

Lista no(item x, Lista ponteiro) {
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

void concatnarListas(Lista *A, Lista B) {
    if (B == NULL) {
        return;
    } 
    while (A != NULL) {
        A = &(*A)->prox;
    }
    *A = B;
}

void liberar_Lista(Lista *l) {
    while (*l != NULL) {
        Lista list = *l;
        *l = list->prox;
        free(list);
    }
}

int tamanho_Lista(Lista list) {
    if (list == NULL) {
        return 0;
    }
    return 1 + tamanho_Lista(list->prox);
}

int consultar_Lista(item x, Lista list) {
    if (list == NULL) {
        return 0;
    }
    if (x == list->valor) {
        return 1;
    }
    return consultar_Lista(x, list->prox);
}

Lista clone(Lista list) {
    if (list == NULL) {
        return NULL;
    }
    return no(list->valor, clone(list->prox));
}

void inverter_Lista(Lista list) {
    if (list == NULL) {
        return;
    }
    inverter_Lista(list->prox);
    printf("%d ", list->valor);
}

int ocorrencias(item x, Lista list) {
    int contador = 0;

    while (list != NULL) {
        if (list->valor == x) {
            contador++;
        }
        list = list->prox;
    }
    return contador;
}

int ultimo_ItemLista(Lista list) {
    int ultimo = 1;

    while (list != NULL) {
        if (list->prox == NULL) {
            ultimo = list->valor;
        }
        list = list->prox;
    }
    return ultimo;
}

int soma_ItensLista(Lista list) {
    if (list == NULL) {
        return 0;
    }
    return list->valor + soma_ItensLista(list->prox);
}

Lista substituir_Itens(item x, item y, Lista list) {
    if (list == NULL) {
        return NULL;
    }
    if (list->valor == x) {
        list->valor = y;
    }
    list->prox = substituir_Itens(x, y, list->prox);
    return list;
}

int listas_Iguais(Lista listA, Lista listB) {
    if (listA == NULL && listB == NULL) {
        return 1;
    }
    if (tamanho_Lista(listA) != tamanho_Lista(listB)) {
        return 0;
    }
    if (listA->valor == listB->valor) {
        return 1;
    }
    return listas_Iguais(listA->prox, listB->prox);
}

int enesimo(int x, Lista list) {
    if (list == NULL) {
        printf("Fatal ERROR\n");
        exit(1);
    }
    if (x == 1) {
        return list->valor;
    }
    return enesimo(x - 1, list->prox);
}

typedef struct no* Pilha;

void empilhar(item x, Pilha *pilha) {
    struct no *nozinho = (struct no*)malloc(sizeof(struct no));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = *pilha;
        *pilha = nozinho;
    }
}

void desempilhar(Pilha *pilha) {
    if (*pilha != NULL) {
        struct no *nozinho = *pilha;
        *pilha = nozinho->prox;      //O proximo nó se torna o topo
        free(nozinho);               //libera o nó que estava no topo
    }
}

typedef struct no* Fila;

void enfileira(item x, Fila *fila) {
    struct no* nozinho = (struct no*)malloc(sizeof(struct no));
    if (nozinho != NULL) {
        nozinho->valor = x;

        if (*fila == NULL) {
            *fila = nozinho;
            nozinho->prox = nozinho;
        } else {
            struct no* aux = *fila;
            while (aux->prox != *fila) {
                aux = aux->prox;
            }
            aux->prox = nozinho;
            nozinho->prox = *fila;
        }
    }
}

void exibir_Fila(Fila fila) {
    struct no* atual = fila;
    do {
        printf("%d ", atual->valor);
        atual = atual->prox;
    } while (atual != fila);
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