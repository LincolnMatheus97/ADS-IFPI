1.  
    Diferenças entre os tipos:

                        Estatica:                                                       |       Dinamica:
    - Verificaçao de Tipo -> Em tempo de compilação;                |       - Verificaçao de Tipo -> Em tempo de execução;
    - Flexibidadede -> Menos flexivel, mas mais segura;             |       - Flexibidadede -> Mais flexivel, mas pode ter mais erros;
    - Performace -> Em geral, mais rapida em execução;              |       - Performace -> Pode ser mais lento devido a verificação;
    - Erros de Tipo -> Detectados antes da execução;                |       - Erros de Tipo -> Detectados apenas durante a execução;

2. 
Erros de runtime.

3.
Esse programinha simples aqui em JavaScript:

    function mutiplicar(a, b) {
        return a * b;
    }

    console.log(multiplicar(5, 10));                                //Saída: 50
    console.log(multiplicar("5", 10));                              //Saída: 50 (Em js converte "5" para número automaticamente)
    console.log(multiplicar("hello", 10));                          //Saída: NaN (Not a Number)

4.
Mesmo a tipagem de C sendo estatica, e o tipo de verificação seja em tempo de compilação. A linguagem
permite operações que convertem tipos com muita liberdade, sem exigir uma validação rigorosa. E isso leva
a comportamentos inesperados e erros dificeis de detectar. Logo ela considerada fraca pois é possivel 
contornar as restrições de tipo de uma forma facil.

5.
Sim. Como em JavaScript, o jeito que contornamos as retrições de tipo é de uma forma facil.