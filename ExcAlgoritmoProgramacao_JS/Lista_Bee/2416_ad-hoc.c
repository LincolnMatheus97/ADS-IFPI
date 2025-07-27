#include <stdio.h>
#include <stdlib.h>

int main() {
    int metros_pretendido, comprimento_pista;
    scanf("%d %d", &metros_pretendido, &comprimento_pista);

    int ponto_termino = metros_pretendido % comprimento_pista;
    printf("%d\n", ponto_termino);
    return 0;
}