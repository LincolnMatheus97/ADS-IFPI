#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(3, no(1, no(5, no(4, NULL))));
    int somatorio = soma_ItensLista(list);
    printf("%d\n", somatorio);
    return 0;
}