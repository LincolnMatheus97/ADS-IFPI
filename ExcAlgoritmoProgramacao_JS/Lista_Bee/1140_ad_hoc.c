#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

int tautograma(const char *frase) {
    char letra = tolower(frase[0]); // Primeira letra da frase
    int i = 1;

    while (frase[i] != '\0') {
        if (frase[i] == ' ') { 
            // Avança para a próxima letra válida
            while (frase[i] == ' ') i++;
            if (frase[i] != '\0' && tolower(frase[i]) != letra) {
                return 0; // Encontrou uma palavra com inicial diferente
            }
        }
        i++;
    }
    return 1;
}

int main () {
    char frases[1000];

    while (1) {
        fgets(frases, sizeof(frases), stdin);
        frases[strcspn(frases, "\n")] = '\0';
        if (frases[0] == '*') break;
        if (tautograma(frases)) {
            printf("Y\n");
        }else {
            printf("N\n");
        }
    }
}