#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int sum = 0;
    int n;
    scanf("%d", &n);

    // Complete the code to calculate the sum of the five digits on n.
    // first
    int first = n % 10;
    int num1 = (n - first) / 10;
    // second
    int second = num1 % 10;
    int num2 = (num1 - second) / 10;
    // third
    int third = num2 %10;
    int num3 = (num2 - third)/10;
    // fourth
    int fourth = num3 % 10;
    int num4= (num3 - fourth)/10;
    //fifth
    int fifth = num4 %10;
    int num5 = (num4 - fifth)/10;

    // printf("%d %d %d %d %d", first , second , third , fourth , fifth);
    sum = first+ second+ third +fourth +fifth;
    printf("%d" , sum);

    return 0;
}