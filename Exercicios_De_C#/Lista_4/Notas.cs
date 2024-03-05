namespace OlaMundo
{
    class Notas
    {
        static void Main()
        {
            Console.WriteLine("Olá, Bem vindo ao sistema de Média de Notas !");

            Console.WriteLine("Digite sua primeira nota: ");
            double.TryParse(Console.ReadLine(), out double nota1);
            Console.WriteLine("Digite sua segunda nota: ");
            double.TryParse(Console.ReadLine(), out double nota2);
            Console.WriteLine("Digite sua segunda nota: ");
            double.TryParse(Console.ReadLine(), out double nota3);

             var media_aluno = (nota1 + nota2 + nota3) / 3.0;

            if (media_aluno > 7.0)
            {
                Console.WriteLine("Aluno está aprovado, com média: {0}", media_aluno);
            }
            else
            {
                Console.WriteLine("Aluno está de recuperação, pois não atingiu a média base 7.0");
            }
        }
    }
}