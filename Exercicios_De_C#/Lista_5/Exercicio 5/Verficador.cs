namespace Exer5
{
    class Lista
    {
        public int num {  get; set; }
    }
    class Verificador
    {
        static void Main()
        {
            List<Lista> numeros = new List<Lista>();
            int numero;
            int saida;
            int saida2;
            bool opcao = true;
            bool opcao2 = true;
            //Fiz esse loop, para que o usuário fornecesse, 5 números e adicionei a lista esses números.
            for (int i = 0; i < 5; i++)
            {
                do
                {
                    Console.WriteLine($"Digite o {i + 1} número:");
                    if (!int.TryParse(Console.ReadLine(), out numero))
                    {
                        Console.WriteLine("Número digitado inválido. Tente Novamente!");
                    }
                    else
                    {
                        numeros.Add(new Lista {num = numero});
                        break;
                    }
                } while (true);
            }
            //Aqui dei a escolha do usuário colocar ou não mais um número na lista.
            do
            {
                Console.WriteLine("Você deseja adicionar mais um número? (1-Sim/2-Não)");
                int.TryParse(Console.ReadLine(), out saida);
                if (saida != 1 && saida != 2)
                {
                    Console.WriteLine("Digite uma opção correta!");
                }
            } while (saida != 1 && saida != 2);

            if (saida == 1)
            {
                while (opcao)
                {
                    Console.WriteLine("Digite um novo número:");
                    if (int.TryParse(Console.ReadLine(), out numero))
                    {
                        numeros.Add(new Lista { num = numero });
                    }
                    else
                    {
                        Console.WriteLine("Número digitado inválido. Tente Novamente!");
                    }
                    //Repeti novamente a pergunta se queria por um novo número.
                    do
                    {
                        Console.WriteLine("Você deseja adicionar mais um número? (1-Sim/2-Não)");
                        int.TryParse(Console.ReadLine(), out saida);
                        if (saida != 1 && saida != 2)
                        {
                            Console.WriteLine("Digite uma opção correta!");
                        }
                    } while (saida != 1 && saida != 2);
                    
                    if (saida == 2)
                    {
                        Console.WriteLine("Parando...");
                        opcao = false;
                    }
                }
            }
            //Aqui um verificador se o número existe ou nao na lista.
            int numeroVerificador;

            Console.WriteLine("Digite um número para verificar se ele existe na lista: ");
            if (int.TryParse(Console.ReadLine(), out numeroVerificador))
            {
                if (numeros.Exists(n => n.num == numeroVerificador))
                {
                    Console.WriteLine($"O número {numeroVerificador} existe na lista !");
                }
                else
                {
                    Console.WriteLine($"O número {numeroVerificador} não existe na lista !");
                }
                //Dei novamente uma escolha, se ele queria consultar um novo número.
                do
                {
                    Console.WriteLine("Você deseja verificar mais um número? (1-Sim/2-Não)");
                    int.TryParse(Console.ReadLine(), out saida2);
                    if (saida2 != 1 && saida2 != 2)
                    {
                        Console.WriteLine("Digite uma opção correta!");
                    }
                } while (saida2 != 1 && saida2 != 2);

                if (saida2 == 1)
                {
                    while (opcao2)
                    {
                        Console.WriteLine("Digite um número para verificar se ele existe na lista: ");
                        if (int.TryParse(Console.ReadLine(), out numeroVerificador))
                        {
                            if (numeros.Exists(n => n.num == numeroVerificador))
                            {
                                Console.WriteLine($"O número {numeroVerificador} existe na lista !");
                            }
                            else
                            {
                                Console.WriteLine($"O número {numeroVerificador} não existe na lista !");
                            }

                            do
                            {
                                Console.WriteLine("Você deseja verificar mais um número? (1-Sim/2-Não)");
                                int.TryParse(Console.ReadLine(), out saida2);
                                if (saida2 != 1 && saida2 != 2)
                                {
                                    Console.WriteLine("Digite uma opção correta!");
                                }
                            } while (saida2 != 1 && saida2 != 2);

                            if (saida2 == 2)
                            {
                                Console.WriteLine("Encerrando...");
                                opcao2 = false;
                            }
                        }
                        else
                        {
                            Console.WriteLine("Número digitado Incorreto!");
                        }
                    }
                }
            }
            //E aqui mostrei os números que estão na lista.
            Console.WriteLine("Os números que estão na lista são os seguintes:");
            foreach (var i in numeros)
            {
                Console.WriteLine($"Os números são {i.num}");
            }
        }
    }
}
