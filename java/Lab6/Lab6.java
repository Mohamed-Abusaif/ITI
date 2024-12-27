import java.util.*;

class Lab6 {
    static Map<Character, List<String>> map = new TreeMap<>();

    static void addWord(String word) {
        char firstChar = Character.toLowerCase(word.charAt(0));
        map.putIfAbsent(firstChar, new ArrayList<>());
        List<String> words = map.get(firstChar);
        if (!words.contains(word)) {
            words.add(word);
            Collections.sort(words);
        }
    }

    public static void main(String[] args) {
        addWord("Apple");
        addWord("Avocado");
        addWord("Banana");
        addWord("Blueberry");
        addWord("Cherry");
        addWord("Cucumber");

        System.out.println("Full Dictionary:");
        for (Map.Entry<Character, List<String>> entry : map.entrySet()) {
            System.out.println("Letter: " + entry.getKey() + ", Words: " + entry.getValue());
        }

        System.out.println("\nWords for letter 'B': " + map.getOrDefault('b', Collections.emptyList()));
    }
}
