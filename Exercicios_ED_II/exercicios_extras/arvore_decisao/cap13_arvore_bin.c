#include <stdio.h>
#include <stdlib.h>

typedef int ITEM;
typedef char* ITEM_STRING;

typedef struct arvore {
    struct arvore *esq;
    ITEM valor;
    struct arvore *dir;
} *Arv;

Arv criar_no_arv(Arv no_esq, ITEM valor_x, Arv no_dir) {
    Arv no = (Arv*)malloc(sizeof(struct arvore));
    no->esq = no_esq;
    no->valor = valor_x;
    no_dir = no_dir;
    return no;
}

int nos(Arv arvore) {
    if (arvore == NULL) return 0;
    else 1 + nos(arvore->esq) + nos(arvore->dir);
}

int folhas(Arv arvore) {
    if (arvore == NULL) return 0;
    if (arvore->esq == NULL && arvore->dir == NULL) return 1;
    else return folhas(arvore->esq) + folhas(arvore->dir);
}

int altura(Arv arvore) {
    if (arvore == NULL) return 0;

    int valor_esq = altura(arvore->esq);
    int valor_dir = altura(arvore->dir);

    return 1 + (valor_esq >= valor_dir ? valor_esq : valor_dir);
}

int tem(Arv arvore, ITEM valor_x) {
    if (arvore == NULL) return 0;
    if (valor_x == arvore->valor) return 1;
    else return tem(arvore->esq, valor_x) || tem(arvore->dir, valor_x);
}

int eb(Arv arvore) {
    if (arvore == NULL) return 1;
    if (arvore->esq != NULL && arvore->dir != NULL) return eb(arvore->esq) && eb(arvore->dir);
    if (arvore->esq == NULL && arvore->dir == NULL) return 1;
    return 0;
}

int iguais(Arv arvore_a, Arv arvore_b) {
    if (arvore_a == NULL && arvore_b == NULL) return 1;
    else if (arvore_a == NULL || arvore_b == NULL) return 0;
    if (arvore_a->valor == arvore_b->valor) return iguais(arvore_a->esq, arvore_b->esq) && iguais(arvore_a->dir, arvore_b->dir);
    return 0;
}

int valor(Arv arvore) {
    if (arvore == NULL) return 0;
    if (arvore->esq == NULL && arvore->dir == NULL) return atoi(arvore->valor);
    if (arvore->esq != NULL && arvore->dir != NULL) {
        int valor_esq = valor(arvore->esq);
        int valor_dir = valor(arvore->dir);

        if (strcmp(arvore->valor, "+") == 0) {
            return valor_esq + valor_dir;
        } else if (strcmp(arvore->valor, "-") == 0) {
            return valor_esq - valor_dir;
        } else if (strcmp(arvore->valor, "*") == 0) {
            return valor_esq * valor_dir;
        } else if (strcmp(arvore->valor, "/") == 0) {
            return valor_esq / valor_dir;
        }
    }
}

void exibe_dec(Arv arvore) {
    if (arvore == NULL) return 0;
    exibe_dec(arvore->dir);
    printf("%d ", arvore->valor);
    exibe_dec(arvore->esq);
}