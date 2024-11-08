#include <stdio.h>
#include "lista.h"

int main() {
    Lista a = no(1, no(2, no(3, NULL)));
    Lista b = no(1, no(2, no(3, NULL)));
    Lista c = no(1, no(2, no(3, no(4, NULL))));

    int aIgualb = listas_Iguais(a, b);
    int aIgualc = listas_Iguais(a, c);
    printf("%d %d\n", aIgualb, aIgualc);
    return 0;
}