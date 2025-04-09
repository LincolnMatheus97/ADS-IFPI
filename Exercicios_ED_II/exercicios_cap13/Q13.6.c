#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main()
{
    Arv arv = criar_no_arv(
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
    
    int resultEb = eb(arv);

    if (resultEb) {
        printf("A árvore É estritamente binária.\n");
    } else {
        printf("A árvore NÃO é estritamente binária.\n");
    }

    return 0;
}
