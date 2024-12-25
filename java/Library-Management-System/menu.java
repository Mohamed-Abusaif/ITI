import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
import package1.*;
import java.io.IOException;
import java.util.Scanner;

public class menu {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Please Enter Your Choice: ");
            System.out.println("1 - New Book");
            System.out.println("2 - Delete Book");
            System.out.println("3 - Display Books");
            System.out.println("4 - Exit");
            int choice = scanner.nextInt();

            if (choice == 1) {
                try {
                    System.out.println("Enter the number of books to add:");
                    int numBooks = scanner.nextInt();

                    Book[] items = new Book[numBooks];
                    for (int i = 0; i < numBooks; i++) {
                        System.out.println("Enter price for item " + (i + 1) + ":");
                        double price = scanner.nextDouble();
                        System.out.println("Enter name for item " + (i + 1) + ":");
                        scanner.nextLine(); // Consume the newline
                        String name = scanner.nextLine();

                        items[i] = new Item(price, name);
                    }

                    // Create order using items
                    Order order = new Order();
                    Order newOrder = order.createOrder(items);

                    // Validate and calculate total price
                    for (Item item : newOrder.getItems()) {
                        newOrder.validateItemPrice(item); // Validate each item
                    }

                    Double totalPrice = newOrder.calculateTotalPrice();
                    System.out.println("Total price: " + totalPrice);

                } catch (MyCustomException e) {
                    System.out.println("Custom Exception Caught: " + e.getMessage());
                } catch (NullPointerException e) {
                    System.out.println("NullPointerException Caught: " + e.getMessage());
                } catch (IllegalArgumentException e) {
                    System.out.println("IllegalArgumentException Caught: " + e.getMessage());
                } finally {
                    System.out.println("Order processing completed.");
                }
            } else if (choice == 2) {
                System.out.println("Exiting the application. Goodbye!");
                break;
            } else {
                System.out.println("Invalid choice! Please try again.");
            }
        }

        scanner.close();
    }
}
