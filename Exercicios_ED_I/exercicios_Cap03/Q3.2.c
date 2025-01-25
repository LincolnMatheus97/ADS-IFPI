#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <string.h>
#include "novapilha.h"

int prioridade(char n) {
    switch(n) {
        case '(':
        case ')': return 0; break;
        case '+':
        case '-': return 1; break;
        case '*':
        case '/': return 2; break;
    }
    return -1;
}

char *posfixa(char *e) {
    static char s[256];
    int j = 0;
    PILHAO p = criarPilha(256);

    for (int i = 0; e[i]; i++) {
        if (e[i] == '(') {
            empilhar(e[i], p);
        } else if (isdigit(e[i]) || e[i] == '.') {
            s[j++] = e[i];
        } else if (strchr("+-*/", e[i])) {
            s[j++] = ' ';
            while(!vazioP(p) && prioridade(topoP(p)) >= prioridade(e[i])) {
                s[j++] = desempilhar(p);
            }
            empilhar(e[i], p);
        } else if (e[i] == ')') {
            while (topoP(p) != '(') {
                s[j++] = desempilhar(p);
            }
            desempilhar(p);
        }
    }
    while(!vazioP(p)) {
        s[j++] = desempilhar(p);
    }
    s[j] = '\0';
    destruirP(&p);
    return s;
}

float valor(char *e) {
    PILHAO p = criarPilha(256);
    for (int i = 0; e[i]; i++) {
        if (isdigit(e[i])) {
            empilhar(atof(e + i), p);
            while (isdigit(e[i + 1]) || e[i + 1] == '.') {
                i++;
            }
        } else if (strchr("+-*/", e[i])) {
            float y = desempilhar(p);
            float x = desempilhar(p);
            switch(e[i]) {
                case '+': empilhar(x + y, p); break;
                case '-': empilhar(x - y, p); break;
                case '*': empilhar(x * y, p); break;
                case '/': empilhar(x / y, p); break;
            }
        }
    }
    float z = desempilhar(p);
    destruirP(&p);
    return z;
}

int main() {
    char e[256];
    printf("Infixa: ");
    gets(e);
    char *s;
    s = posfixa(e);
    printf("Valor da Posfixa: %f\n", valor(s));
    return 0;
}