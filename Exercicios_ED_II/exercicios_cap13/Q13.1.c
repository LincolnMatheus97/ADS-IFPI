/*
Crie e exiba a arvore da Figura 13.5;
*/
#include <stdio.h>
#include <stdlib.h>
#include "arvore.h"

int main() {
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

    // ins_arv_busca_binaria(1, &arv);
    // ins_arv_busca_binaria(2, &arv);
    // ins_arv_busca_binaria(3, &arv);
    // ins_arv_busca_binaria(4, &arv);
    // ins_arv_busca_binaria(5, &arv);
    // ins_arv_busca_binaria(6, &arv);

    em_ordem(arv);
    printf("\n");
    pre_ordem(arv);
    printf("\n");
    pos_ordem(arv);
}
