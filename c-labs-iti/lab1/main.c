// #include <stdio.h>
// #include <stdlib.h>

// int main()
// {
// char y = 'A';
// int  x = 10;
// float z = 10.5;
// char f;

// printf(" Y =%c X =%d Z =%0.1f  \n",y ,x, z);
// printf("Enter F: ");
// scanf("%c" ,&f);
// printf("F= %c F=%d \n",f,f);
// printf("Hexa=%x Octal=%o \n",x,x);

// return 0;
// }



#include <stdio.h>
#include <stdlib.h>

int main() {
    int size, row, col;

    // Get the size from the user
    while (1) {
        printf("Please Enter Size (Odd number only): ");
        scanf("%d", &size);

        if (size % 2 == 1) {
            break;  // Exit the loop if the size is odd
        } else {
            printf("Please Enter an Odd Size.\n");
        }
    }

    // Clear the screen
    printf("\033[2J");

    // Initialize the magic square with 0s
    int magicSquare[size][size];
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size; j++) {
            magicSquare[i][j] = 0;
        }
    }

    // Start filling the magic square
    int num = 1;
    row = 0;
    col = size / 2;

    while (num <= size * size) {
        magicSquare[row][col] = num;
        num++;

        // Save the current position before moving
        int newRow = row - 1;
        int newCol = col + 1;

        if (newRow < 0) newRow = size - 1;  // Wrap around to the bottom
        if (newCol == size) newCol = 0;     // Wrap around to the first column

        if (magicSquare[newRow][newCol] != 0) {  // If the new position is occupied
            newRow = row + 1;
            newCol = col;
        }

        row = newRow;
        col = newCol;
    }

    // Print the magic square
    printf("Generating Magic Square of size %d...\n", size);
    sleep(1);  // Small delay to simulate generation

    for (int row = 0; row < size; row++) {
        for (int col = 0; col < size; col++) {
            printf("%3d ", magicSquare[row][col]);
        }
        printf("\n");
    }

    printf("\nMagic Square generation complete.\n");

    return 0;
}
