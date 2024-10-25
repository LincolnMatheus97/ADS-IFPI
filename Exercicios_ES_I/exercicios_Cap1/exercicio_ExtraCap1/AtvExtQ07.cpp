#include <stdio.h> 
#include <iostream> 
using namespace std; 
 
typedef struct no { 
    int item; 
    struct no *prox; 
}*Lst; 
 
 
Lst no(int x, Lst p){ 
    Lst n = (struct no*)malloc(sizeof(struct no)); 
    n->item = x; 
    n->prox = p; 
    return n; 
} 

main(){ 
    Lst p = (no (1, no(2, no(3, no(4,NULL))))); 
    while (p){ 
        cout<<p->item<<endl; 
        p=p->prox; 
    } 
} 