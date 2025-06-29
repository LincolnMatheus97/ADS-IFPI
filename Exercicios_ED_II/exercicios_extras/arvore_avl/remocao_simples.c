#include <stdio.h>
#include "arvore_avl.h"

int main() {
    No raiz = NULL;

    printf("--- Remocao com Rotacao Simples ---\n\n");
    printf("Construindo a arvore inicial com os valores: 20, 10, 40, 30, 50\n");
    raiz = inserir_simples(raiz, 20);
    raiz = inserir_simples(raiz, 10);
    raiz = inserir_simples(raiz, 40);
    raiz = inserir_simples(raiz, 30);
    raiz = inserir_simples(raiz, 50);

    printf("\nArvore inicial (em-ordem): ");
    em_ordem(raiz);
    printf("\nFatores de Balanceamento Iniciais:\n");
    imprimir_fator_balanceamento(raiz);

    printf("\n-----------------------------------------------\n");
    printf("\nRemovendo o no 10...\n");
    raiz = remover_simples(raiz, 10);

    printf("-> O no 20 ficou desbalanceado (FB = -2).\n");
    printf("-> Seu filho a direita (40) tem FB = 0.\n");
    printf("-> Realizando Rotacao Simples a Esquerda no no 20.\n");

    printf("\n-----------------------------------------------\n");
    printf("\n--- Arvore Final Balanceada ---\n");
    printf("Nova raiz da subarvore: %d\n", raiz->valor);
    printf("Arvore final (em-ordem): ");
    em_ordem(raiz);
    printf("\nFatores de Balanceamento Finais:\n");
    imprimir_fator_balanceamento(raiz);

    return 0;
}