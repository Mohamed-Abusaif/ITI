#include <stdio.h>
#include <stdlib.h>
#include <termios.h>
#include <unistd.h>

#define MAXOPTIONS 3
#define clear() printf("\033[H\033[J")

#define ESC 27
#define ENTER 10

#define COLOR_RESET   "\033[0m"
#define COLOR_BLUE    "\033[34m"
#define COLOR_WHITE   "\033[37m"

typedef enum {
    KEY_UP,
    KEY_DOWN,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_ENTER,
    KEY_ESC,
    KEY_OTHER
} KeyType;

KeyType getKey() {
    int ch = getchar();
    if (ch == ESC) {
        int next = getchar();
        if (next == '[') {
            ch = getchar();
            switch (ch) {
                case 'A': return KEY_UP;
                case 'B': return KEY_DOWN;
                case 'C': return KEY_RIGHT;
                case 'D': return KEY_LEFT;
            }
        }
        return KEY_ESC;
    } else if (ch == ENTER) {
        return KEY_ENTER;
    }
    return KEY_OTHER;
}

void initTerminal() {
    struct termios term;
    tcgetattr(0, &term);
    term.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(0, TCSANOW, &term);
}

void resetTerminal() {
    struct termios term;
    tcgetattr(0, &term);
    term.c_lflag |= (ICANON | ECHO);
    tcsetattr(0, TCSANOW, &term);
}

void showMenu(int selected, int isSelected) {
    clear();
    char options[MAXOPTIONS][50] = {"Cheese Pizza", "Beef Burger", "Chicken Strips"};

    if (isSelected) {
        printf("%s%s%s\n", COLOR_BLUE, options[selected], COLOR_RESET);
    } else {
        for (int i = 0; i < MAXOPTIONS; i++) {
            if (i == selected) {
                printf("%s%s%s\n", COLOR_BLUE, options[i], COLOR_RESET);
            } else {
                printf("%s%s\n", COLOR_WHITE, options[i], COLOR_RESET);
            }
        }
    }
    fflush(stdout);
}

int handleSelectRange(int current) {
    if (current < 0) return MAXOPTIONS - 1;
    if (current >= MAXOPTIONS) return 0;
    return current;
}

int main() {
    int selected = 0;
    int isSelected = 0;
    int running = 1;

    initTerminal();
    showMenu(selected, isSelected);

    while (running) {
        KeyType key = getKey();
        switch (key) {
            case KEY_UP:
            case KEY_LEFT:
                if (!isSelected) {
                    selected = handleSelectRange(selected - 1);
                    showMenu(selected, isSelected);
                }
                break;
            case KEY_DOWN:
            case KEY_RIGHT:
                if (!isSelected) {
                    selected = handleSelectRange(selected + 1);
                    showMenu(selected, isSelected);
                }
                break;
            case KEY_ENTER:
                isSelected = 1;
                clear();
                // Print the selected menu option
                printf("You selected: ");
                if (selected == 0) {
                    printf("Cheese Pizza\n");
                } else if (selected == 1) {
                    printf("Beef Burger\n");
                } else if (selected == 2) {
                    printf("Chicken Strips\n");
                }
                printf("\nPress ESC to return to the menu.\n");
                break;
            case KEY_ESC:
                if (isSelected) {
                    isSelected = 0;
                    showMenu(selected, isSelected);
                } else {
                    clear();
                    running = 0;
                }
                break;
            default:
                break;
        }
    }

    resetTerminal();
    return 0;
}
