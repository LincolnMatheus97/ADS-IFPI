#include <stdio.h>
#include <iostream>
#include <string.h>
using namespace std;

main() {
    string geral, classe, habitos_Alimentares, exemplo;
    cin >> geral;
    cin >> classe;
    cin >> habitos_Alimentares;

    if (geral == "vertebrado") {
        if (classe == "ave") {
            if (habitos_Alimentares == "carnivoro") {
                exemplo = "aguia";
            } else {
                exemplo = "pomba";
            }
        } else {
            if (habitos_Alimentares == "onivoro") {
                exemplo = "homem";
            } else {
                exemplo = "vaca";
            }
        }
    } else {
        if (classe == "inseto") {
            if (habitos_Alimentares == "hematofago") {
                exemplo = "pulga";
            } else {
                exemplo = "lagarta";
            }
        } else {
            if (habitos_Alimentares == "hematofago") {
                exemplo = "sanguessuga";
            } else {
                exemplo = "minhoca";
            }
        }
    }
    cout << exemplo.c_str() << endl;
}