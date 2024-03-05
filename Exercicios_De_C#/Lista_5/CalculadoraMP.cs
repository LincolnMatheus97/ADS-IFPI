namespace Exercicio3
{
    class MPonderada
    {
        //Substitui as propriedas individais por listas para armazenar varios números e pesos.
        public List<double> n1 { get; set; }
        public List<double> p1 { get; set; }
        public double mediap { get; set; }
    }

    class CalculadoraMP
    {
        static void Main()
        {
            //Lista agora para armazenar objetos da classe MPonderada.
            List<MPonderada> medias = new List<MPonderada>();
            bool opcao = true;

            Console.WriteLine("Bem vindo a Calculadora de Média Ponderada !");

            while (opcao)
            {
                //Criada uma instancia de MPonderada para armazenar os números e pesos e a média ponderada de um conjunto.
                MPonderada conjunto = new MPonderada
                {
                    n1 = new List<double>(),
                    p1 = new List<double>()
                };

                for (int i = 0; i < 3; i++)
                {
                    double num, peso;

                    do
                    {
                        Console.WriteLine($"Digite o número {i + 1}:");
                    } while (!double.TryParse(Console.ReadLine(), out num));

                    do
                    {
                        Console.WriteLine($"Digite o peso {i + 1}:");
                    } while (!double.TryParse(Console.ReadLine(), out peso));
                    //Adiciona os numeros e pesos  ao conjunto atual.
                    conjunto.n1.Add(num);
                    conjunto.p1.Add(peso);
                }
                //Cálculo da média ponderada para o conjunto atual.
                double numpeso = conjunto.n1.Zip(conjunto.p1, (n, p) => n * p).Sum();
                double somanumpeso = conjunto.p1.Sum();
                conjunto.mediap = numpeso / somanumpeso;

                Console.WriteLine($"A média ponderada dos números e pesos digitados é: {conjunto.mediap}");

                int saida;
                do
                {
                    Console.WriteLine("Você deseja fazer novas médias ponderadas: 1 - Sim, 2 - Não ");
                } while (!int.TryParse(Console.ReadLine(), out saida) || (saida != 1 && saida != 2));

                if (saida != 1)
                {
                    Console.WriteLine("Parando a calculadora...");
                    opcao = false;
                }
                //Adiciona o conjunto atual á lista de conjuntos.
                medias.Add(conjunto);
            }

            Console.WriteLine("Os números, pesos e médias usados até o momento foram:");
            foreach (var conjunto in medias)
            {
                //Agora consigo mostrar a mádia ponderada aquele conjunto de números e pesos.
                Console.WriteLine($"Números usados ({string.Join(", ", conjunto.p1)}), " +
                                  $"Pesos usados ({string.Join(", ", conjunto.n1)}), " +
                                  $"Média Ponderada desse conjunto é ({conjunto.mediap})");
            }
        }
    }
}
