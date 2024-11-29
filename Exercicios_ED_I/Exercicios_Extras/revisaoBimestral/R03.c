#include <stdio.h>
#include <stdlib.h>
#include "implementacao.h"

int main() {
    FILA fila = criarFila(10);
    char s[10];
    printf("Digite um palavra pequena: ");
    gets(s);

    for (int i = 0; s[i]; i++) {
        enfileirar(s[i], fila);
    }

    while(!vaziaF(fila)) {
        printf("%c ", desenfileirar(fila));
    }
    return 0;
}