Algoritmo "Imposto de renda baseado no Salario"
// 
//  
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/10/2023
Var
// Se��o de Declara��es das vari�veis 
   Salario_Mensal: Real
   

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
   Escreva("Digite seu salario Mensal:")
   Leia(Salario_Mensal)
   Se Salario_Mensal< 0 Entao
   Escreva("Valor Inv�lido")
   Senao
    Se (Salario_Mensal <= 1860.22) Entao
    Escreva("Voc� est� insento de pagar o imposto de renda")
    Senao
     Se (Salario_Mensal > 1860.22) e (Salario_Mensal <= 2799.86) Entao
     Escreva("Voc� dever� pagar 7,5% para o importo de renda")
     Senao
      Se (Salario_Mensal > 2799.86) e (Salario_Mensal <= 3733.19) Entao
      Escreva("Voc� dever� pagar 15% para o imposto de renda")
      Senao
       Se (Salario_Mensal > 3733.19) e (Salario_Mensal <= 4664.68) Entao
       Escreva("Voc� dever� pagar 22,5% para o imposto de renda")
       Senao
        Se Salario_Mensal >= 4664.68 Entao
        Escreva("Voc� dever� pagar 27,5% para o imposto de renda")
        Fimse
       Fimse
      Fimse
     Fimse
    Fimse
   Fimse

Fimalgoritmo