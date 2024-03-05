namespace Exerc4
{
    class Matriz
    {
        static void Main()
        {
            int[,] matrizquintupla = new int[5, 5];
            
            /*Esse primeiro loop controla as linhas da matriz
             e será executado 5 vezes para i */
            for (int i = 0; i < 5; i++)
            {   
                /*Esse segundo loop controla as colunas da matriz
                 e será executado 5 vezes para cada iteração do loop
                 externo*/
                for (int j = 0; j < 5; j++)
                {   
                    //Preenche cada linha da matriz com os valores de 1 a 5.
                    matrizquintupla[i, j] = j + 1;
                }
            }

            for (int i = 0; i < 5; i++)
            {
                for (int j = 0; j < 5; j++)
                {   
                    //Imprime os valores da matriz para cada coluna.
                    Console.Write(matrizquintupla[i, j] + " ");
                }
                //Aqui eu garanto que cada linha da Matriz seja impressa em uma nova linha na saída.
                Console.WriteLine();
            }
        }
    }
}
