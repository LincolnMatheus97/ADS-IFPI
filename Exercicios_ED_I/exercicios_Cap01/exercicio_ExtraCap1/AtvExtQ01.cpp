#include <stdio.h>
#include <string.h>

int main () {
    char nome1[20];
    char nome2[20];

    scanf("%s\n", nome1);
    scanf("%s", nome2);

    int eh_Igual = 0;

    if (strcmp(nome1, nome2) == 0) {
        eh_Igual = 1;
    }

    if(eh_Igual) {
        printf("Sao Iguais");
    } else {
        printf("Sao Diferentes");
    }
    
    return 0;
}