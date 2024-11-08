#include <stdio.h>
#include "lista.h"

int main() {
    Lista list = no(3, no(1, no(5, NULL)));
    inverter_Lista(list);
    return 0;
}