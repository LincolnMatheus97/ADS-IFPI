Algoritmo "ValoresPares"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis 
   cont, n: inteiro


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Escreva um valor para que mostre apenas os n�meros pares at� esse valor")
   Leia(n)
   Se (n%2=1) entao
       n <- n - 1
   Fimse
   Para cont <- n ate 0 passo -2 faca
     Escreva(cont)
   Fimpara

Fimalgoritmo