#include <stdio.h>
#include "arvore_avl.h"

int main() {
    No raiz = NULL;

    printf("--- Remocao com Rotacao Dupla ---\n");

    printf("Cenario inicial...\n");
    raiz = inserir_duplo(raiz, 40);
    raiz = inserir_duplo(raiz, 20);
    raiz = inserir_duplo(raiz, 50);
    raiz = inserir_duplo(raiz, 10);
    raiz = inserir_duplo(raiz, 30);

    printf("Arvore em harmonia (em-ordem): ");
    em_ordem(raiz);
    printf("\n");
    printf("Fatores de Balanceamento Iniciais:\n");
    imprimir_fator_balanceamento(raiz);
    printf("\n");

    printf("2. Removendo o no 50...\n");
    raiz = remover_duplo(raiz, 50);

    printf("3. Resultado Final Apos a Rotacao Dupla:\n");
    printf("Nova raiz: %d\n", raiz->valor);
    printf("Arvore final (em-ordem): ");
    em_ordem(raiz);
    printf("\n");
    printf("Fatores de Balanceamento Finais:\n");
    imprimir_fator_balanceamento(raiz);

    return 0;
}