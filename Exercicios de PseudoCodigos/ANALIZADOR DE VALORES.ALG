Algoritmo "Analizador de valores"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 09/10/2023
Var
// Se��o de Declara��es das vari�veis 
   v, n, somaN, null, numP: inteiro
   mediaN, divfive: real
   
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 

   somaN<-0
   mediaN<-0.0
   divfive<-0.0
   null<-0
   numP<-0
   
   Para v <- 1 Ate 5 faca
        Escreva("Digite um n�mero:")
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

        Escreva("A soma dos valores �:", somaN)

        Escreva("A m�dia entre os valores �:", mediaN)
        
        Escreva("S�o divis�veis por 5, um total de:" , divfive)
        
        Escreva("S�o nulos um total de:" , null)
        
        Escreva("S�o n�meros pares um total de:" , numP)



Fimalgoritmo