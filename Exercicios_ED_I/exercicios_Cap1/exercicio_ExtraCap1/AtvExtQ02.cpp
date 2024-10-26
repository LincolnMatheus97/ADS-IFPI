#include <stdio.h>
#include <string.h>

int main() {
    char nome1[20];
    char nome2[20];

    scanf("%s\n", nome1);
    scanf("%s", nome2);

    int eh_Igual = 1;
    int tamanho_Nome1 = strlen(nome1);
    int tamanho_Nome2 = strlen(nome2);

    if (tamanho_Nome1 != tamanho_Nome2) {
        eh_Igual = 0;
    } else {
        for (int i = 0; i < tamanho_Nome1; i++) {
            if(nome1[i] != nome2[i]) {
                eh_Igual = 0;
                break;
            }
        }
    }

    if(eh_Igual) {
        printf("Sao Iguais");
    } else {
        printf("Sao Diferentes");
    }
    
    return 0;
}