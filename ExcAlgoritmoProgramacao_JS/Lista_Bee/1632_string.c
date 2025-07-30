#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int main() {
    int qtd_casos;
    scanf("%d", &qtd_casos);
    getchar();

    while (qtd_casos > 0) {
        char senha[20];
        fgets(senha, sizeof(senha), stdin);

        senha[strcspn(senha, "\n")] = '\0';

        int variacoes = 1;

        for (int j = 0; senha[j] != '\0'; j++) {
            char caracter = tolower(senha[j]);

            if (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter == 'o' || caracter == 's') {
                variacoes *= 3;
            } else {
                variacoes *= 2;
            }
        }
        printf("%d\n", variacoes);
        qtd_casos--;
    }
    return 0;
}