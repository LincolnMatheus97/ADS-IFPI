Algoritmo "taxademetabolismo"

Var
    sexo: caractere
    peso, altura, idade: inteiro
    fazExercicio: caractere
    tmb, fatorAtividade: real
    nomefatorAtividade: caractere
    diasPraticados: inteiro
    percapeso: caractere
    kcal: real
    kilosperca, perca, dias_de_dieta, simula: inteiro


Inicio

     escreva("Bem-vindo � Calculadora de Taxa Metab�lica Basal")

    // Usei um loop para garantir que a entrada seja apenas "homem" ou "mulher".
    repita
        escreva("Voc� � Homem ou Mulher ?")
        leia(sexo)
        sexo <- minusc(sexo) // Converta para letras min�sculas
        se (sexo =/= "homem") E (sexo =/= "mulher") entao
            escreva("Voc� digitou incorretamente, Tente Novamente.")
        fimse
    ate (sexo =/= "homem") E (sexo =/= "mulher")

    // Usei o mesmo loop para peso, altura e idade.
    repita
        escreva("Digite seu Peso(Kg):")
        leia(peso)
    ate (nao eInteiro(peso)) //eInteiro usado para verificar se uma variavel contem valor inteiro.

    repita
        escreva("Digite sua Altura(cm):")
        leia(altura)
    ate (nao eReal(altura))

    repita
        escreva("Digite sua Idade:")
        leia(idade)
    ate (nao eInteiro(idade))

    // Usei o mesmo loop para "S" e "N".
    repita
        escreva("Voc� pratica Exerc�cios? ((S) para Sim ou (N) para N�o)")
        leia(fazExercicio)
        fazExercicio <- minusc(fazExercicio) // Converta para letras min�sculas
        se (fazExercicio =/= "s") E (fazExercicio =/= "n") entao
            escreva("Voc� digitou incorretamente, Tente Novamente.")
        fimse
    ate (fazExercicio =/= "s") E (fazExercicio =/= "n")

    // C�lculo do TMB para homem e mulher, identificado pelo sexo.
    tmb <- 0.0
    se (sexo = "homem") entao
        tmb <- (66 + ((13.7 * peso) + (3.5 * altura) - (6.8 * idade))
    senao
        se (sexo = "mulher") entao
            tmb <- (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade))
        fimse

    fatorAtividade <- 1.0
    nomefatorAtividade <- ""

    se (fazExercicio = "s" E sexo = "homem") entao
        // Aqui tamb�m usamos um loop para controlar a entrada dos dados.
        repita
            escreva("Quantos dias na semana voc� pratica exerc�cio?")
            leia(diasPraticados)
        ate (nao eInteiro(diasPraticados) ou (diasPraticados < 0 ou diasPraticados > 7))

        se (diasPraticados >= 1 E diasPraticados <= 2) entao
            fatorAtividade <- 1.6
            nomefatorAtividade <- "Levemente Ativo"
        senao
            se (diasPraticados >= 3 E diasPraticados <= 4) entao
                fatorAtividade <- 1.9
                nomefatorAtividade <- "Ativo"
            senao
                se (diasPraticados >= 5 E diasPraticados <= 7) entao
                    fatorAtividade <- 2.2
                    nomefatorAtividade <- "Extremamente Ativo"
                fimse
            fimse
        fimse
    senao
        se (fazExercicio = "s" E sexo = "mulher") entao
            repita
                escreva("Quantos dias na semana voc� pratica exerc�cio?")
                leia(diasPraticados)
            ate (nao eInteiro(diasPraticados) ou (diasPraticados < 0 ou diasPraticados > 7))

            se (diasPraticados >= 1 E diasPraticados <= 2) entao
                fatorAtividade <- 1.4
                nomefatorAtividade <- "Levemente Ativo"
            senao
                se (diasPraticados >= 3 E diasPraticados <= 4) entao
                    fatorAtividade <- 1.7
                    nomefatorAtividade <- "Ativo"
                senao
                    se (diasPraticados >= 5 E diasPraticados <= 7) entao
                        fatorAtividade <- 1.9
                        nomefatorAtividade <- "Extremamente Ativo"
                    fimse
                fimse
            fimse
        senao
            se (fazExercicio = "n" E sexo = "homem") entao
                fatorAtividade <- 1.4
                nomefatorAtividade <- "Sedent�rio"
            senao
                se (fazExercicio = "n" E sexo = "mulher") entao
                    fatorAtividade <- 1.2
                    nomefatorAtividade <- "Sedent�rio"
                fimse
            fimse
        fimse
    fimse

    tmb <- tmb * fatorAtividade
    tmbarredondado <- arredonde(tmb)

    escreva("Sua Taxa Metab�lica Basal �: ", nomefatorAtividade)
    escreva("Sua Taxa Metab�lica Basal (TMB) �: ", tmbarredondado, " calorias por dia")

    // Usei o mesmo loop para "S" e "N".
    repita
        escreva("Voc� deseja perder Peso? ((S) para Sim ou (N) para N�o)")
        leia(percapeso)
        percapeso <- minusc(percapeso) // Converta para letras min�sculas
        se (percapeso =/= "s") E (percapeso =/= "n") entao
            escreva("Voc� digitou incorretamente, Tente Novamente.")
        fimse
    ate (percapeso =/= "s") E (percapeso =/= "n")

    se (percapeso = "s") entao
        escreva("Quantas kCal voc� deseja consumir no dia?")
        leia(kcal)
        escreva("Quantos Kilos voc� deseja perder?")
        leia(kilosperca)

        perca <- kilosperca * 7700
        dias_de_dieta <- perca / (tmbarredondado - kcal)
        simula <- arredonde(dias_de_dieta)

        escreva("Levando em considera��o que voc� vai consumir ", kcal, "KCAL ")
        escreva("e sabendo que sua Taxa Metab�lica � ", tmbarredondado, "TMB.")
        escreva(" Se voc� mantiver o foco, consegue perder ", kilosperca, "KG em ", simula, "Dias.")
    senao
        escreva("Tudo Bem, Aperte F5 para come�ar novamente!")
    fimse

fimalgoritmo