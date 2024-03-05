namespace Calcul
{
    class CalculadoraIMC
    {
        static void Main()
        {
            Console.WriteLine("Bem vindo a Caluculadora de IMC");
            Console.WriteLine("Digite seu Peso(Kg):");
            double.TryParse(Console.ReadLine(), out double peso);
            Console.WriteLine("Digite sua Altura(M):");
            double.TryParse(Console.ReadLine(), out double altura);

            //Transformando a altura em elevado a 2.
            double altura_1 = 0;
            altura_1 = Math.Pow(altura, 2);
            //Calculo do Imc.
            double imc = 0;
            imc = peso / altura_1;


            Console.WriteLine("Seu IMC: {0}", imc);
            //Imc Normal para todo peso e altura.
            double imcDesejado = 20;


            /*Cada Se e EntaoSe da uma condição, dentro da condiçao tem o calculo de quanto
            peso a pessoa precisa ganhar ou perder para aquele IMC dela, baseado na sua altura e peso*/

            if (imc < 16.9)
            {   
                Console.WriteLine("Muito Abaixo do Peso");
                double pesoNecessario = imcDesejado * altura_1;
                double ganhoPeso = pesoNecessario - peso;
                Console.WriteLine("Você precisa ganhar(Kg): {0}", ganhoPeso);
            }
            else if (imc >= 17 && imc <= 18.4)
            {
                Console.WriteLine("Abaixo do Peso");
                double pesoNecessario = imcDesejado * altura_1;
                double ganhoPeso = pesoNecessario - peso;
                Console.WriteLine("Você precisa ganhar(Kg): {0}", ganhoPeso);
            }
            else if (imc >= 18.5 && imc <= 24.9)
            {
                Console.WriteLine("Peso Normal");
                Console.WriteLine("Você está dentro do Peso");
            }
            else if (imc >= 25 && imc <= 29.9)
            {
                Console.WriteLine("Acima do Peso");
                double pesoNecessario = imcDesejado * altura_1;
                double perdaPeso = peso - pesoNecessario;
                Console.WriteLine("Você precisa perder(Kg): {0}", perdaPeso);
            }
            else if (imc >= 30 && imc <= 34.9)
            {
                Console.WriteLine("Obesidade Grau I");
                double pesoNecessario = imcDesejado * altura_1;
                double perdaPeso = peso - pesoNecessario;
                Console.WriteLine("Você precisa perder(Kg): {0}", perdaPeso);
            }
            else if (imc >= 35 && imc <= 40)
            {
                Console.WriteLine("Obesidade Grau II");
                double pesoNecessario = imcDesejado * altura_1;
                double perdaPeso = peso - pesoNecessario;
                Console.WriteLine("Você precisa perder(Kg): {0}", perdaPeso);
            }
            else if (imc > 40)
            {
                Console.WriteLine("Obesidade Grau III");
                double pesoNecessario = imcDesejado * altura_1;
                double perdaPeso = peso - pesoNecessario;
                Console.WriteLine("Você precisa perder(Kg): {0}", perdaPeso);
            }
        }
    }
}