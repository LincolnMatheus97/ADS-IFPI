/*10 - Faça um programa que leia um numero inteiro positivo de três digitos (de 100 a 999). Gere outro numero formado pelos
dígitos invertidos de numero lido. Exemplo: número lido: 123 e o resultado invertido deve ser 321.*/

#include <stdio.h>

int invertido(int num) {
    int invertido = 0, resto;

    while(num != 0) {
        resto = num % 10;
        invertido = invertido * 10 + resto;
        num /= 10;
    }

    return invertido;
}

int main() {
    int numero;
    printf("Digite um numero de três dígitos: ");
    scanf("%d", &numero);

    if (numero >= 100 && numero <= 999) {
        int numeroInvertido = invertido(numero);
        printf("O número invertido é: %d\n", numeroInvertido);
    } else {
        printf("Número inválido. Digite um número entre 100 e 999.\n");
    }

    return 0;
}