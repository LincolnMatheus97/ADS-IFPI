#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int funcao_rafael(int x, int y) {
    int resultado = pow(3 * x, 2) + pow(y, 2);
    return resultado; 
}

int funcao_beto(int x, int y) {
    int resultado = (2 * pow(x, 2)) + pow(5 * y, 2);
    return resultado;
}

int funcao_carlos(int x, int y) {
    int resultado = (-100 * x) + pow(y, 3);
    return resultado;
}

int main() {
    int entradas;
    scanf("%d", &entradas);

    while (entradas != 0) {
        int x, y;
        scanf("%d %d", &x, &y);

        int res_rafael = funcao_rafael(x, y);
        int res_beto = funcao_beto(x, y);
        int res_carlos = funcao_carlos(x, y);

        if (res_rafael > res_beto && res_rafael > res_carlos) {
            printf("Rafael ganhou\n");
        } else if (res_beto > res_rafael && res_beto > res_carlos) {
            printf("Beto ganhou\n");
        } else {
            printf("Carlos ganhou\n");
        }

        entradas--;
    }
    
    return 0;
}