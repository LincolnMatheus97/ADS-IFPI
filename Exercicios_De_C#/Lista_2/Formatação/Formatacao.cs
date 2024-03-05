namespace OlaMundo
{
    class Formatacao
    {
        static void Main()
        {
            double x = 20.233;
            Console.WriteLine(x.ToString("F1")); //Valor formatado para decimal.
            Console.WriteLine(x.ToString("C")); //Valor formatado para currency ou valor monetario.
            Console.WriteLine(x.ToString("P")); //Valor formatado para porcentagem.

        }
    }
}