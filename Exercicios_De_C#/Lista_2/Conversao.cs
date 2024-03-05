namespace OlaMundo
{
    class Conversao
    {
        static void Main()
        {
            Console.WriteLine("Digite qual número é sua casa: ");
            string numeroCasa = Console.ReadLine();
            int numero = int.Parse(numeroCasa); //Conversão Explicita 
            Console.WriteLine("Número é sua casa: {0}", numero);

            numero = Convert.ToInt32(numeroCasa);
            Console.WriteLine(numero);
        }
    }
    
}
