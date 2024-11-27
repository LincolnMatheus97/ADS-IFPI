#include <stdio.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(3);
    empilhar(1, pilha);
    empilhar(2, pilha);
    printf("%d\n", desempilhar(pilha));
    printf("%d\n", desempilhar(pilha));
    printf("%d\n", desempilhar(pilha));
    return 0;
}