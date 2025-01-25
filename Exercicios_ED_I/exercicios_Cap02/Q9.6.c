#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(1, no(2, no(1, no(4, NULL))));
    exibir_Lista(list);
    substituir_Itens(1, 2, list);
    printf("\n");
    exibir_Lista(list);
    return 0;
}