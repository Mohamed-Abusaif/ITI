#include <stdio.h>
#include <stdlib.h>

//Q3) a recursive function to compute the power operation: XY

double power(double x, int y) {
    if (y == 0) {
        return 1;
    }
    if (y < 0) {
        return 1 / power(x, -y);
    }
    return x * power(x, y - 1);
}

int main()
{

  double x;
    int y;

    printf("Enter the base: ");
    scanf("%lf", &x);

    printf("Enter the exponent: ");
    scanf("%d", &y);

    printf("%lf^%d = %lf\n", x, y, power(x, y));
    return 0;
}
