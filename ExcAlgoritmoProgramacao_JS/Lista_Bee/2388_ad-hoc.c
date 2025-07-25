#include <stdio.h>
#include <stdlib.h>

int main() {
    int registros, distancia_percorrida = 0;
    scanf("%d", &registros);

    while (registros != 0) {
        int horas_registradas = 0, velocidade_media = 0;
        scanf("%d %d", &horas_registradas, &velocidade_media);

        distancia_percorrida += horas_registradas * velocidade_media;
        registros--;
    }

    printf("%d\n", distancia_percorrida);
    return 0;
}