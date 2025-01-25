#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(100);

    char frase[100];
    printf("Digite uma frase: ");
    fgets(frase, sizeof(frase), stdin);

    for (int i = 0; frase[i] != '\0' && frase[i] != '\n'; i++) {
        empilhar(frase[i], pilha);
    }

    while(!vaziaP(pilha)) {
        printf("%c", desempilhar(pilha));
    }
    return 0;
}