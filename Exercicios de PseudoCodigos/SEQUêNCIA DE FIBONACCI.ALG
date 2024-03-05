Algoritmo "Sequência de Fibonacci"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis 
   c, c1, c2, soma: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   c1 <- 0
   c2 <- 1
   soma <- 0
   Escreva(c1)
   Escreva(c2)
   Para c <- 0 Ate 12 faca
       soma <- c1+c2
       Escreva(soma)
       c1 <- c2
       c2 <- soma
   Fimpara


Fimalgoritmo