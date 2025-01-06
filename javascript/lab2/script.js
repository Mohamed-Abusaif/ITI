//a function to calculate the sum of digits in a number

function sumOfDigits(num){
    var sum = 0;
    while (num > 0){
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
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
