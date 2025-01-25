#include <stdio.h>
#include <stdlib.h>

typedef char ITEM;

struct fila {
    int maximo;
    int total;
    int inicio;
    int final;
    ITEM *item;
};

typedef struct fila *FILA;

#define avanca(i, maximo) (i = (i + 1) % maximo);

FILA criarFila(int m) {
    FILA filinha = (FILA)malloc(sizeof(struct fila));
    filinha->maximo = m;
    filinha->total = 0;
    filinha->inicio = 0;
    filinha->final = 0;
    filinha->item = (ITEM*)malloc(m * sizeof(ITEM));
    return filinha;
}

int vaziaF(FILA f) {
    if(f->total == 0) {
        return 1;
    } else return 0;
}

int cheiaF(FILA f) {
    if(f->total == f->maximo) {
        return 1;
    } else return 0;
}

void enfileirar(ITEM x, FILA f) {
    if (cheiaF(f)) abort();
    f->item[f->final] = x;
    avanca(f->final, f->maximo);
    f->total++;
}

ITEM desenfileirar(FILA f) {
    if (vaziaF(f)) abort();
    ITEM x = f->item[f->inicio];
    avanca(f->inicio, f->maximo);
    f->total--;
    return x;
}

void destruirF(FILA *f) {
    free((*f)->item);
    free(*f);
    *f = NULL;
}