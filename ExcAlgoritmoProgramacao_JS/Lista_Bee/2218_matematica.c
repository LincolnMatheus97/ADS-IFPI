#include <stdio.h>
#include <stdlib.h>

int main() {
    int casos_teste;
    scanf("%d", &casos_teste);

    while (casos_teste != 0) {
        int qtd_linhas;
        scanf("%d", &qtd_linhas);

        int regioes_formadas = ((qtd_linhas * (qtd_linhas + 1)) / 2) + 1;
        printf("%d\n", regioes_formadas);

        casos_teste--;
    }
    return 0;
}