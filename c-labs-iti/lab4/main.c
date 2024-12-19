#include <stdio.h>

int main() {
    int matrix[3][4];
    int rowSums[3] = {0};     
    float colAverages[4] = {0}; 

    // Input the matrix from the user
    printf("Enter the elements of a 3x4 matrix:\n");
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("Element [%d][%d]: ", i + 1, j + 1);
            scanf("%d", &matrix[i][j]);
        }
    }

    // Calculate row sums and column sums
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            rowSums[i] += matrix[i][j];
            colAverages[j] += matrix[i][j];
        }
    }

    // Calculate column averages
    for (int j = 0; j < 4; j++) {
        colAverages[j] /= 3.0;
    }

    // Print the row sums
    printf("\nSum of each row:\n");
    for (int i = 0; i < 3; i++) {
        printf("Row %d: %d\n", i + 1, rowSums[i]);
    }

    // Print the column averages
    printf("\nAverage of each column:\n");
    for (int j = 0; j < 4; j++) {
        printf("Column %d: %.2f\n", j + 1, colAverages[j]);
    }

    return 0;
}
