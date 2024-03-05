namespace OlaMundo
{
    class Leitura_de_Dados
    {
        static void Main()
        {
            Console.WriteLine("Qual é o seu nome? ");
            String nome = Console.ReadLine();
            Console.WriteLine("Qual é sua idade? ");
            int idade = int.Parse(Console.ReadLine());
            Console.WriteLine("Qual é o nome da sua mãe? ");
            String nome_mae = Console.ReadLine();
            Console.WriteLine("Qual a idade dela ? ");
            int idade_mae = int.Parse(Console.ReadLine());

            Console.WriteLine("Seu nome é {0} e sua idade é de {1}", nome, idade);
            Console.WriteLine("O nome da sua mãe é {0} e a idade dela é de {1}", nome_mae, idade_mae);
        }
    }
}