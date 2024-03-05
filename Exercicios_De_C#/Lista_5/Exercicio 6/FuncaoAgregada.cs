namespace Exer6
{
    class Lista
    {
        public int num { get; set; }
    }
    class FuncaoAgregada
    {
        static void Main()
        {
            List<Lista> numeros = new List<Lista>();
            int n;
            int saida;
            bool opcao = true;
            Console.WriteLine("Bem vindo a Calculadora Inteligente, Digite uma Lista de Números e Direi Qual é o Maior,Menor," +
                              "Quantos Números Possui a Lista, o Somatorio dos Números dessa Lista e A Média Desses Números!");
            for (int i = 0; i < 5; i++)
            {
                do
                {
                    Console.WriteLine($"Digite o {i + 1} número:");
                    if (!int.TryParse(Console.ReadLine(), out n))
                    {
                        Console.WriteLine("Digite um número inteiro, Tente novamente...");
                    }
                    else
                    {
                        numeros.Add(new Lista { num = n });
                        break;
                    }
                } while (true);
            }
            do
            {
                Console.WriteLine("Você deseja adicionar mais um número: 1-Sim/2-Não");
                int.TryParse(Console.ReadLine(), out saida);
                if (saida != 1 && saida != 2)
                {
                    Console.WriteLine("Número Digitado Incorreto, Tente novamente...");
                }
            } while (saida != 1 && saida != 2);
            if (saida == 1)
            {
                while(opcao)
                {
                    do
                    {
                        Console.WriteLine("Digite um novo número");
                        if (!int.TryParse(Console.ReadLine(),out n))
                        {
                            Console.WriteLine("Digite um número inteiro, Tente novamente...");
                        }
                        else
                        {
                            numeros.Add(new Lista { num = n});
                            break;
                        }
                    }while (true);
                    do
                    {
                        Console.WriteLine("Você deseja adicionar mais um número: 1-Sim/2-Não");
                        int.TryParse(Console.ReadLine(), out saida);
                        if (saida != 1 && saida != 2)
                        {
                            Console.WriteLine("Número Digitado Incorreto, Tente novamente...");
                        }
                    } while (saida != 1 && saida != 2);
                    if (saida == 2)
                    {
                        Console.WriteLine("Parando...");
                        opcao = false;
                    }
                }
            }
            //Usei as funçoes agregadas para mostra o maior, menor, quantidade, o somatorio e a media dessa minha lista.
            int maiNumero = numeros.Max(item => item.num);
            int menNumero = numeros.Min(item => item.num);
            int quantNumero = numeros.Count();
            int somaNumero = numeros.Sum(item => item.num);
            double mediaNumero = numeros.Average(item => item.num);
            Console.WriteLine($"O número {maiNumero} é maior número da sua lista " +
                              $" e o {menNumero} é o menor número da sua lista!");
            Console.WriteLine($"Sua lista contém um total de {quantNumero} de números" +
                              $" e a soma dos números da lista é de {somaNumero}" +
                              $" e a média dos números é {mediaNumero}");

            Console.WriteLine("A lista dos números é essa:");
            //Usei a função Join para concatenar os números separando por espaços.
            Console.WriteLine(string.Join(" ", numeros.Select(item => item.num)));
        }
    }
}