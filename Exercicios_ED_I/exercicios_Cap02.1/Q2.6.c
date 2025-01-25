#include <stdio.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(5);
    char s[11];

    for (int i = 0; i < 3; i++) {
        printf("? ");
        gets(s);
        empilhar(s, pilha);
    }

    while(!vaziaP(pilha)) {
        printf("%s\n", desempilhar(pilha));
    }

    return 0;
}