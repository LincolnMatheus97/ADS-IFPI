Algoritmo "Analizador de valores"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Seção de Declarações das variáveis 
   v, n, somaN, null, numP: inteiro
   mediaN, divfive: real
   
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

   somaN<-0
   mediaN<-0.0
   divfive<-0.0
   null<-0
   numP<-0
   
   Para v <- 1 Ate 5 faca
        Escreva("Digite um número:")
        Leia(n)
        somaN <- somaN + n
        mediaN <- somaN/5
        Se (n%5=0) Entao
            divfive <- divfive + 1
        Fimse
        Se (n=0) Entao
            null <- null + 1
        Fimse
        Se (n%2=0) Entao
            numP <- numP + 1
        Fimse

        
   
   Fimpara

        Escreva("A soma dos valores é:", somaN)

        Escreva("A média entre os valores é:", mediaN)
        
        Escreva("São divisíveis por 5, um total de:" , divfive)
        
        Escreva("São nulos um total de:" , null)
        
        Escreva("São números pares um total de:" , numP)



Fimalgoritmo