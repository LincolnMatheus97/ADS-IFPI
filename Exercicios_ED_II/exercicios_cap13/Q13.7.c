#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main() {
    Arv arv1 = criar_no_arv(
        criar_no_arv(
            criar_no_arv(NULL, 1, NULL),
            2,
            criar_no_arv(NULL, 3, NULL)
        ),
        4,
        criar_no_arv(
            criar_no_arv(NULL, 5, NULL),
            6,
            criar_no_arv(NULL, 7, NULL)
        )
    );

    Arv arv2 = criar_no_arv(
        criar_no_arv(
            criar_no_arv(NULL, 1, NULL),
            2,
            criar_no_arv(NULL, 3, NULL)
        ),
        4,
        criar_no_arv(
            criar_no_arv(NULL, 5, NULL),
            6,
            criar_no_arv(NULL, 7, NULL)
        )
    );

    int iguais_result = iguais(arv1, arv2);

    if (iguais_result) {
        printf("As árvores são IGUAIS.\n");
    } else {
        printf("As árvores são DIFERENTES.\n");
    }

    return 0;
}
