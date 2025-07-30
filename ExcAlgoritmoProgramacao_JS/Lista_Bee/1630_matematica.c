#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int calcular_mdc(int x, int y) {
    int resto = 0;
    while (y != 0) {
        resto = x % y;
        x = y;
        y = resto;
    }
    return x;
}

int main() {
   char entrada[1000];
   
   while (fgets(entrada, sizeof(entrada), stdin) != 0) {
        char *parte = strtok(entrada, " \n");
        int largura = atoi(parte);

        parte = strtok(NULL, " \n");
        int comprimento = atoi(parte);

        int perimetro = 2 * (largura + comprimento);
        int distancia_max_estacas = calcular_mdc(largura, comprimento);
        int qts_min_estacas = perimetro / distancia_max_estacas;

        printf("%d\n", qts_min_estacas);
   }
   return 0;
}