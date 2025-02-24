#include <stdio.h>
#include <stdlib.h>

int mdc(int a, int b) {
    if (b == 0) return a;
    return mdc(b, a % b);
}

void simplicar(int *num, int *den) {
    int divisor = mdc(abs(*num), abs(*den));
    *num /= divisor;
    *den /= divisor;
    if (*den < 0) {
        *den = -(*den);
        *num = -(*num);
    }
}

void processarOperacao(int n1, int d1, char op ,int n2, int d2) {
    int num, den;
    switch (op) {
        case '+':
            num = n1 * d2 + n2 * d1;
            den = d1 * d2;
            break;
        case '-':
            num = n1 * d2 - n2 * d1;
            den = d1 * d2;
            break;
        case '*':
            num = n1 * n2;
            den = d1 * d2;
            break;
        case '/':
            num = n1 * d2;
            den = d1 * n2;
            break;
    }
    printf("%d/%d = ", num, den);
    simplicar(&num, &den);
    printf("%d/%d\n", num, den);
}

int main() {
    int n, n1, d1, n2, d2;
    char op;
    scanf("%d", &n);
    while (n--) {
        scanf("%d / %d %c %d / %d", &n1, &d1, &op, &n2, &d2);
        processarOperacao(n1, d1, op, n2, d2);
    }
    return 0;
}