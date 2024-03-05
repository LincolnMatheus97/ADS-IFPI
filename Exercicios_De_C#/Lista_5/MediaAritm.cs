namespace MediaArit
{
    class Aluno
    {
        public string? nomea { get; set; }
        public float nt1 { get; set; }
        public float nt2 { get; set; }
        public float nt3 { get; set; }
        public float medial { get; set; }

        class MediaAritm
        {
            static void Main()
            {
                bool opcao = true;
                Console.WriteLine("Bem vindo a Calculadora de Media");
                List<Aluno> alunos = new List<Aluno>();
                
                while (opcao)
                {
                    float n1, n2, n3;
                    string nome;
                    float media;

                    Console.WriteLine("Digite o nome do Aluno");
                    nome = Console.ReadLine().ToLower();

                    do
                    {
                        Console.WriteLine("Digite a primeira nota do aluno:");
                    } while (!float.TryParse(Console.ReadLine(), out n1) || n1 < 0.0 || n1 > 10.0);

                    do
                    {
                        Console.WriteLine("Digite a segunda nota do aluno:");
                    } while (!float.TryParse(Console.ReadLine(), out n2) || n2 < 0.0 || n2 > 10.0);

                    do
                    {
                        Console.WriteLine("Digite a terceira nota do aluno:");
                    } while (!float.TryParse(Console.ReadLine(), out n3) || n3 < 0.0 || n3 > 10.0);

                    media = (n1 + n2 + n3) / 3;
                    alunos.Add(new Aluno { nomea = nome, nt1 = n1, nt2 = n2, nt3 = n3, medial = media });

                    Console.WriteLine($"O nome e a média do Aluno são: {nome} // {media}");

                    int saida;
                    do
                    {
                        Console.WriteLine("Deseja fazer as medias de novos alunos ? 1 - Sim, 2 - Não");
                        saida = int.Parse(Console.ReadLine());
                        if (saida != 1 && saida != 2)
                        {
                            Console.WriteLine("Opção Selecionada Incorreta!");
                        }
                    } while (saida != 1 && saida != 2);

                    switch (saida)
                    {
                        case 1:
                            Console.WriteLine("Fazendo novas médias...");
                            break;
                        case 2:
                            Console.WriteLine("Encerrado o Programa...");
                            opcao = false;
                            break;
                    }
                }
                Console.WriteLine("O nome dos alunos suas notas e médias já feitas ! ");
                foreach (var a in alunos)
                {
                    Console.WriteLine($"Nome:{a.nomea}, Notas:{a.nt1}, {a.nt2}, {a.nt3} e Média :{a.medial}.");
                }
            }
        }
    }
}