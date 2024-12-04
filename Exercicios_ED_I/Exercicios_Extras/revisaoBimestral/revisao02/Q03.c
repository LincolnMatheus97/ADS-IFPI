#include <stdio.h>
#define MAX 3

struct Livro {
    char titulo[30];
    int paginas;
};

struct Livro pilha[MAX];
int topo = -1;

void push(struct Livro l) {
    if (topo < MAX - 1) {
        pilha[++topo] = l;
    }  
}

struct Livro pop() {
    if(topo >= 0) {
        return pilha[topo--];
    }
    struct Livro vazio = {"", 0};
    return vazio;
}

int main() {
    push((struct Livro){"C programming", 250});
    push((struct Livro){"Data Structures", 300});

    struct Livro l = pop();
    printf("Livro: %s, Paginas: %d\n", l.titulo, l.paginas);

    return 0;
}