import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;
import package1.*;
import java.io.IOException;
import java.util.Scanner;
import java.util.Scanner;

public class lab4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Please Enter Your Choice: ");
            System.out.println("1 - New Order");
            System.out.println("2 - Exit");
            int choice = scanner.nextInt();

            if (choice == 1) {
                try {
                    System.out.println("Enter the number of items:");
                    int numItems = scanner.nextInt();

                    Item[] items = new Item[numItems];
                    for (int i = 0; i < numItems; i++) {
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

