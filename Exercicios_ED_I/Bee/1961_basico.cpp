#include <stdio.h>
#include <iostream>
#include <vector>
#include <sstream>
#include <math.h>
using namespace std;

main() {
    int alturaPulo, numCanos, condicao = 1;
    vector<int> alturasCanos;
    cin >> alturaPulo >> numCanos;
    cin.ignore();
    
    string alturaCanos;
    getline(cin, alturaCanos);
    istringstream stream (alturaCanos);
    int numeroAlturaCano;

    while (stream >> numeroAlturaCano) {
        alturasCanos.push_back(numeroAlturaCano);
    }

    size_t i;

    for (i = 0; i < alturasCanos.size() - 1; i++) {
        if (abs(alturasCanos[i] - alturasCanos[i + 1]) > alturaPulo) {
            condicao = 0;
            break;
        }
    }
    
    if (condicao) {
        cout << "YOU WIN" << endl;
    } else {
        cout << "GAME OVER" << endl;
    }
}