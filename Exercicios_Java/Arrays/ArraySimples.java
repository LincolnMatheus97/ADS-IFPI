import java.util.Arrays;

public class ArraySimples {
    public static void main(String [] args){
        String[] paises = {"Brasil","Rússia","Índia","China","África do Sul"};
        
        System.out.println(paises[0]);
        System.out.println(Arrays.toString(paises));

        int posicao = Arrays.binarySearch (paises, "Rússia");
        System.out.println(posicao);

        Arrays.sort (paises, 0, paises.length); //Ordena o nosso Array iniciando do Zero
        System.out.println(Arrays.toString(paises)); //Imprime o resultado na tela
    }

}