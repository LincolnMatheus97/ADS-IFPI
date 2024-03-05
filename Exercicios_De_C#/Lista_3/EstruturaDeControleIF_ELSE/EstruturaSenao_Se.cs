namespace OlaMundo
{
    class Se_Entao
    {
        static void Main()
        {
            Console.WriteLine("Digite o primeiro número:");
            double n1 = double.Parse(Console.ReadLine());
            Console.WriteLine("Digite o segundo número:");
            double n2 = double.Parse(Console.ReadLine());
            Console.WriteLine("Digite o terceiro número:");
            double n3 = double.Parse(Console.ReadLine());

            //Estrutura If_Else
            if (n1 < n2) 
            {
                Console.WriteLine("O maior número é: {0}", n2);
            }
            else 
            {
                Console.WriteLine("O maior número é: {0}", n1); 
            }
            if (n3 < n2)
            {
                Console.Write("O maior número é: {0}", n2);
            }
            else
            {
                Console.WriteLine("O maior número é: {0}", n3);
            }
        }
    }
}