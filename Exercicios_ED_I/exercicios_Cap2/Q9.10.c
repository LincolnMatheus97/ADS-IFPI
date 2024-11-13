#include <stdio.h>
#include <stdlib.h>
#include "lista.h"

int main() {
    Fila fila = NULL;

    enfileira(1, &fila);
    enfileira(2, &fila);
    enfileira(3, &fila);
    exibir_Lista(fila);
    desenfileira(&fila);
    printf("\n");
    exibir_Lista(fila);
}