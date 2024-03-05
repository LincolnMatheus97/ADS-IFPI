namespace OlaMundo
{
    class Relacionamento
    {
        static void Main()
        {
            Console.WriteLine("Digite sua nota:");
            double.TryParse(Console.ReadLine(), out double nota);

            Console.WriteLine("Você está Aprovado {0}", nota > 7,0);
            Console.WriteLine("Você está de Recuperação {0}", nota <= 6,0);
            Console.WriteLine("Você está Reprovado {0}", nota <= 4,0);




        }
    }
}