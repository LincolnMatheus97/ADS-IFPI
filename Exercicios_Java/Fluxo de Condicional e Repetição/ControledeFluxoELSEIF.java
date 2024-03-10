public class ControledeFluxoELSEIF {
    public static void main(String [] args){
        int idade = 70; //Defino o valor da variável como 7
        if (idade <= 7){ //Idade é menor igual a 7 ?
            System.out.println("Ainda é uma criança"); //Se for verdadeiro, imprime. 
        } else if(idade > 7 && idade <= 18){ //Idade maior do 7 e menor ou igual a 18 
            System.out.println("É um adolescente"); //Se for verdadeiro, imprime.
        } else if(idade > 18 && idade <= 60){ //Idade maior do 18 e menor ou igual a 60
            System.out.println("É um adulto"); //Se for verdaeiro, imprime.
        } else{
            System.out.println("Esta na melhor Idade");
        }
    }
}
