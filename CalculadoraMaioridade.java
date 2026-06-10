import java.util.Scanner;

public class CalculadoraMaioridade {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

         int idade = 18;

         if (idade >= 18){
            System.out.print("Você pode ser preso, vagabundo!");
         }

         else{
            System.out.print("Você ainda é café com leite.");
         }

    }

}