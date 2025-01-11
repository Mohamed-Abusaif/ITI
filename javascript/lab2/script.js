//a function to calculate the sum of digits in a number

function sumOfDigits(num){
    var sum = 0;
    while (num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
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

console.log(sumOfDigits(1234));

//a function to calculate the number of vowels in a string

function countVowels(str){
    var count = 0;
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i]) !== -1){
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello"));

//a function to calculate the number of occurances of a character in a string

function countChar(str, char){
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === char){
            count++;
        }
    }
    return count;
}
