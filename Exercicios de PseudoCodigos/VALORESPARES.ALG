Algoritmo "ValoresPares"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis 
   cont, n: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Escreva um valor para que mostre apenas os números pares até esse valor")
   Leia(n)
   Se (n%2=1) entao
       n <- n - 1
   Fimse
   Para cont <- n ate 0 passo -2 faca
     Escreva(cont)
   Fimpara

Fimalgoritmo