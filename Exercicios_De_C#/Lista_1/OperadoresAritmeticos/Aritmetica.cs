namespace OlaMundo
{
    class Aritmetica
    {
        static void Main()
        {
            Console.WriteLine("Digite o primeiro número: ");
            double num1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Digite o segundo número: ");
            double num2 = double.Parse(Console.ReadLine());

            double soma = 0;
            soma = num1 + num2;
            Console.WriteLine("A soma dos números é igual à {0}", soma);

            double subtracao = 0;
            subtracao = num1 - num2;
            Console.WriteLine("A subtração dos números é igual à {0}", subtracao);

            double multiplicacao = 0;
            multiplicacao = num1 * num2;
            Console.WriteLine("A multiplicação dos números é igual à {0}", multiplicacao);

            double divisao = 0;
            divisao = num1 / num2;
            Console.WriteLine("A divisão dos números é igual à {0}", divisao);

            double expoente_1 = 0;
            double expoente_2 = 0;
            
            expoente_1 = Math.Pow(num1, 2);
            expoente_2 = Math.Pow(num2, 3);
            Console.WriteLine("Os números elevados são {0} e {1}", expoente_1, expoente_2);

            double porcentagem_1 = 0;
            double porcentagem_2 = 0;

            porcentagem_1 = num1 % 2;
            porcentagem_2 = num2 % 2;
            Console.WriteLine("O resto da divisão dos números são {0} e {1}", porcentagem_1, porcentagem_2);


        }
    }
}