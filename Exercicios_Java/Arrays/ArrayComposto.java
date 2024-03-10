import java.util.Arrays;

public class ArrayComposto {
    public static void main(String [] args){
        String [] [] compost = {{"Carlos","Maria","Julio"}, {"Sergipe", "Maranhão","Piauí"}};
        
        System.out.println(compost [0] [0]);
        System.out.println(Arrays.deepToString(compost)); //Utilizamos deepToString para ArraysBidimensionais
        
        //Para buscarmos a posição de "Carlos" temos qu fazer uma busca manual
        int Posicao = -1;
        String Busca = "Carlos";

        for (int i = 0; i < compost.length; i++) {
            for (int j = 0; j < compost[i].length; j++) {
                if (compost[i][j].equals(Busca)) {
                    Posicao = i;
                    break;
                }
            }
            if (Posicao != -1) {
                break;
            }
        }

        if (Posicao != -1) {
            System.out.println("Encontrado na posição: [" + Posicao + "][0]");
        } else {
            System.out.println("Não encontrado");
        }

        //Para fazermos de modo Automatico teremos que transformar o Array Bidimensional em Unidimensional, ou seja:
        String[] unidimensional = new String[compost.length * compost[0].length];
        int index = 0;

        for (int i = 0; i < compost.length; i++) {
            for (int j = 0; j < compost[i].length; j++) {
                unidimensional[index] = compost[i][j];
                index++;
            }
        }

        // Use Arrays.binarySearch no array unidimensional
        String busca = "Carlos";
        int posicao = Arrays.binarySearch(unidimensional, busca);

        if (posicao >= 0) {
            int linha = posicao / compost[0].length;
            int coluna = posicao % compost[0].length;
            System.out.println(busca + " encontrado na posição: [" + linha + "][" + coluna + "]");
        } else {
            System.out.println(busca + " não encontrado");
        }
    }
}
