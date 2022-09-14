import java.util.Arrays;
import java.util.Scanner;

public class AhorcadoApp {

    static int CONT_INTENTOS = 6;
    static int PTS_JUG_1 = 0;
    static int PTS_JUG_2 = 0;
    static int TURNO = 1;
    public static void main(String[] args) throws Exception {
        String jugador1, jugador2;

        System.out.println("Jugador 1 introduce tu nombre.");
        jugador1 = IntroducirCadena();
        System.out.println("Jugador 2 introduce tu nombre.");
        jugador2 = IntroducirCadena();

        JugarAhorcado(jugador1, jugador2);

    }

    public static void JugarAhorcado(String jugador1, String jugador2){

        while(PTS_JUG_1 < 3 && PTS_JUG_2 < 3){
            if(TURNO % 2 != 0){
                JugarTurno(jugador1, jugador2);
            }else{
                JugarTurno(jugador2, jugador1);
            }
        }
        MostrarGanador(jugador1, jugador2);
    }

    private static void MostrarGanador(String jugador1, String jugador2) {
        if(PTS_JUG_1 == 3){
            System.out.println("Gana " + jugador1);
        }
        if(PTS_JUG_2 == 3){
            System.out.println("Gana " + jugador2);
        }
    }

    public static void JugarTurno(String primero, String segundo){

        String letra, palabra;
        Boolean encontrada;

        System.out.println(primero + " Introduce una palabra.");
        palabra = IntroducirCadena();
        char[] cadaux = CrearYRellenarCadena(palabra);

        while(CONT_INTENTOS > 0 && !SonIguales(palabra, cadaux)){
            System.out.println(segundo + " Introduce una letra.");
            letra = IntroducirCadena();
            encontrada = BuscarLetra(palabra, cadaux, letra);
            if(encontrada){
                MostrarResultado(cadaux);
                DarPuntos(segundo, palabra, cadaux);
            }else{
                CONT_INTENTOS--;
                System.out.println("Letra incorrecta. Tienes " + CONT_INTENTOS + " intentos.");
                DarPuntos(primero, palabra, cadaux);
            }
        }
        CONT_INTENTOS = 6;

    }

    private static void DarPuntos(String jugador, String palabra, char[] cadaux) {
        if(SonIguales(palabra, cadaux)){
            System.out.println("Correcto. +1 punto para " + jugador);
            if(TURNO % 2 != 0){
                PTS_JUG_2++;
                System.out.println(jugador + " tiene " + PTS_JUG_2 + " puntos.");
            }else{
                PTS_JUG_1++;
                System.out.println(jugador + " tiene " + PTS_JUG_1 + " puntos.");
            }
            TURNO++;
        }

        if(CONT_INTENTOS == 0){
            System.out.println("Ahorcado. Punto para " + jugador);
            if(TURNO % 2 != 0){
                PTS_JUG_1++;
                System.out.println(jugador + " tiene " + PTS_JUG_1 + " puntos.");
            }else{
                PTS_JUG_2++;
                System.out.println(jugador + " tiene " + PTS_JUG_2 + " puntos.");
            }
        }
    }

    private static char[] CrearYRellenarCadena(String palabra) {
        char[] cadaux = new char[palabra.length()];
        Arrays.fill(cadaux, '-');
        return cadaux;
    }

    private static void MostrarResultado(char[] cadaux) {
        for (int i = 0; i < cadaux.length; i++) {
            System.out.print(cadaux[i]);
        }
        System.out.println("\n");
    }

    private static boolean SonIguales(String palabra, char[] cadaux) {
        return Arrays.equals(palabra.toCharArray(), cadaux);
    }

    public static Boolean BuscarLetra(String palabra, char[] cadaux, String letra){
        Boolean encontrada = false;

        for (int i = 0; i < palabra.length(); i++) {
            if(palabra.charAt(i) == letra.charAt(0)){
                cadaux[i] = letra.charAt(0);
                encontrada = true;
            }
        }

        return encontrada;
    }

    public static String IntroducirCadena(){
        String texto;
        Scanner sc = new Scanner(System.in);
        texto = sc.nextLine();
        return texto;
    }
}
