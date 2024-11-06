#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
using namespace std;

main() {
    string tomadas;
    vector<int> tomada;

    getline(cin, tomadas);
    istringstream stream (tomadas);
    int numero_Tomadas;

    while (stream >> numero_Tomadas) {
        tomada.push_back(numero_Tomadas);
    }

    int numero_MaxAparelhos = 0;
    size_t i;

    for (i = 0; i < tomada.size(); i++) {
        if (i + 1 == tomada.size())  {
            numero_MaxAparelhos += tomada[i];
        } else {
            numero_MaxAparelhos += tomada[i] - 1;
        }
    }
    cout << numero_MaxAparelhos << endl;
}