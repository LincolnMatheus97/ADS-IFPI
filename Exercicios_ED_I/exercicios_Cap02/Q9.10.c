#include <stdio.h>
#include <stdlib.h>
#include "lista.h"

int main() {
    Fila fila = NULL;

    enfileira(1, &fila);
    // enfileira(2, &fila);
    // enfileira(3, &fila);
    exibir_Fila(fila);
    desenfileira(&fila);
    printf("\n");
    exibir_Fila(fila);
}