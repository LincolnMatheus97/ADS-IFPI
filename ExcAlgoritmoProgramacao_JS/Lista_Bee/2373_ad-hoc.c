#include <stdio.h>
#include <stdlib.h>

int main() {
    int qtd_casos;
    scanf("%d", &qtd_casos);

    int copos_quebrados = 0;

    while(qtd_casos > 0) {
        int latas, copos;
        scanf("%d %d", &latas, &copos);

        if (latas > copos) {
            copos_quebrados += copos;
        }

        qtd_casos--;
    }

    printf("%d\n", copos_quebrados);
    return 0;
}