namespace Calcula
{
    class Calculadora_tmb
    {
        static void Main()
        {
            Console.WriteLine("Bem vindo a Calculadora de Taxa Metabólica Basal");

            string sexo;

            //Usei operador de looping para não ter entranda de qualquer outra palavra a não ser homem ou mulher.
            do
            {
                Console.WriteLine("Você é Homem ou Mulher ?");
                sexo = Console.ReadLine().ToLower();
                if (sexo != "homem" && sexo != "mulher")
                {
                    Console.WriteLine("Você digitou incorretamente, Tente Novamente.");
                }
            } while (sexo != "homem" && sexo != "mulher");

            int peso;
            double altura;
            int idade;

            //O mesmo fiz para o peso, altura e idade.
            do
            {
                Console.WriteLine("Digite seu Peso(Kg):");
            } while (!int.TryParse(Console.ReadLine(), out peso));

            do
            {
                Console.WriteLine("Digite sua Altura(cm):");
            } while (!double.TryParse(Console.ReadLine(), out altura));

            do
            {
                Console.WriteLine("Digite sua Idade");
            } while (!int.TryParse(Console.ReadLine(), out idade));

            string fazExercicio;

            //O mesmo sentido para o Sim e o Não.
            do
            {
                Console.WriteLine("Você pratica Exercícios ? ((S) para Sim ou (N) para Não");
                fazExercicio = Console.ReadLine().ToLower();
                if (fazExercicio != "s" && fazExercicio != "n")
                {
                    Console.WriteLine("Você digitou incorretamente, Tente Novamente.");
                }
            } while (fazExercicio != "s" && fazExercicio != "n");

            //O calculo do TMB tanto para mulher quanto para homem, indetificado pelo sexo.
            double tmb = 0.0;

            if (sexo == "homem")
            {
                tmb = (66 + ((13.7 * peso) + (3.5 * altura) - (6.8 * idade)));
            }
            else if (sexo == "mulher")
            {
                tmb = (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));
            }

            double fatorAtividade = 1.0;
            string nomefatorAtividade = "";

            if (fazExercicio == "s" && sexo == "homem")
            {
                int diasPraticados;

                //Aqui também estão usando o looping para manter o controle da entrada dos dados !
                do
                {
                    Console.WriteLine("Quantos dias na semana você pratica exercício ?");
                } while (!int.TryParse(Console.ReadLine(), out diasPraticados) || diasPraticados < 0 || diasPraticados > 7);

                if (diasPraticados >= 1 && diasPraticados <= 2)
                {
                    fatorAtividade = 1.6;
                    nomefatorAtividade = "Levemente Ativo";
                }
                else if (diasPraticados >= 3 && diasPraticados <= 4)
                {
                    fatorAtividade = 1.9;
                    nomefatorAtividade = "Ativo";
                }
                else if (diasPraticados >= 5 && diasPraticados <= 7)
                {
                    fatorAtividade = 2.2;
                    nomefatorAtividade = "Extremamente Ativo";
                }
            }
            else if (fazExercicio == "s" && sexo == "mulher")
            {
                int diasPraticados;

                do
                {
                    Console.WriteLine("Quantos dias na semana você pratica exercício ?");
                } while (!int.TryParse(Console.ReadLine(), out diasPraticados) || diasPraticados < 0 || diasPraticados > 7);

                if (diasPraticados >= 1 && diasPraticados <= 2)
                {
                    fatorAtividade = 1.4;
                    nomefatorAtividade = "Levemente Ativo";
                }
                else if (diasPraticados >= 3 && diasPraticados <= 4)
                {
                    fatorAtividade = 1.7;
                    nomefatorAtividade = "Ativo";
                }
                else if (diasPraticados >= 5 && diasPraticados <= 7)
                {
                    fatorAtividade = 1.9;
                    nomefatorAtividade = "Extremamente Ativo";
                }
            }
            else if (fazExercicio == "n" && sexo == "homem")
            {
                fatorAtividade = 1.4;
                nomefatorAtividade = "Sedentário";
            }

            else if (fazExercicio == "n" && sexo == "mulher")
            {
                fatorAtividade = 1.2;
                nomefatorAtividade = "Sedentário";
            }

            tmb *= fatorAtividade;
            int tmbarredondado = (int)Math.Round(tmb);

            Console.WriteLine("Sua Taxa Metabólica Basal é: {0}", nomefatorAtividade);
            Console.WriteLine($"Sua Taxa Metabólica Basal(TMB) é: {tmbarredondado} calorias por dia");

            string percapeso;

            do
            {
                Console.WriteLine("Você deseja perder Peso ? ((S) para Sim ou (N) para Não)");
                percapeso = Console.ReadLine().ToLower();
                if (percapeso != "s" && percapeso != "n")
                {
                    Console.WriteLine("Você digitou incorretamente, Tente Novamente.");
                }
            } while (percapeso != "s" && percapeso != "n");

            if (percapeso == "s")
            {
                Console.WriteLine("Quantas kCal você deseja consumir no dia ?");
                double.TryParse(Console.ReadLine(), out double kcal);
                Console.WriteLine("Quantos Kilos você deseja perder ?");
                int.TryParse(Console.ReadLine(), out int kilosperca);

                int perca = kilosperca * 7700;
                double dias_de_dieta = perca / (tmbarredondado - kcal);

                int simula = (int)Math.Round(dias_de_dieta);

                Console.WriteLine($"Levando em consideração que você vai consumir {kcal}KCAL " +
                $"e sabendo que sua Taxa Metabólica é {tmbarredondado}TMB." +
                $" Se você manter o foco, consegue perder {kilosperca}KG em {simula}Dias.");
            }
            else
            {
                Console.WriteLine("Tudo Bem, Aperte F5 para começar novamente!");
            }

        }
    }
}