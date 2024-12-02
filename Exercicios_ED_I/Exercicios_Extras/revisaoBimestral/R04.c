#include <stdio.h>
#include <stdlib.h>
#include "implementacao.h"

int main() {
    LISTAO i1 = {1, "Lincoln"};
    LISTAO i2 = {2, "Thalisson"};
    LISTAO i3 = {3, "Natiele"};

    inserirListao(i1);
    inserirListao(i2);
    inserirListao(i3);

    mostrarListao();
    return 0;
}