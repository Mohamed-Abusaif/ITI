#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    // Complete the code.

    for (int i = a; i <= b && i >= a; i++)
    {
        if (i >= 1 && i <= 9)
        {
            switch (i)
            {
            case 1:
                printf("%s", "one\n");
                break;
            case 2:
                printf("%s", "two\n");
                break;
            case 3:
                printf("%s", "three\n");
                break;
            case 4:
                printf("%s", "four\n");
                break;
            case 5:
                printf("%s", "five\n");
                break;
            case 6:
                printf("%s", "six\n");
                break;
            case 7:
                printf("%s", "seven\n");
                break;
            case 8:
                printf("%s", "eight\n");
                break;
            case 9:
                printf("%s", "nine\n");
                break;
            default:
                break;
            }
        }
        else if(i>9 && (i%2 ==0)){
            printf("%s" , "even\n");
        }
        else{
            printf("%s" , "odd\n");
        }
    }

    return 0;
}
