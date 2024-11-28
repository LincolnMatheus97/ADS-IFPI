#include <stdio.h>
#include <string.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(5);
    char s[11];

    for (int i = 0; i < 3; i++) {
        printf("? ");
        gets(s);
        char* str = _strdup(s);
        empilhar(str, pilha);
    }

    while(!vaziaP(pilha)) {
        char* str = desempilhar(pilha);
        printf("%s\n", str);
        free(str);
    }
    
    return 0;
}