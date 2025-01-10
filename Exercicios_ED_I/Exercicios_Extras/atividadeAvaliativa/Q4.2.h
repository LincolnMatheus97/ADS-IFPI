#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef int intItem;
typedef char charItem;

struct noDuplo {
    intItem matricula;
    charItem nome[23];
    struct noDuplo *prox;
    struct noDuplo *ant;
};

typedef struct noDuplo* LISTA;

LISTA criarNo(intItem x, const charItem n[23]) {
    LISTA listinha = (LISTA)malloc(sizeof(struct noDuplo));
    listinha->matricula = x;
    strncpy(listinha->nome, n, 23);
    listinha->prox = NULL;
    listinha->ant = NULL;
    return listinha;
}

// Função para inserir um novo nó no início da lista
void inserirNoInicio(intItem x, const charItem n[23], LISTA *l) {
    LISTA novoNo = criarNo(x, n); // Cria um novo nó

    if (*l != NULL) { // Se a lista não estiver vazia
        novoNo->prox = *l; // O novo nó aponta para o primeiro nó da lista como próximo
        (*l)->ant = novoNo; // O nó que era o primeiro agora aponta para o novo nó como anterior
    }
    
    *l = novoNo; // O novo nó se torna o primeiro nó da lista
}

// Função para inserir um novo nó no final da lista
void inserirNoFinal(intItem x, const charItem n[23], LISTA *l) {
    LISTA novoNo = criarNo(x, n); // Cria um novo nó

    if (*l == NULL) { // Se a lista estiver vazia
        *l = novoNo; // O novo nó se torna o primeiro nó da lista
    } else {
        LISTA aux = *l; // Cria um ponteiro auxiliar para percorrer a lista
        while (aux->prox != NULL) { // Percorre a lista até o último nó
            aux = aux->prox;
        }
        aux->prox = novoNo; // O último nó atual aponta para o novo nó como próximo
        novoNo->ant = aux; // O novo nó aponta para o último nó atual como anterior
    }
}

// Função para remover um item específico da lista
void removerItemEspecifico(intItem x, LISTA *l) {
    if (*l == NULL) { // Se a lista estiver vazia
        return; // Não há nada para remover
    }
    LISTA ant = NULL, novoNo = *l; // Declara ponteiros para o nó anterior e o nó atual
    while (novoNo != NULL && novoNo->matricula != x) { // Percorre a lista até encontrar a matricula ou chegar ao final
        ant = novoNo; // Atualiza o nó anterior
        novoNo = novoNo->prox; // Avança para o próximo nó
    }
    if (novoNo == NULL) { // Se o matricula não foi encontrado
        return; // Não há nada para remover
    }
    if (novoNo == *l) { // Se o nó a ser removido é o primeiro nó da lista
        *l = novoNo->prox; // O próximo nó se torna o primeiro nó da lista
        if (*l != NULL) { // Se a lista não estiver vazia após a remoção
            (*l)->ant = NULL; // O novo primeiro nó não tem nó anterior
        }
    } else {
        ant->prox = novoNo->prox; // O nó anterior aponta para o próximo nó do nó a ser removido
        if (novoNo->prox != NULL) { // Se o nó a ser removido não é o último nó
            novoNo->prox->ant = ant; // O próximo nó aponta para o nó anterior como anterior
        }
    }
    free(novoNo); // Libera a memória alocada para o nó removido
}

// Função para mostrar a lista do início ao fim
void mostrarInicioAoFim(LISTA l) {
    while (l != NULL) {
        printf("%d %s\n", l->matricula, l->nome);
        l = l->prox;
    }
}

// Função para mostrar a lista do fim ao início
void mostrarFimAoInicio(LISTA l) {
    if (l == NULL) {
        return;
    }
    while (l->prox != NULL) {
        l = l->prox;
    }
    while (l != NULL) {
        printf("%d %s\n", l->matricula, l->nome);
        l = l->ant;
    }
}