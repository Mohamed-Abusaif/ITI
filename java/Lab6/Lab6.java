import java.util.*;
import java.util.ArrayList;

class Lab6 {
    static Map<Character, String[]> map = new TreeMap<>();

    static void addWord(String word) {
        char firstChar = word.charAt(0);

        if (!map.containsKey(firstChar)) {
            map.put(firstChar, new ArrayList<>());
        }

    }

    public static void main(String[] args) {

        map.put(key, args)

    }

}