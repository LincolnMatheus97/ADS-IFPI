#include <stdio.h> 
#include <string.h> 
#include <iostream> 
using namespace std; 
 
typedef struct { 
    char valor[10]; 
} Str; 
 
 
main(){ 
    char valor[3] = {"um"}; 
    Str v = {"123"}; 
    
    int i = 0;
    int tamanho_V = strlen(v.valor);
    
    while (i < tamanho_V){ 
        i++; 
    } 
    
    cout << "---------\n"; 
    
    int j = 0; 
    while (valor[j] != '\0'){    
        j++; 
    }

    cout << "Quantidade i = " << i << "\n";
    cout << "Quantidade j = " << j << endl;
}