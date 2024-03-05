namespace OlaMundo
{
    class Logico
    {
        static void Main()
        {
            var atividade_1 = false;
            var atividade_2 = false;
            var todas = atividade_1 && atividade_2; //Operador lógico "E", só será verdadeiro se as duas variaveis forem verdadeiras.

            Console.WriteLine("Fez todas as atividades? {0}", todas);

            var umaAtividade = atividade_1 || atividade_2; //Operador lógico "OU", será veradeiro se ao menos uma das variaveis for verdadeira.

            Console.WriteLine("Fez apenas uma atividade? {0}", umaAtividade);
            Console.WriteLine("Não fez nenhuma atividade? {0}", !umaAtividade); //Operador lógico "NÃO", negará a variavel.


        }
    }
}