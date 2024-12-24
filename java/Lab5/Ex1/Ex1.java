interface myLambda {
    boolean lambdaBetteString(String s1, String s2);
}

class Ex1 {


    public static String betterString(String s1, String s2, myLambda m) {
        if (m.lambdaBetteString(s1, s2)) {
            return s1;
        } else {
            return s1;
        }
    }
    public static void main(String[] args) {
  
        String string1 = "Elephant";
        String string2 = "Dog";
        String longer = Ex1.betterString(string1, string2, (s1, s2) -> s1.length() > s2.length());
        System.out.println("Longer string: " + longer);
        
    }

}