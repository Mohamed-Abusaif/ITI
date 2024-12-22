package package1;

import java.util.function.*;

public class Quadratic implements Function<Double[], Double[]> {

    @Override
    public Double[] apply(Double[] abcArray) {
        Double a = abcArray[0];
        Double b = abcArray[1];
        Double c = abcArray[2];

        double discriminant = b * b - (4 * a * c);
        if (discriminant < 0) {
            System.out.println("The equation has no real solutions.");
            return null;
        }

        return findRoots(a, b, c, discriminant);
    }

    private Double[] findRoots(Double a, Double b, Double c, double discriminant) {
        Double x1 = ((-1 * b) + Math.sqrt(discriminant)) / (2 * a);
        Double x2 = ((-1 * b) - Math.sqrt(discriminant)) / (2 * a);

        return new Double[] { x1, x2 };
    }
}
