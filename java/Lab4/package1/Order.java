package package1;

import java.util.ArrayList;

public class Order {
    private ArrayList<Item> items; // Make items private for encapsulation
    private Double totalPrice; // Change type to Double

    // Constructor to pre-populate the items array
    public Order() {
        items = new ArrayList<>(); // Initialize the list

        // Add some default items
        items.add(new Item(50.0, "Default Item 1"));
        items.add(new Item(30.0, "Default Item 2"));
        items.add(new Item(20.0, "Default Item 3"));
    }

    // Getter for items
    public ArrayList<Item> getItems() {
        return items;
    }

    // Method 1: Create a new order from a provided array of items
    public Order createOrder(Item[] items) throws MyCustomException {
        if (items == null || items.length == 0) {
            throw new MyCustomException("No items provided for the order!");
        }
        Order order = new Order();
        for (Item item : items) {
            order.items.add(item);
        }
        return order;
    }

    // Method 2: Calculate total price
    public Double calculateTotalPrice() {
        if (items == null || items.isEmpty()) { // Check if list is null or empty
            throw new NullPointerException("Item list is null or empty!");
        }
        totalPrice = 0.0; // Initialize totalPrice as Double
        for (Item item : items) {
            if (item != null) { // Avoid null items
                totalPrice += item.price; // Add item price to totalPrice
            }
        }
        return totalPrice;
    }

    // Method 3: Validate item prices
    public void validateItemPrice(Item item) {
        if (item == null) {
            throw new IllegalArgumentException("Item cannot be null!");
        }
        if (item.price <= 0) {
            throw new IllegalArgumentException("Item price must be greater than 0!");
        }
    }
}
