#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(7, no(9, no(2, NULL)));
    int ultimo_Item = ultimo_ItemLista(list);
    printf("%d\n", ultimo_Item);
    return 0;
}