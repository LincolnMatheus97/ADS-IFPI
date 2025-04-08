#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main()
{
    Arv arv = criar_no_arv(criar_no_arv(criar_no_arv(NULL,
                                                     4,
                                                     NULL),
                                        2,
                                        criar_no_arv(NULL,
                                                     5,
                                                     NULL)),
                           1,
                           criar_no_arv(NULL,
                                        3,
                                        criar_no_arv(NULL,
                                                     6,
                                                     NULL)));

    int busca_arv_bin = tem(5, arv);

    if (busca_arv_bin) {
        printf("Numero 5 encontrado!\n");
    } else {
        printf("Numero 5 nao encontrado!\n");
    }

    busca_arv_bin = tem(10, arv);
    if (busca_arv_bin) {
        printf("Numero 10 encontrado!\n");
    } else {
        printf("Numero 10 nao encontrado!\n");
    }
}
