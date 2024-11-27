#include <stdio.h>
#include "pilha.h"

int main() {
    PILHA pilhaA = criar_Pilha(10);
    PILHA pilhaB = criar_Pilha(10);

    for (int i = 0; i < 10; i++) {
        int numero = 0;
        if (i != 0) {
            printf("Digite um numero: ");
            scanf("%d", &numero);

            if(topoP(pilhaA) < numero) {
                empilhar(numero, pilhaB);
            } else {
                empilhar(numero, pilhaA);
            }
        } else {
            printf("Digite um numero: ");
            scanf("%d", &numero);
            empilhar(numero, pilhaA);
        }
    }

    while(!vaziaP(pilhaA)) {
        printf("%d\n", desempilhar(pilhaA));
    }
    return 0;
}