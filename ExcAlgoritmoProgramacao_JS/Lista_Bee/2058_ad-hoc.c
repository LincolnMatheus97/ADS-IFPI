#include <stdio.h>
#include <stdlib.h>

int main() {
    int lados_poligono;
    scanf("%d", &lados_poligono);

    int triangulos_formados = lados_poligono - 2;
    
    printf("%d\n", triangulos_formados);
    return 0;
}