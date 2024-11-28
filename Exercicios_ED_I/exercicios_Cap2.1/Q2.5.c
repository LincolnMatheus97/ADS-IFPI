#include <stdio.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(100);
    char expressao[100];

    printf("Digite sua expressao: ");
    fgets(expressao, sizeof(expressao), stdin);

    for (int i = 0; expressao[i] != '\0' && expressao[i] != '\n'; i++) {
        empilhar(expressao[i], pilha);
    }

    int balanceado = ehBalanceado(pilha);

    if (balanceado) {
        printf("A expressao esta Balanceada\n");
    } else {
        printf("A expressao nao esta Balanceada\n");
    }

    return 0;
}