#include <stdio.h>
#include <stdlib.h>
#include "fila.h"

int main() {
    FILA f = criarFila(5);
    for (int i = 0; i <= 3; i++) {
        enfileirar('A' + 1, f);
    }

    while (!vaziaF(f)) {
        printf("%c\n", desenfileirar(f));
    }
    destruirF(&f);
    return 0;
}

//Imprimira 4 vezes o caracter 'B'.