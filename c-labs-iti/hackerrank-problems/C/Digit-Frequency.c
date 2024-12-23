#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    char *s;
    s = malloc(1024 * sizeof(char));
    scanf("%[^\n]", s);
    s = realloc(s, strlen(s) + 1);

    int arr[10] = {0};

    for (size_t i = 0; i < strlen(s); i++)
    {
        if (s[i] == '0')
        {
            arr[0]++;
        }
        else if (s[i] == '1')
        {
            arr[1]++;
        }
        else if (s[i] == '2')
        {
            arr[2]++;
        }
        else if (s[i] == '3')
        {
            arr[3]++;
        }
        else if (s[i] == '4')
        {
            arr[4]++;
        }
        else if (s[i] == '5')
        {
            arr[5]++;
        }
        else if (s[i] == '6')
        {
            arr[6]++;
        }
        else if (s[i] == '7')
        {
            arr[7]++;
        }
        else if (s[i] == '8')
        {
            arr[8]++;
        }
        else if (s[i] == '9')
        {
            arr[9]++;
        }
    }
    for(int i=0; i<=9; i++){
        printf("%d " , arr[i]);
    }

    return 0;
}
