#include <stdio.h>

void verificarAlternativa(int tons[]) {
    int marcada = -1;
    int marcadas = 0; 

    for (int i = 0; i < 5; i++) {
        if (tons[i] <= 127) { 
            marcada = i;
            marcadas++;
        }
    }

    if (marcadas == 1) { 
        printf("%c\n", 'A' + marcada);
    } else { 
        printf("*\n");
    }
}

int main() {
    int n, tons[5];

    while (1) {
        scanf("%d", &n);
        if (n == 0) break;
        
        while (n--) {
            for (int i = 0; i < 5; i++) {
                scanf("%d", &tons[i]);
            }
            verificarAlternativa(tons);
        }
    }

    return 0;
}