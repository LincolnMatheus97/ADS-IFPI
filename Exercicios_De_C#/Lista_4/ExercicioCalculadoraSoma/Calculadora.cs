namespace OlaMundo
{
    class Calculadora
    {
        static void Main()
        {
            bool opcao = true;

            Console.WriteLine("Olá, irei realizar soma de numeros até que você deseje que pare !");

            Console.WriteLine("Digite o primeiro número que você deseja somar: ");
            float.TryParse(Console.ReadLine(), out float inicial);

            while (opcao == true)
            {
                Console.WriteLine("Digite um número que deseja somar ao primeiro:");
                float.TryParse(Console.ReadLine(), out float n1);
                inicial = inicial + n1;
                Console.WriteLine("A soma até agora dos dois valores é de: {0}", inicial);
                Console.WriteLine("Deseja continuar somando: 1 - Sim, 2 - Não");
                int.TryParse(Console.ReadLine(), out int saida);

                switch (saida)
                {
                    case 1:
                        Console.WriteLine("Digite novo números para somar, ao resultado anterior");
                        break;
                    case 2:
                        Console.WriteLine("Parando a Calculadora");
                        opcao = false;
                        break;
                    default:
                        Console.WriteLine("Opção Inválida.Retornando para a Soma");
                        break;
                }
            }
            
        }
    }
}