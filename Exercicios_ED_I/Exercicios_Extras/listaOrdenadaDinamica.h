#include <stdio.h>
#include <stdlib.h>

typedef int item;

struct no {
    item valor;
    struct no *prox;
};

typedef struct no* Lista;
typedef struct no  Elemento;
typedef struct no* Pilha;

Lista* criarLista() {
    Lista* li = (Lista*)malloc(sizeof(Lista));
    if (li != NULL) {
        *li = NULL;
    }
    return li;
} 

void exibir_Lista(Lista* list) {
    Elemento* nozinho = *list;
    while (nozinho != NULL) {
        printf("%d ", nozinho->valor);
        nozinho = nozinho->prox;
    }
}

void inserir_FinalLista(Lista *A, Lista B) {
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

// Lista clone(Lista list) {
//     if (list == NULL) {
//         return NULL;
//     }
//     return no(list->valor, clone(list->prox));
// }

void inverter_Lista(Lista* list) {
    Elemento* nozinho = *list;
    if (nozinho == NULL) {
        return;
    }
    inverter_Lista(&(nozinho->prox));
    printf("%d ", nozinho->valor);
}

int ocorrencias(item x, Lista list) {
    int contador = 0, comparador = x;

    while (list != NULL) {
        if (list->valor == comparador) {
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
    if (listA->valor != listB->valor) {
        return 0;
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

void empilhar(item x, Pilha* pilha) {
    Elemento* nozinho = (Elemento*)malloc(sizeof(Elemento));
    if (nozinho != NULL) {
        nozinho->valor = x;
        nozinho->prox = *pilha;
        *pilha = nozinho;
    }
}

int desempilhar(Pilha* pilha) {
    if (*pilha != NULL) {
        Elemento* nozinho = *pilha;
        int valor = nozinho->valor; //Valor do Nó nozinho topo
        *pilha = nozinho->prox;      //O proximo nó se torna o topo
        free(nozinho);               //libera o nó que estava no topo
        return valor;
    }
    exit(1);
}