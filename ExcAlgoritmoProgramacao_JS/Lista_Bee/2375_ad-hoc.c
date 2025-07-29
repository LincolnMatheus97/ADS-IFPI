#include <stdio.h>
#include <stdlib.h>

int main() {
    int diametro_bola;
    scanf("%d", &diametro_bola);

    int altura, largura, profundida;
    scanf("%d %d %d", &altura, &largura, &profundida);

    if (diametro_bola <= altura && diametro_bola <= profundida) {
        printf("S\n");
    } 
    else printf("N\n");

    return 0;
}