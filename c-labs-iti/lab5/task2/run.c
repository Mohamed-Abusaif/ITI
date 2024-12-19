
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

void abusaifStrCat(char str1[], char str2[]);
void abusaifStrCpy(char str1[], char str2[]);
void abusaifStrCmp(char str1[], char str2[]);
void abusaifStrLen(char str1[]);
void abusaifStrUpperToLower(char str1[]);
void abusaifStrLowerToUpper(char str1[]);

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

void abusaifStrCat(char str1[], char str2[])
{
    int i = 0, j = 0;
    while (str1[i] != '\0')
    {
        i++;
    }
    while (str2[j] != '\0')
    {
        str1[i] = str2[j];
        i++;
        j++;
    }
    str1[i] = '\0';
}

void abusaifStrCpy(char str1[], char str2[])
{
    int i = 0;
    while (str2[i] != '\0')
    {
        str1[i] = str2[i];
        i++;
    }
    str1[i] = '\0';
}

void abusaifStrCmp(char str1[], char str2[])
{
    int i = 0;
    while (str1[i] == str2[i] && str1[i] != '\0' && str2[i] != '\0')
    {
        i++;
    }
    if (str1[i] == str2[i])
    {
        printf("Strings are equal\n");
    }
    else if (str1[i] < str2[i])
    {
        printf("String 1 is less than string 2\n");
    }
    else
    {
        printf("String 1 is greater than string 2\n");
    }
}

void abusaifStrLen(char str1[])
{
    int i = 0;
    while (str1[i] != '\0')
    {
        i++;
    }
    printf("Length of string: %d\n", i);
}

void abusaifStrUpperToLower(char str1[])
{
    int i = 0;
    while (str1[i] != '\0')
    {
        if (str1[i] >= 'A' && str1[i] <= 'Z')
        {
            str1[i] = str1[i] + 32;
        }
        i++;
    }
    printf("String in lower case: %s\n", str1);
}

void abusaifStrLowerToUpper(char str1[])
{
    int i = 0;
    while (str1[i] != '\0')
    {
        if (str1[i] >= 'a' && str1[i] <= 'z')
        {
            str1[i] = str1[i] - 32;
        }
        i++;
    }
    printf("String in upper case: %s\n", str1);
}
