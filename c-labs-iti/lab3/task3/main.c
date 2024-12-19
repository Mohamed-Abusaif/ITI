#include <stdio.h>
#include <stdlib.h>

void gotoxy(int col, int row) {
    printf("\033[%d;%dH", row, col);
}
//Q2) Magic Box Modified

int main()
{
    int size, row, col;


    printf("Please Enter Size: ");
    scanf("%d", &size);


    if (size % 2 == 0) {
        printf("Please Enter an Odd Size.\n");
        return 1;
    }

    printf("\033[2J");

    row = 1;
    col = (size + 1) / 2;


    gotoxy((col - 1) * 4 + 1, row);
    printf("1");


    for (int num = 2; num <= size * size; num++) {

        int newRow = row - 1;
        int newCol = col - 1;


        if (newRow < 1) newRow = size;
        if (newCol < 1) newCol = size;


        if ((num - 1) % size == 0) {
            newRow = row + 1;
            newCol = col;
        }

        row = newRow;
        col = newCol;

        gotoxy((col - 1) * 4 + 1, row);
        printf("%d ", num);
        fflush(stdout);
        sleep(1);
    }

    gotoxy(0, size + 3);
    printf("\nMagic Square generation complete.\n");

}
