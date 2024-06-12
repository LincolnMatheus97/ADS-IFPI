public class Q06 {
    public static void main(String[] args) {
        int x0 = 0, x1 = 1, soma = 0;
        System.out.println(x0);
        System.out.println(x1);
        while(soma <= 100) {
            soma = x0 + x1;
            x0 = x1;
            x1 = soma;
            System.out.println(soma);
        }
    }
}
