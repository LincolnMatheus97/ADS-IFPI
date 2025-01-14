#include <iostream> //inserindo biblioteca de E/S
#include <queue> // //inserindo biblioteca para manipulação de filas, usaremos: .empty, .front, .pop, .push, queue

using namespace std; //incluindo o uso direto de elementos do namespace std
queue<char> aux; //declarando uma fila de caracteres vazia chamada 'aux'

void empilhar( queue<char> *pilha, char item ) { // declarando funçao 'empilhar' que recebe parametros: 1-um ponteiro para uma fila de caracteres chamada pilha,2-um valor de caractere chamada item
    while (!(*pilha).empty()){ // executa enquanto a fila apontada por 'pilha' não estiver vazia
        aux.push((*pilha).front()); //copia o primeiro caractere do inicio de 'pilha' para 'aux'
        (*pilha).pop(); //remove o mesmo caractere da fila original
    }

    (*pilha).push(item); //insere o caractere 'item' no final da fila apontada por 'pilha'

    while ( !aux.empty() ){ //enquanto a fila 'aux' nao estiver vazia
        (*pilha).push(aux.front()); //copia o primeiro caractere da fila 'aux' para o final da fila apontada por 'pilha'
        aux.pop(); //remove o mesmo caractere da fila 'aux'
    }
}

char desempilhar( queue<char> *pilha ) { // declarando funçao 'desempilhar' que recebe um parametro: um ponteiro para uma fila de caracteres chamada 'pilha' e retorna um caractere
    char resultado = (*pilha).front(); //declara uma variavel chamada 'resultado' e atribui o primeiro caractere da fila apontada por 'pilha'
    (*pilha).pop(); // remove o mesmo caractere da fila original

    return resultado; //retorna caractere atribuido em 'resultado'
}

int main() { //declarando main
    queue<char> pilha; //declarando uma fila de caracteres vazia chamada 'pilha'

    empilhar(&pilha, 'm'); // status pilha --> m _ _
    empilhar(&pilha, 'a'); // status pilha --> a m _
    empilhar(&pilha, 'e'); // status pilha --> e a m

    while ( ! pilha.empty() ){ //enquanto a fila chamada 'pilha' nao estiver vazia
        printf("%c", desempilhar(&pilha) ); // remover o primeiro caractere de 'pilha' e imprimar
    }

    return 0;
}