namespace OlaMundo
{
    class Unario
    {
        static void Main()
        {
            var x = false;
            var n1 = 6;
            var n2 = 5;
            var n3 = 7;
            var n4 = 8;

            Console.WriteLine(!x);
            n3++;
            Console.WriteLine(n3);
            n4--;
            Console.WriteLine(n4);
            Console.WriteLine(n2 == --n1); //Faz com que decremente uma unidade de n1 e seja igual a n2.
            Console.WriteLine(n2-- == ++n1); //Faz com que incremente uma unidade de n1 e decremente uma unidade de n2 e sejem iguais.


        }
    }
}