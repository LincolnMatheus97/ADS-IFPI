#include <stdio.h>
#include <stdlib.h>
#include "sequencial_Estat.h"

int main() {
    struct aluno a[4] = {{2, "Lincoln", 9.0, 8.5, 9.2},
                        {3, "Thalisson", 10, 9.5, 9.1},
                        {4, "Natiele", 8.9, 9.2, 10},
                        {5, "Lucas", 10, 10, 10}
    };
    Lista* li = criar_Lista();
    int i;
    for (i = 0; i < 4; i++) {
        inserir_Forma_Ordenada(li, a[i]);
    }
    imprimir_Lista(li);
    printf("\n\n\n\n");

    liberar_Lista(li);

    return 0;
}