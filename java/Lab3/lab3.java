import package1.*;

class lab3 {

    public static void main(String[] args) {
        Quadratic quadratic = new Quadratic();

        Double[] abc1 = { 1.0, -3.0, 2.0 };
        Double[] result1 = quadratic.apply(abc1);
        System.out.println("Roots for test case 1: "
                + (result1 != null ? "x1 = " + result1[0] + ", x2 = " + result1[1] : "No real solutions"));

        Double[] abc2 = { 1.0, 2.0, 5.0 };
        Double[] result2 = quadratic.apply(abc2);
        System.out.println("Roots for test case 2: "
                + (result2 != null ? "x1 = " + result2[0] + ", x2 = " + result2[1] : "No real solutions"));

        System.out.println("==================================================");

        CelsiusConversion celsiusConversion = new CelsiusConversion();

        Double celsius = 25.0;
        Double fahrenheit = celsiusConversion.apply(celsius);
        System.out.println(celsius + " Celsius is " + fahrenheit + " Fahrenheit.");

        System.out.println("==================================================");

        Integer a = new Integer(5);
        Integer b = new Integer(6);
        swap newSwap = new swap();
        newSwap.apply(a, b);

        System.out.println("a Value Is: " + a);
        System.out.println("b Value Is: " + b);

    }
}
