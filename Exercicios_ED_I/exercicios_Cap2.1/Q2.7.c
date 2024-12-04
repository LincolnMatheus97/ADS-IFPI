#include <stdio.h>
#include <string.h>
#include "pilha.h"

int main() {
    PILHA pilha = criar_Pilha(5);

    for (int i = 0; i < 3; i++) {
        char s[3] = "um";
        char *str = _strdup(s);
        empilhar(str, pilha);
    }

    while(!vaziaP(pilha)) {
        char* str = desempilhar(pilha);
        printf("%s\n", str);
        free(str);
    }
    
    return 0;
}