
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
