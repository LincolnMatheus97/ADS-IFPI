namespace OlaMundo
{
    class Escolhas
    {
        static void Main()
        {
            //Estrutura Switch
            Console.WriteLine("Escolha uma nota para dar ao prato? 0, 5 ou 10");
            int.TryParse(Console.ReadLine(), out int nota);

            switch (nota)
            {
                case 0:
                    Console.WriteLine("Comida muito ruim!.");
                    break;
                case 5:
                    Console.WriteLine("Comida razóavel.");
                    break;
                case 10:
                    Console.WriteLine("Comida muito boa!.");
                    break;
                default:
                    Console.WriteLine("Nota Inexistente");
                    break;
            }
        }
    }
}