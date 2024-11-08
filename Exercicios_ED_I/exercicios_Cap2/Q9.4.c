#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(7, no(9, no(2, NULL)));
    inverter_Lista(list);
    return 0;
}