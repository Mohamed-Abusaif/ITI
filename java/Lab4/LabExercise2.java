class Complex<T extends Number> {
    private T real;
    private T imaginary;

    public Complex(T real, T imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    public T getReal() {
        return real;
    }

    public T getImaginary() {
        return imaginary;
    }

    public Complex<Double> add(Complex<? extends Number> other) {
        double realPart = this.real.doubleValue() + other.real.doubleValue();
        double imaginaryPart = this.imaginary.doubleValue() + other.imaginary.doubleValue();
        return new Complex<>(realPart, imaginaryPart);
    }

    public Complex<Double> subtract(Complex<? extends Number> other) {
        double realPart = this.real.doubleValue() - other.real.doubleValue();
        double imaginaryPart = this.imaginary.doubleValue() - other.imaginary.doubleValue();
        return new Complex<>(realPart, imaginaryPart);
    }

    public void display() {
        System.out.println(real + " + " + imaginary + "i");
    }
}

// Test class
public class LabExercise2 {
    public static void main(String[] args) {
        Complex<Integer> c1 = new Complex<>(3, 4);
        Complex<Double> c2 = new Complex<>(1.5, 2.5);

        System.out.println("First Complex Number:");
        c1.display();

        System.out.println("Second Complex Number:");
        c2.display();

        Complex<Double> sum = c1.add(c2);
        System.out.println("Sum:");
        sum.display();

        Complex<Double> difference = c1.subtract(c2);
        System.out.println("Difference:");
        difference.display();
    }
}
