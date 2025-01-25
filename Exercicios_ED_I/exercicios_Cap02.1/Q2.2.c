#include <stdio.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(100);
    empilhar(8, pilha);

    while (topoP(pilha) > 0) {
        empilhar(topoP(pilha) / 2, pilha);
    }

    while (!vaziaP(pilha)) {
        printf("%f\n", desempilhar(pilha));
    }
    return 0;
}