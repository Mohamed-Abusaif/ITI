import java.util.ArrayList;

public class Ex2 {

    public static void checkString(String s) {
        ArrayList<Character> charachters = new ArrayList<Character>();
        boolean charFound = false;
        for (int i = 0; i < s.length(); i++) {
            charachters.add(s.charAt(i));
        }
        for (int i = 0; i < charachters.size(); i++) {
            if (!Character.isLetter(charachters.get(i))) {
                charFound = false;
                break;
            } else {
                charFound = true;
            }
        }
        if (charFound == true) {
            System.out.println("String contains only chars!");
        } else {
            System.out.println("String contains other values!");
        }

    }

    public static void main(String[] args) {
        String s = "HelloW5orld";
        checkString(s);
    }
}
