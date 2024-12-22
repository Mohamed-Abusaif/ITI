package package1;

import java.util.function.*;

public class CelsiusConversion implements Function<Double, Double> {

    @Override
    public Double apply(Double t) {
        return convertToFahrenheit(t);
    }

    private Double convertToFahrenheit(Double celsius) {
        return (celsius * 9 / 5) + 32;
    }
}
