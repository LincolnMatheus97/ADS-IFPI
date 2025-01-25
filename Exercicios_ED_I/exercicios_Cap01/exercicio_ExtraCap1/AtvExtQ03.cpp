#include <stdio.h>
#include <string.h>
#include <iostream>

using namespace std;

int main() {
    string nome1;
    string nome2;

    cin >> nome1;
    cin >> nome2;

    int eh_Igual = 0;
    int menor_String = min(nome1.length(), nome2.length());

    for (int i = 0; i < menor_String; i++) {
        if(nome1[i] == nome2[i]) {
            eh_Igual = 1;
        } else {
            eh_Igual = 0;
            break;
        }
    }

    if(eh_Igual) {
        printf("Sao Iguais");
    } else {
        printf("Sao Diferentes");
    }
    return 0;
}