Algoritmo "Imposto de renda baseado no Salario"
// 
//  
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 06/10/2023
Var
// Seção de Declarações das variáveis 
   Salario_Mensal: Real
   

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreva("Digite seu salario Mensal:")
   Leia(Salario_Mensal)
   Se Salario_Mensal< 0 Entao
   Escreva("Valor Inválido")
   Senao
    Se (Salario_Mensal <= 1860.22) Entao
    Escreva("Você está insento de pagar o imposto de renda")
    Senao
     Se (Salario_Mensal > 1860.22) e (Salario_Mensal <= 2799.86) Entao
     Escreva("Você deverá pagar 7,5% para o importo de renda")
     Senao
      Se (Salario_Mensal > 2799.86) e (Salario_Mensal <= 3733.19) Entao
      Escreva("Você deverá pagar 15% para o imposto de renda")
      Senao
       Se (Salario_Mensal > 3733.19) e (Salario_Mensal <= 4664.68) Entao
       Escreva("Você deverá pagar 22,5% para o imposto de renda")
       Senao
        Se Salario_Mensal >= 4664.68 Entao
        Escreva("Você deverá pagar 27,5% para o imposto de renda")
        Fimse
       Fimse
      Fimse
     Fimse
    Fimse
   Fimse

Fimalgoritmo