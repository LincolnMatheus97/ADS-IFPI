#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(1, no(12, no(2, no(4, no(5, NULL)))));
    int termo_Procurado = enesimo(3, list);
    printf("%d\n", termo_Procurado);
    return 0;
}