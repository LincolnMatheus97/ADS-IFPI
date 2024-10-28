#include <stdio.h>
#include <iostream>
using namespace std;

main() {
    int senha;
    cin >> senha;
    while (senha != 2002) {
        cout << "Senha Invalida" << endl;
        cin >> senha;
    }
    cout << "Acesso Permitido" << endl;
}