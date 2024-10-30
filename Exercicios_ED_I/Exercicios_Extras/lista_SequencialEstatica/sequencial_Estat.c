#include <stdio.h>
#include <stdlib.h>
#include "sequencial_Estat.h"

struct lista {
    int quantidade;
    struct aluno dados[MAX];
};

Lista* criar_Lista() {
    Lista* li;
    li = (Lista*) malloc(sizeof(struct lista));
    if (li != NULL) {
        li-> quantidade = 0;
    }
    return li;
}

void liberar_Lista(Lista* li) {
    free(li);
}

int tamanho_Lista(Lista* li) {
    if (li == NULL) {
        return -1;
    } else {
        return li-> quantidade;
    }
}

int lista_Cheia(Lista* li) {
    if (li == NULL) {
        return -1;
    } else {
        return (li-> quantidade == MAX);
    }
}

int lista_Vazia(Lista* li) {
    if (li == NULL) {
        return -1;
    } else {
        return (li-> quantidade == 0);
    }
}

int inserir_Final_Lista(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    } else if (lista_Cheia(li)) {
        return 0;
    } else {
        li->dados[li->quantidade] = al;
        li->quantidade++;
        return 1;
    }
}

int inserir_Inicio_Lista(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    } else if (lista_Cheia(li)) {
        return 0;
    } else {
        int i;
        for (i = li-> quantidade - 1; i >= 0; i--) {
            li-> dados[i + 1] = li->dados[i];
        }
        li-> dados[0] = al;
        li-> quantidade++;
        return 1;
    }
}

int inserir_Forma_Ordenada(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    } else if (lista_Cheia(li)) {
        return 0;
    } else {
        int k,i = 0;
        while (i < li-> quantidade && li->dados[i].matricula < al.matricula) {
            i++;
        }
        for (k = li->quantidade - 1; k >= i; k--) {
            li->dados[k + 1] = li->dados[k];
        }
        li->dados[i] = al;
        li->quantidade++;
        return 1;
    }
}

int remover_Final_Lista(Lista* li) {
    if (li == NULL) {
        return 0;
    } else if (lista_Vazia(li)) {
        return 0;
    } else {
        li->quantidade--;
        return 1;
    }
}

int remover_Inicio_Lista(Lista* li) {
    if (li == NULL) {
        return 0;
    } else if (lista_Vazia(li)) {
        return 0;
    } else {
        int i;
        for(i = 0; i < li->quantidade - 1; i++) {
            li->dados[i] = li->dados[i + 1];
        }
        li->quantidade--;
        return 1;
    }
}

int remover_Lista(Lista* li, int mat) {
    if (li == NULL) {
        return 0;
    } else if (lista_Vazia(li)) {
        return 0;
    } else {
        int k, i = 0;
        while(i < li->quantidade && li->dados[i].matricula != mat) {
            i++;
        }
        if (i == li->quantidade) {
            return 0;
        }
        for (k = i; k < li->quantidade - 1; k++) {
            li->dados[k] = li->dados[k + 1];
        }
        li->quantidade--;
        return 1;
    }
}

int consultar_Lista_Pos(Lista* li, int pos, struct aluno *al) {
    if (li == NULL || pos <= 0 || pos > li->quantidade) {
        return 0;
    } else {
        *al = li->dados[pos - 1];
        return 1;
    }
}

int consultar_Lista_Cont(Lista* li, int mat, struct aluno *al) {
    if (li == NULL) {
        return 0;
    } else {
        int i = 0;
        while(i < li-> quantidade && li-> dados[i].matricula != mat) {
            i++;
        }
        if (i == li-> quantidade) {
            return 0;
        }
        *al = li->dados[i];
        return 1;
    }
}

void imprimir_Lista(Lista* li){
    if(li == NULL)
        return;
    int i;
    for(i = 0; i < li->quantidade; i++){
        printf("Matricula: %d\n",li->dados[i].matricula);
        printf("Nome: %s\n",li->dados[i].nome);
        printf("Notas: %f %f %f\n",li->dados[i].n1,
                                   li->dados[i].n2,
                                   li->dados[i].n3);
        printf("-------------------------------\n");
    }
}