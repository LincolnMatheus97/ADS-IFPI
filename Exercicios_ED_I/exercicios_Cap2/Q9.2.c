#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(1, no(2, no(1, no(4, no(1, NULL)))));
    int ocorreu = ocorrencias(1, list);
    printf("%d\n", ocorreu);
    return 0;
}