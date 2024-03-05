Algoritmo "Contador Inteligente"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis
   Cont, N, Q: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   Escreva("Você quer contar começando por qual número: ?")
   Leia(N)
   Escreva("Você quer contar até: ?")
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