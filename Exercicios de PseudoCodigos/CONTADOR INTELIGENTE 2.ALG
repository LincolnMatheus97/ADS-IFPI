Algoritmo "Contador Inteligente"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis
   Cont, N, Q: inteiro


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

   Escreva("Voc� quer contar come�ando por qual n�mero: ?")
   Leia(N)
   Escreva("Voc� quer contar at�: ?")
   Leia(Q)
   Cont <- N
   Se (N <= Q) Entao
   Enquanto (Cont <= Q) Faca

     Escreva(Cont)
     Cont <- Cont + 1

   Fimenquanto
   Senao
   Enquanto (Cont >= Q) Faca

     Escreva(Cont)
     Cont <- Cont - 1
     
   Fimenquanto
   Fimse


Fimalgoritmo