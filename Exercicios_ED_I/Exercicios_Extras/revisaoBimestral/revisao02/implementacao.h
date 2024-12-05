#include <stdio.h>
#include <stdlib.h>

//SOBRE LISTA ENCADEADA

typedef int itemL;

struct no {
    itemL valor;
    struct no *prox;
};

typedef struct no* Lista;

Lista criarLista(itemL x) {
    Lista nozinho = (Lista)malloc(sizeof(struct no));
    nozinho->valor = x;
    nozinho->prox = NULL;
    return nozinho;
}

int vazioL(Lista *list) {
    if (*list == NULL) {
        return 1;
    } else return 0;
}

void inserirInicioLista(itemL x, Lista *list) {
    Lista novoNo = (Lista)malloc(sizeof(struct no));
    novoNo->valor = x;
    novoNo->prox = *list;
    *list = novoNo;
}

void inserirFinalLista(itemL x, Lista *list) {
    Lista novoNo = (Lista)malloc(sizeof(struct no));
    novoNo->valor = x;
    novoNo->prox = NULL;
    
    if (*list == NULL) {
        *list = novoNo;
    } else {
        Lista aux = *list;
        while(aux->prox != NULL) {
            aux = aux->prox;
        }
        aux->prox = novoNo;
    }
}

itemL removerFinalLista(Lista *list) {
    itemL x;
    Lista ant, aux = *list;

    while (aux->prox != NULL) {
        ant = aux;
        aux = aux->prox;
    }

    if (aux == (*list)) {
        *list = aux->prox;
        x = (*list)->valor;
    } else {
        ant->prox = aux->prox;
        x = ant->valor;
    }
    
    free(aux);
    return x;
}

itemL removerInicioLista(Lista *list) {
    Lista aux = *list;
    itemL x = aux->valor;
    *list = aux->prox;
    free(aux);

    return x;
}

void exibirLista(Lista list) {
    while (list != NULL) {
        printf("%d ", list->valor);
        list = list->prox;
    }
}

int tamanhoLista(Lista list) {
    if (list == NULL) {
        return 0;
    } 
    return 1 + tamanhoLista(list->prox);
}

void mostrarInvertido(Lista list) {
    if (list == NULL) {
        return;
    }
    exibirLista(list->prox);
    printf("%d ", list->valor);
}

void destruirL(Lista *list) {
    while(*list != NULL) {
        Lista aux = *list;
        *list = aux->prox;
        free(aux);
    }
}

int pertenceLista(itemL x, Lista list) {
    if (list == NULL) {
        return 0;
    }

    if (list->valor == x) {
        return 1;
    }

    return pertenceLista(x, list->prox);
}

//SOBRE PILHA

typedef char itemP;

struct pilha {
    int max;
    int topo;
    itemP *item;
};

typedef struct pilha* Pilha;

Pilha criarPilha(int x) {
    Pilha pilhazinha = (Pilha)malloc(sizeof(struct pilha));
    pilhazinha->max = x;
    pilhazinha->topo = -1;
    pilhazinha->item = (itemP*)malloc(x * sizeof(itemP));
    return pilhazinha;
}

int vaziaP(Pilha pil) {
    if (pil->topo == -1) {
        return 1;
    } else return 0;
}

int cheiaP(Pilha pil) {
    if (pil->topo == pil->max - 1) {
        return 1;
    } else return 0;
}

void empilhar(itemP x, Pilha pil) {
    if (cheiaP(pil)) {
        printf("Pilha esta cheia...");
        abort();
    }
    pil->topo++;
    pil->item[pil->topo] = x;
}

itemP desempilhar(Pilha pil) {
    if(vaziaP(pil)) {
        printf("Pilha esta vazia...");
        abort();
    }
    itemP x = pil->item[pil->topo];
    pil->topo--;

    return x;
}

void destruirP(Pilha *pil) {
    free((*pil)->item);
    free(*pil);
    *pil = NULL;
}

//SOBRE FILA

typedef float itemF;

struct fila {
    int max;
    int total;
    int inicio;
    int final;
    itemF *item;
};

typedef struct fila* Fila;

#define avanca(i, max) (i = i + 1 % max)

Fila criarFila(int x) {
    Fila filinha = (Fila)malloc(sizeof(struct fila));
    filinha->max = x;
    filinha->total = 0;
    filinha->inicio = 0;
    filinha->final = 0;
    filinha->item = (itemF*)malloc(x * sizeof(itemF));
    return filinha;
}

int vaziaF(Fila fil) {
    if(fil->total == 0) {
        return 1;
    } else return 0;
}

int cheiaF(Fila fil) {
    if(fil->total == fil->max) {
        return 1;
    } else return 0;
}

void enfileirar(itemF x, Fila fil) {
    if(cheiaF(fil)) {
        printf("Fila esta cheia...");
        abort();
    }
    fil->item[fil->final] = x;
    avanca(fil->final, fil->max);
    fil->total++;
}

itemF desenfileirar(Fila fil) {
    if(vaziaF(fil)) {
        printf("Fila esta vazia...");
        abort();
    }
    itemF x = fil->item[fil->inicio];
    avanca(fil->inicio, fil->max);
    fil->total--;

    return x;
}

void destruirF(Fila *fil) {
    free((*fil)->item);
    free(*fil);
    *fil = NULL;
}