#include <stdio.h>

typedef struct {char valor[10]; } Str;

int main() {
    Str x = {"um"};
    Str y = {"dois"};

    puts(x.valor);
    x = y;
    puts(x.valor);
    return 0;
}