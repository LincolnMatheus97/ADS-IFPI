
#include <stdio.h> 
#include <stdlib.h> 
 
// Definindo a estrutura do nó 
typedef struct Node { 
    int data; 
    struct Node* next; 
} Node; 

// Função para adicionar um novo nó no final da lista 
void append(Node** head_ref, int new_data) { 
    Node* new_node = (Node*)malloc(sizeof(Node)); 
    Node* p = *head_ref; 
 
    new_node->data = new_data; 
    new_node->next = NULL; 
 
    if (*head_ref == NULL) { 
        *head_ref = new_node; 
        return; 
    } 
 
    while (p->next != NULL) { 
        p= p->next; 
    } 
 
    p->next = new_node; 
    return; 
} 

void prepend (Node ** head_ref, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node -> data = new_data;
    new_node -> next = *head_ref;

    *head_ref = new_node;
    return;  
}

// Função para imprimir a lista 
void printList(Node* node) { 
    while (node != NULL) { 
        printf(" %d ", node->data); 
        node = node->next; 
    } 
} 
 
int main() { 
    Node* head = NULL; 
    append(&head, 1); 
    append(&head, 2); 
    append(&head, 3); 
    append(&head, 4); 
    printf("Lista encadeada no final: "); 
    printList(head);
    prepend(&head, 0);
    prepend(&head, -1);
    printf("\nLista encadeada no inicio: ");
    printList(head); 
 
    return 0; 
} 