#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include <iostream>
using namespace std;

// typedef struct {
// 	int mat;
// 	char nome[30];
// 	float nota;
// } TAluno;

//Estrutura "Classe" Pessoa, onde se configura uma lista encadeada
typedef struct pessoa {
	int id;    // valor id
	char nome[30];	// valor nome
	pessoa *proximo;	// ponteiro para o proximo
} TPessoa;

main(){	
	//Nó dinamico para alocação de memoria
	TPessoa *f1=(TPessoa*)malloc(sizeof(TPessoa));
	
	f1->id=1;
	strcpy(f1->nome,"maria");
	f1->proximo=NULL;
 
    cout<<f1->id<<endl;
	cout<<f1->nome<<endl;
		
	TPessoa *f2=(TPessoa*)malloc(sizeof(TPessoa));
	
	f2->id=2;
	strcpy(f2->nome,"joao");
	f2->proximo=NULL;
	
	cout<<f2->id<<endl;
	cout<<f2->nome<<endl;
	
	f1->proximo = f2;
	
	
	TPessoa *percorre =f1;
	
	//Percorrer a lista encadeada
	while (percorre){
		cout<<"ID:"<<percorre->id<<endl;
		cout<<"NOME:"<<percorre->nome<<endl;
		percorre=percorre->proximo;
		
	}
	
	
	
	
	
   /* TAluno aluno1;
	aluno1.mat = 1;
	strcpy(aluno1.nome,"maria");
	aluno1.nota =8.5;
	
	TAluno *a1;
	a1 = &aluno1;
	printf("mat: %d\n",a1->mat);
	printf("nome: %s\n",a1->nome);
	printf("nota:%.2f\n",a1->nota);
	
	int *p1=(int*)malloc(sizeof(int));
	*p1=20;
	printf("valor: %d\n",*p1);
	
	int n=3;
	int *w=(int*)malloc(n*sizeof(int));
    w[0]=10;
    printf("valor: %d\n",w[0]);
	
	
	
	
	int *p;
	int x=10;
	p = &x;
	x = x +2;
	printf("valor: %d\n",*p);
	printf("endereco: %d",p);	
	*p = 20;
	printf("valor: %d\n",x); 
	
	int v[3]={4,5,6};
	int *p1 = v;
	printf("valor: %d\n",*(v));
	printf("valor: %d\n",*(v+1));
	printf("valor: %d\n",*(v+2));*/
	
	
	
	
	
}
