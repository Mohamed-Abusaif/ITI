
#include <stdio.h>
#include <stdlib.h>
#include "abusaifLib.h"

// 7 built in functions to implement by me
/*

strcat(s1, s2)
strcmp(str1, str2)
strlen(string_name)

Strcp()

upper to lower
lower to upper

*/

//to run the code in vscode terminal use the following command:
//gcc main.c abusaifLib.c -o main && ./main

int main()
{
    char str1[100] = "Hello";
    char str2[] = " World";

    abusaifStrCat(str1, str2);
    printf("Concatenated string: %s\n", str1);

    char str3[100];
    abusaifStrCpy(str3, str1);
    printf("Copied string: %s\n", str3);

    abusaifStrCmp(str1, str2);

    abusaifStrLen(str1);

    abusaifStrUpperToLower(str1);

    abusaifStrLowerToUpper(str1);

    return 0;
}
