#include <stdio.h>
#include <stdlib.h>

typedef float ITEM;

struct pilha {
    int max;
    int topo;
    ITEM *item;
};

typedef struct pilha* PILHAO;

PILHAO criarPilha(int maximo) {
    PILHAO pilha = (PILHAO)malloc(sizeof(struct pilha));
    pilha->max = maximo;
    pilha->topo = -1;
    pilha->item = (ITEM*)malloc(maximo * sizeof(int));
    return pilha;
}

int cheiaP(PILHAO pilhazinha) {
    if(pilhazinha->topo == pilhazinha->max -1) {
        return 1;
    } else return 0;
}

int vazioP(PILHAO pilhazinha) {
    if(pilhazinha->topo == -1) {
        return 1;
    } else return 0;
}

void empilhar(ITEM x, PILHAO pilhazinha) {
    if (cheiaP(pilhazinha)) {
        abort();
    }
    pilhazinha->topo++;
    pilhazinha->item[pilhazinha->topo] = x;
}

ITEM desempilhar(PILHAO pilhazinha) {
    if(vazioP(pilhazinha)) {
        abort();
    }
    ITEM x = pilhazinha->item[pilhazinha->topo];
    pilhazinha->topo--;
    return x;
}

ITEM topoP(PILHAO pilhazinha) {
    if(vazioP(pilhazinha)) {
        abort();
    }
    return pilhazinha->item[pilhazinha->topo];
}

void destruirP(PILHAO *pilhazinha) {
    free((*pilhazinha)->item);
    free(*pilhazinha);
    *pilhazinha = NULL;
}
