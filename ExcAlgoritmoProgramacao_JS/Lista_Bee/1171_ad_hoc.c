#include <stdio.h>

#define MAX_X 2000

int main() {
    int N, X;
    int frequencia[MAX_X + 1] = {0}; 

    scanf("%d", &N);

    for (int i = 0; i < N; i++) {
        scanf("%d", &X);
        frequencia[X]++;
    }

    for (int i = 1; i <= MAX_X; i++) {
        if (frequencia[i] > 0) {
            printf("%d aparece %d vez(es)\n", i, frequencia[i]);
        }
    }

    return 0;
}
