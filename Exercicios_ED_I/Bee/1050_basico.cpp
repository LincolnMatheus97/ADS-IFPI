#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    int ddd;
    cin >> ddd;
    string cidade;

    if (ddd == 61) {
        cidade = "Brasilia";
    } else if (ddd == 71) {
        cidade = "Salvador";
    } else if (ddd == 11) {
        cidade = "Sao Paulo";
    } else if (ddd == 21) {
        cidade = "Rio de Janeiro";
    } else if (ddd == 32) {
        cidade = "Juiz de Fora";
    } else if (ddd == 19) {
        cidade = "Campinas";
    } else if (ddd == 27) {
        cidade = "Vitoria";
    } else if (ddd == 31) {
        cidade = "Belo Horizonte";
    } else {
        cidade = "DDD nao cadastrado";
    }
    cout << cidade.c_str() << endl;
}