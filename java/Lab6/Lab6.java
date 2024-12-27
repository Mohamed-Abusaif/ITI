import java.util.*;

class Lab6 {
    static Map<Character, List<String>> map = new TreeMap<>();

    static void addWord(String word) {
        char firstChar = word.charAt(0);

        if (!map.containsKey(firstChar)) {
            map.put(firstChar, new ArrayList<>());
        }
        map.get(firstChar).add(word);

    }

    public static void main(String[] args) {

        map.put(key, args)

    }

}