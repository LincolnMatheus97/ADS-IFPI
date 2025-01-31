#include <stdio.h>
#include <stdlib.h>
#include "lista_OrdDin.h"

struct elemento {
    struct aluno dados;
    struct elemento *prox;
};

typedef struct elemento Elem;

Lista* criar_Lista() {
    Lista* li = (Lista*) malloc(sizeof(Lista));
    if (li != NULL) {
        *li = NULL;
    } else {
        return li;
    }
}

void liberar_Lista(Lista* li) {
    if (li != NULL) {
        Elem* no;
        while ((*li) != NULL) {
            no = *li;
            *li = (*li)->prox;
            free(no);
        }
        free(li);
    }
}

int tamanho_Lista(Lista* li) {
    if (li == NULL) {
        return 0;
    } else {
        int cont = 0;
        Elem* no = *li;
        while (no != NULL) {
            cont++;
            no = no->prox;
        }
        return cont;
    }
}

int lista_Cheia(Lista* li) {
    return 0;
}

int lista_Vazia(Lista* li) {
    if (li == NULL) {
        return 1;
    } else if (*li == NULL) {
        return 1;
    } else {
        return 0;
    }
}

int inserir_Ini_Lista(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }
    Elem* no = (Elem*) malloc(sizeof(Elem));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = al;
        no->prox = (*li);
        *li = no;
        return 1;
    }
}

int inserir_Fin_Lista(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }
    Elem* no = (Elem*) malloc(sizeof(Elem));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = al;
        no->prox = NULL;
        
        if ((*li) == NULL) {
            *li = no;
        } else {
            Elem *aux = *li;
            while (aux->prox != NULL) {
                aux = aux->prox;
            }
            aux->prox = no;
        }
        return 1;
    }
}

int inserir_Forma_Ordenada(Lista* li, struct aluno al) {
    if (li == NULL) {
        return 0;
    }
    Elem* no = (Elem*) malloc(sizeof(Elem));

    if (no == NULL) {
        return 0;
    } else {
        no->dados = al;

        if (lista_Vazia(li)) {
            no->prox = (*li);
            *li = no;
            return 1;
        } else {
            Elem *ant, *atual = *li;
            while(atual != NULL && atual->dados.matricula < al.matricula) {
                ant = atual;
                atual = atual->prox;
            }
            if (atual == *li) {
                no->prox = (*li);
                *li = no;
            } else {
                no->prox = ant->prox;
                ant->prox = no;
            }
        }
        return 1;
    }
}

int remover_Ini_Lista(Lista* li) {
    if (li == NULL) {
        return 0;
    } else if ((*li) == NULL) {
        return 0;
    } else {
        Elem *no = *li;
        *li = no->prox;
        free(no);
        return 1;
    }
}

int remover_Fin_Lista(Lista* li) {
    if (li == NULL) {
        return 0;
    } else if ((*li) == NULL) {
        return 0;
    } else {
        Elem *ant, *no = *li;
        while(no->prox != NULL) {
            ant = no;
            no = no->prox;
        }
        if (no == (*li)) {
            *li = no->prox;
        } else {
            ant->prox = no->prox;
        }
        free(no);
        return 1;
    }
}

int remover_Lista(Lista* li, int mat) {
    if (li == NULL) {
        return 0;
    }
    Elem *ant, *no = *li;
    while (no != NULL && no->dados.matricula != mat) {
        ant = no;
        no = no->prox;
    }
    if (no == NULL) {
        return 0;
    } else if (no == *li) {
        *li = no->prox;
    } else {
        ant->prox = no->prox;
    }
    free(no);
    return 1;
}

int consultar_Pos_Lista(Lista* li, int pos, struct aluno *al) {
    if (li == NULL || pos <= 0) {
        return 0;
    }
    Elem *no = *li;
    int i = 1;
    while(no != NULL && i < pos) {
        no = no->prox;
        i++;
    }
    if (no == NULL) {
        return 0;
    } else {
        *al = no->dados;
        return 1;
    }
}

int consultar_Lista_Matr(Lista* li, int mat, struct aluno *al) {
    if (li == NULL) {
        return 0;
    }
    Elem *no = *li;
    while(no != NULL && no->dados.matricula != mat) {
        no = no->prox;
    }
    if (no == NULL) {
        return 0;
    } else {
        *al = no->dados;
        return 1;
    }

}