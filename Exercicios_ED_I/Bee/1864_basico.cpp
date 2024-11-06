#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    string mensagem = "LIFE IS NOT A PROBLEM TO BE SOLVED", nova_Mensagem = "";
    int i, n;
    cin >> n;

    for (i = 0; i < n; i++) {
        nova_Mensagem += mensagem[i];
    }
    cout << nova_Mensagem << endl;
}