#include <stdio.h>
#include "arvore_avl.h"

int main() {
    No raiz = NULL;

    printf(" ---Insercao com Rotacao Simples --- \n\n");

    printf("Inserindo 10...\n");
    raiz = inserir_simples(raiz, 10);
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    printf("Inserindo 20...\n");
    raiz = inserir_simples(raiz, 20);
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    printf("Inserindo 30 (causando a rotacao simples)...\n");
    printf("--> Fatores de balanceamento no momento do desbalanceamento (antes da rotacao):\n");
    printf("No 10, FB = -2 <-- CAUSA DA ROTACAO\n");
    printf("No 20, FB = -1\n");
    printf("No 30, FB = 0\n");
    raiz = inserir_simples(raiz, 30);

    printf("\n---Arvore Final --- \n");
    printf("Em ordem: ");
    em_ordem(raiz);
    printf("\nFatores de Balanceamento:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    return 0;
}