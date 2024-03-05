namespace CalculaTMB
{
    class Calculadora_TMB
    {
        static void Main()
        {
            Console.WriteLine("Bem vindo a Calculadora de Taxa Metabólica Basal");

            int sexo = 0;

            do
            {
                Console.WriteLine("Você é 1 - Homem ou 2 - Mulher ?");
            } while (!int.TryParse(Console.ReadLine(), out sexo) || (sexo != 1 && sexo != 2));

            int peso;
            double altura;
            int idade;

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

            double tmb = (66 + ((13.7 * peso) + (3.5 * altura) - (6.8 * idade)));
            double tmbm = (655 + ((9.6 * peso) + (1.8 * altura) - (4.7 * idade)));

            int sex = sexo;
            double tmb_h = 0.0;

            int tmbarredondado = 0;
            string nomefatorAtividade = "";

            switch (sex)
            {
                case 1:
                    {
                        int fazExercicio = 0;

                        do
                        {
                            Console.WriteLine("Você pratica Exercícios ? ((1) para Sim ou (2) para Não");
                        } while (!int.TryParse(Console.ReadLine(), out fazExercicio) || (fazExercicio != 1 && fazExercicio != 2));

                        switch (fazExercicio)
                        {
                            case 1:
                                {
                                    int diasPraticados = 0;

                                    do
                                    {
                                        Console.WriteLine("Quantos dias na semana você pratica exercício ?");
                                    } while (!int.TryParse(Console.ReadLine(), out diasPraticados) || (diasPraticados < 0 || diasPraticados > 7));

                                    if (diasPraticados >= 1 && diasPraticados <= 2)
                                    {
                                        tmb_h = (1.6 * tmb);
                                        nomefatorAtividade = "Levemente Ativo";
                                    }
                                    else if (diasPraticados >= 3 && diasPraticados <= 4)
                                    {
                                        tmb_h = (1.9 * tmb);
                                        nomefatorAtividade = "Ativo";
                                    }
                                    else if (diasPraticados >= 5 && diasPraticados <= 7)
                                    {
                                        tmb_h = (2.2 * tmb);
                                        nomefatorAtividade = "Extremamente Ativo";
                                    }

                                    tmbarredondado = (int)Math.Round(tmb_h);
                                    Console.WriteLine("Seu Taxa Metabólica Basal é: {0}", nomefatorAtividade);
                                    Console.WriteLine($"Sua Taxa de Metabolismo Basal: {tmbarredondado} TMB");

                                    int percapeso = 0;

                                    do
                                    {
                                        Console.WriteLine("Você deseja perder Peso ? ((1) para Sim ou (2) para Não)");
                                    } while (!int.TryParse(Console.ReadLine(), out percapeso) || (percapeso != 1 && percapeso != 2));

                                    switch (percapeso)
                                    {
                                        case 1:
                                            Console.WriteLine("Quantas kCal você deseja consumir no dia ?");
                                            double.TryParse(Console.ReadLine(), out double kcal);
                                            Console.WriteLine("Quantos Kilos você deseja perder ?");
                                            int.TryParse(Console.ReadLine(), out int kilosperca);

                                            int perca = kilosperca * 7700;
                                            double dias_de_dieta = perca / (tmbarredondado - kcal);

                                            int simula = (int)Math.Round(dias_de_dieta);

                                            Console.WriteLine($"Levando em consideração que você vai consumir {kcal}KCAL " +
                                            $"e sabendo que sua Taxa Metabólica é {tmbarredondado}TMB." +
                                            $" Se você mantiver o foco, consegue perder {kilosperca}KG em {simula} Dias.");
                                            break;

                                        case 2:
                                            Console.WriteLine("Tudo bem, você pode encerrar o programa.");
                                            break;
                                    }
                                    break;
                                }
                            case 2:
                                {
                                    tmb_h = (1.4 * tmb);
                                    tmbarredondado = (int)Math.Round(tmb_h);
                                    nomefatorAtividade = "Sedentário";
                                    Console.WriteLine("Sua Taxa Metabólica Basal é: {0}", nomefatorAtividade);
                                    Console.WriteLine($"Sua Taxa Metabolismo Basal: {tmbarredondado} TMB");
                                    break;
                                }
                        }
                        break;
                    }
                case 2:
                    {
                        int fazExercicio = 0;

                        do
                        {
                            Console.WriteLine("Você pratica Exercícios ? ((1) para Sim ou (2) para Não");
                        } while (!int.TryParse(Console.ReadLine(), out fazExercicio) || (fazExercicio != 1 && fazExercicio != 2));

                        switch (fazExercicio)
                        {
                            case 1:
                                {
                                    int diasPraticados = 0;

                                    do
                                    {
                                        Console.WriteLine("Quantos dias na semana você pratica exercício ?");
                                    } while (!int.TryParse(Console.ReadLine(), out diasPraticados) || (diasPraticados < 0 || diasPraticados > 7));

                                    if (diasPraticados >= 1 && diasPraticados <= 2)
                                    {
                                        tmb_h = (1.4 * tmb);
                                        nomefatorAtividade = "Levemente Ativo";
                                    }
                                    else if (diasPraticados >= 3 && diasPraticados <= 4)
                                    {
                                        tmb_h = (1.7 * tmb);
                                        nomefatorAtividade = "Ativo";
                                    }
                                    else if (diasPraticados >= 5 && diasPraticados <= 7)
                                    {
                                        tmb_h = (1.9 * tmb);
                                        nomefatorAtividade = "Extremamente Ativo";
                                    }

                                    tmbarredondado = (int)Math.Round(tmb_h);
                                    Console.WriteLine("Seu Taxa Metabólica Basal é: {0}", nomefatorAtividade);
                                    Console.WriteLine($"Sua Taxa de Metabolismo Basal: {tmbarredondado} TMB");

                                    int percapeso = 0;

                                    do
                                    {
                                        Console.WriteLine("Você deseja perder Peso ? ((1) para Sim ou (2) para Não)");
                                    } while (!int.TryParse(Console.ReadLine(), out percapeso) || (percapeso != 1 && percapeso != 2));

                                    switch (percapeso)
                                    {
                                        case 1:
                                            Console.WriteLine("Quantas kCal você deseja consumir no dia ?");
                                            double.TryParse(Console.ReadLine(), out double kcal);
                                            Console.WriteLine("Quantos Kilos você deseja perder ?");
                                            int.TryParse(Console.ReadLine(), out int kilosperca);

                                            int perca = kilosperca * 7700;
                                            double dias_de_dieta = perca / (tmbarredondado - kcal);

                                            int simula = (int)Math.Round(dias_de_dieta);

                                            Console.WriteLine($"Levando em consideração que você vai consumir {kcal}KCAL " +
                                            $"e sabendo que sua Taxa Metabólica é {tmbarredondado}TMB." +
                                            $" Se você mantiver o foco, consegue perder {kilosperca}KG em {simula} Dias.");
                                            break;

                                        case 2:
                                            Console.WriteLine("Tudo bem, você pode encerrar o programa.");
                                            break;
                                    }
                                    break;
                                }
                            case 2:
                                {
                                    tmb_h = (1.2 * tmb);
                                    tmbarredondado = (int)Math.Round(tmb_h);
                                    nomefatorAtividade = "Sedentário";
                                    Console.WriteLine("Sua Taxa Metabólica Basal é: {0}", nomefatorAtividade);
                                    Console.WriteLine($"Sua Taxa Metabolismo Basal: {tmbarredondado} TMB");
                                    break;
                                }

                        }
                        break;
                    }
            }
        }
    }
}
