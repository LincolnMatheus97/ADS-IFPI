#include <stdio.h>
#include "arvore_avl.h"

int main() {
    No raiz = NULL;

    printf(" ---Insercao com Rotacao Dupla --- \n\n");

    printf("Inserindo 30...\n");
    raiz = inserir_duplo(raiz, 30);
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    printf("Inserindo 10...\n");
    raiz = inserir_duplo(raiz, 10);
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    printf("Inserindo 20 (causando a rotacao dupla)...\n");
    printf("Fatores de Balanceamento:\n");
    printf("No 10, FB = -1\n");
    printf("No 20, FB = 0\n");
    printf("No 30, FB = 2 <-- CAUSA DA ROTACAO\n");
    raiz = inserir_duplo(raiz, 20);

    printf("\n---Arvore Final --- \n");
    printf("Em ordem: ");
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    return 0;
}