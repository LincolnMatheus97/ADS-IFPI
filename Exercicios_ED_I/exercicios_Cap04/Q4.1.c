#include <stdio.h>
#include <stdlib.h>
#include "fila.h"

int main() {
    FILA fila = criarFila(5);
    enfileirar(1, fila);
    enfileirar(2, fila);
    enfileirar(3, fila);
    enfileirar(desenfileirar(fila), fila);
    enfileirar(desenfileirar(fila), fila);
    printf("%d", desenfileirar(fila));
    return 0;
}

//Imprimirar 3.