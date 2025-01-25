#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include "novapilha.h"

int prioridade(char n) {
    switch (n) {
        case '(': 
        case ')': return 0; break;
        case '+':
        case '-': return 1; break;
        case '*':
        case '/': return 2; break;
    }
    return -1;
}

char *posfixa (char *e) {
    static char s[256];
    int j = 0;
    PILHAO P = criarPilha(256);

    for (int i = 0; e[i]; i++) {
        if (e[i] == '(') {
            empilhar(e[i], P);
        } else if (isalpha(e[i])) {
            s[j++] = e[i];
        } else if (strchr("+-/*", e[i])) {
            while (!vazioP(P) && prioridade(topoP(P)) >= prioridade(e[i])) {
                s[j++] = desempilhar(P);
            }
            empilhar(e[i], P);
        } else if (e[i] == ')') {
            while (topoP(P) != '(') {
                s[j++] = desempilhar(P);
            }
            desempilhar(P);
        }
    }
    while (!vazioP(P)) {
        s[j++] = desempilhar(P);
    }
    s[j] = '\0';
    destruirP(&P);
    return s;
}

int main() {
    char e[256];
    printf("Infixa: ");
    gets(e);
    printf("Posfixa: %s\n\n", posfixa(e));
    return 0;
}