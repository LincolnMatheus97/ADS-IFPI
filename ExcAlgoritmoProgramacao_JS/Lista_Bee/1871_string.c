#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char entrada[1000];
    fgets(entrada, sizeof(entrada), stdin);

    char *parte = strtok(entrada, " \n");
    int num1 = atoi(parte);

    parte = strtok(NULL, " \n");
    int num2 = atoi(parte);

    while (num1 != 0 && num2 != 0) {
        int soma = num1 + num2;
        int j = 0;

        char soma_str[20];
        sprintf(soma_str, "%d", soma);

        char nova_soma[20];

        for (size_t i = 0; i < strlen(soma_str); i++) {
            if (soma_str[i] != '0') {
                nova_soma[j] = soma_str[i];
                j++;
            }
        }

        nova_soma[j] = '\0';
        printf("%s\n", nova_soma);

        fgets(entrada, sizeof(entrada), stdin);

        parte = strtok(entrada, " \n");
        num1 = atoi(parte);

        parte = strtok(NULL, " \n");
        num2 = atoi(parte);
    }
    return 0;
}