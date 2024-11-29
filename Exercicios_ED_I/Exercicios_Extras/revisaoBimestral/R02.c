#include <stdio.h>
#include <stdlib.h>
#include "implementacao.h"

int main() {
    PILHA pilha = criarPilha(10);
    char s[10];
    printf("Digite uma palavra pequena: ");
    gets(s);

    for(int i = 0; s[i]; i++) {
        empilhar(s[i], pilha);
    }

    while(!vaziaP(pilha)) {
        printf("%c ", desempilhar(pilha));
    }
    return 0;
}