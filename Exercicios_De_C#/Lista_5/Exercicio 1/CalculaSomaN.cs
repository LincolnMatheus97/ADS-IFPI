namespace CalcuSoma
{
    class Soma
    {
        public int num1 { get; set; }
        public int num2 { get; set; }
        public int resulsoma { get; set; }
        class CalculaSomaN
        {
            static void Main()
            {
                bool opcao = true;
                int primeiro;
                //Lista para armazenar as somas.
                List<Soma> somas = new List<Soma>();

                Console.WriteLine("Bem vindo a Calculadora De Soma !");

                while (opcao == true)
                {
                    do
                    {
                        Console.WriteLine("Digite o primeiro número que deseja somar:");

                    } while (!int.TryParse(Console.ReadLine(), out primeiro));

                    int n2;
                    do
                    {
                        Console.WriteLine("Digite outro número que queria somar ao primeiro:");

                    } while (!int.TryParse(Console.ReadLine(), out n2));

                    int somaresul = primeiro + n2;
                    //Aqui eu crio um objeto Soma e add à lista.
                    somas.Add(new Soma { num1 = primeiro, num2 = n2, resulsoma = somaresul });

                    Console.WriteLine($"A Soma dos dois números é de: {somaresul}");
                    int saida;
                    //Aqui usei do|while para vericar que só vai passar se os numeros postos forem 1 e 2.
                    do
                    {
                        Console.WriteLine("Deseja continuar somando ? 1 - Sim, 2 - Não");
                        saida = int.Parse(Console.ReadLine());
                        if (saida != 1 && saida != 2)
                        {
                            Console.WriteLine("Opção Inválida:");
                        }
                    } while (saida != 1 && saida != 2);

                    switch (saida)
                    {
                        case 1:
                            Console.WriteLine("Continuando à somar...");
                            break;
                        case 2:
                            Console.WriteLine("Parando a Calculadora...");
                            opcao = false;
                            break;
                    }
                }
                Console.WriteLine("Somas já Feitas!");
                /*
                Usei essa estrutura de controle 'foreach' para iterar sobre o elementos de uma coleção,
                o 'var' permite a inferencia de tipo de variavel de iteração. 
                E a expressão no todo significa para cada objeto Soma na lista somas, 
                o objeto é atribuído à variável s para processamento no bloco do loop.
                */
                foreach (var s in somas)
                {
                    Console.WriteLine($"{s.num1} + {s.num2} = {s.resulsoma}");
                }
            }
        }
    }
}