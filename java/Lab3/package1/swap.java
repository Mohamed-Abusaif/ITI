package package1;

import java.util.function.*;

public class swap implements BinaryOperator<Integer> {

    @Override
    public Integer apply(Integer a, Integer b) {
        try {
            Integer temp = 0;
            temp = a;
            a = b;
            b = temp;
            System.out.println("Hello from swap function" + a + " " + b);
        } catch (Error e) {
            System.out.println("Error Swapping Elements!");
        }
        return 1;
    }

}
