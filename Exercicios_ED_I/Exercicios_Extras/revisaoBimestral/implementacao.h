#include <stdio.h>
#include <stdlib.h>

//Sobre Lista Encadeadas
typedef int itemList;

struct no {
    itemList valor;
    struct no *prox;
};

typedef struct no* LISTA;

LISTA criarLista(itemList x) {
    LISTA listinha = (LISTA)malloc(sizeof(struct no));
    listinha->valor = x;
    listinha->prox = NULL;
    return listinha;
}

int vaziaL(LISTA *l) {
    if(*l == NULL) {
        return 1;
    } else return 0;
}

void inserirInicioLista(itemList x, LISTA *l) {
    LISTA novoNo = (LISTA)malloc(sizeof(struct no));
    novoNo->valor = x;
    novoNo->prox = *l;
    *l = novoNo;
}

void inserirFinalLista(itemList x, LISTA *l) {
    LISTA novoNo = (LISTA)malloc(sizeof(struct no));
    novoNo->valor = x;
    novoNo->prox = NULL;

    if (*l == NULL) {
        *l = novoNo;
    } else {
        LISTA aux = *l;
        while (aux->prox != NULL) {
            aux = aux->prox;
        }
        aux->prox = novoNo;
    }
}

void removerInicioLista(LISTA *l) {
    LISTA novoNo = *l;
    *l = novoNo->prox;
    free(novoNo);
}

void removerFinalLista(LISTA *l) {
    LISTA ant, novoNo = *l;
    while (novoNo->prox != NULL) {
        ant = novoNo;
        novoNo = novoNo->prox;
    }
    if(novoNo == (*l)) {
        *l = novoNo->prox;
    } else {
        ant->prox = novoNo->prox;
    }
    free(novoNo);
}

void exibirLista(LISTA l) {
    while (l != NULL) {
        printf("%d ", l->valor);
        l = l->prox;
    }
}

void destruiL(LISTA *l) {
    while (*l != NULL) {
        LISTA n = *l;
        *l = n->prox;
        free(n);
    }
}

int tamanhoL(LISTA l) {
    if (l == NULL) {
        return 0;
    } return 1 + tamanhoL(l->prox);
}

int pertenceL(itemList x, LISTA l) {
    if(l == NULL) {
        return 0;
    }
    if (l->valor == x) {
        return 1;
    }
    return pertenceL(x, l->prox);
}

void exibirInvLista(LISTA l) {
    if(l == NULL) {
        abort();
    }
    exibirInvLista(l->prox);
    printf("%d ", l->valor);
}

//Sobre Lista LIFO ou Pilha

typedef char itemPilha;

struct pilha {
    int max;
    int topo;
    itemPilha *item;
};

typedef struct pilha* PILHA;

PILHA criarPilha(int x) {
    PILHA pilhinha = (PILHA)malloc(sizeof(struct pilha));
    pilhinha->max = x;
    pilhinha->topo = -1;
    pilhinha->item = (itemPilha*)malloc(x * sizeof(itemPilha));
    return pilhinha;
}

int vaziaP(PILHA p) {
    if(p->topo == -1) {
        return 1;
    } else return 0;
}

int cheiaP(PILHA p) {
    if(p->topo == p->max - 1) {
        return 1;
    } else return 0;
}

void empilhar(itemPilha x, PILHA p) {
    if (cheiaP(p)) {
        abort();
    }
    p->topo++;
    p->item[p->topo] = x;
}

itemPilha desempilhar(PILHA p) {
    if(vaziaP(p)) {
        abort();
    }
    itemPilha x = p->item[p->topo];
    p->topo--;
    return x;
}

itemPilha topoP(PILHA p) {
    if (p->topo == -1) {
        abort();
    }
    itemPilha topo = p->item[p->topo];
    return topo;
}

void destruiP(PILHA *p) {
    free((*p)->item);
    free(*p);
    *p = NULL;
}

//Sobre Lista FIFO ou Fila

typedef char itemFila;

struct fila {
    int maximo;
    int total;
    int inicio;
    int final;
    itemFila* item;
};

typedef struct fila* FILA;

#define avanca(i, maximo) (i = (i + 1) % maximo); /*Fazemos isso para melhor o aproveitamento de espaço do vetor f->item. Simulando um vetor circular. Entao quando um indice indicando a ultima posiçao desse vetor for avançando, ele voltara a indicar a primeira posicao, ou seja, posiçoes
vazias deixadas por itens removidos da fila, podem ser reutilizados para inserção de novos itens*/

FILA criarFila(int x) {
    FILA filinha = (FILA)malloc(sizeof(struct fila));
    filinha->maximo = x;
    filinha->total = 0;
    filinha->inicio = 0;
    filinha->final = 0;
    filinha->item = (itemFila*)malloc(x *sizeof(itemFila));
    return filinha;
}

int vaziaF(FILA f) {
    if (f->total == 0) {
        return 1;
    } else return 0;
}

int cheiaF(FILA f) {
    if (f->total == f->maximo) {
        return 1;
    } else return 0;
}

void enfileirar(itemFila x, FILA f) {
    if (cheiaF(f)) {
        abort();
    }
    f->item[f->final] = x;
    avanca(f->final, f->maximo);
    f->total++;
}

itemFila desenfileirar(FILA f) {
    if(vaziaF(f)) {
        abort();
    }
    itemFila x = f->item[f->inicio];
    avanca(f->inicio, f->maximo);
    f->total--;
    return x;
}

int totalF(FILA f) {
    return f->total;
}

void destruirF(FILA *f) {
    free((*f)->item);
    free(*f);
    *f = NULL;
}