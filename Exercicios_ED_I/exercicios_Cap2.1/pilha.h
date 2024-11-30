#include <stdio.h>
#include <stdlib.h>

typedef float ITEM;

struct pilha {
    int max;
    int topo;
    ITEM* itemzinho;
};

typedef struct pilha* PILHA;

PILHA criar_Pilha(int x) {
    PILHA pilhazinha = (PILHA)malloc(sizeof(struct pilha));
    pilhazinha->max = x;
    pilhazinha->topo = -1;
    pilhazinha->itemzinho = (ITEM*)malloc(x * sizeof(int));
    return pilhazinha;
}

int cheiaP(PILHA p) {
    if (p->topo == p->max -1) {
        return 1;
    } else return 0;
}

int vaziaP(PILHA p) {
    if (p->topo == -1) {
        return 1;
    } else return 0;
}

void empilhar(ITEM x, PILHA p) {
    if (cheiaP(p)) {
        printf("A pilha esta cheia...\n");
        abort();
    }
    p->topo++;
    p->itemzinho[p->topo] = x;
}

ITEM desempilhar(PILHA p) {
    if (vaziaP(p)) {
        printf("A pilha esta vazia...\n");
        abort();
    }
    ITEM x = p->itemzinho[p->topo];
    p->topo--;
    return x;
}

ITEM topoP(PILHA p) {
    if (vaziaP(p)) {
        printf("A pilha esta vazia...\n");
        abort();
    }
    return p->itemzinho[p->topo];
}

void destruirP(PILHA *p) {
    free((*p)->itemzinho);
    free(*p);
    *p = NULL;
}

int ehBalanceado(PILHA p) {
    PILHA pilhaAux = criar_Pilha(p->max);
    int balanceado = 1;

    while(!vaziaP(p)) {
        char atual = desempilhar(p);

        if (atual == ']' || atual == '}' || atual == ')') {
            empilhar(atual, pilhaAux);
        } else if (atual == '[' || atual == '{' || atual == '(') {
            if(vaziaP(pilhaAux)) {
                balanceado = 0;
                break;
            }
            char topo = desempilhar(pilhaAux);
            if((atual == '[' && topo != ']') || (atual == '{' && topo != '}') || (atual == '(' && topo != ')')) {
                balanceado = 0;
                break;
            }
        }
    }

    if(!vaziaP(pilhaAux)) {
        balanceado = 0;
    }

    destruirP(&pilhaAux);
    return balanceado;
}