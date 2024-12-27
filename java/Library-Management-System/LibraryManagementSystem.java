import java.util.*;

// Abstract class LibraryItem
abstract class LibraryItem {
    private String id;
    private String title;

    public LibraryItem(String id, String title) {
        this.id = id;
        this.title = title;
    }

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public abstract String getItemDetails();
}

// Subclass Book
class Book extends LibraryItem {
    private String author;

    public Book(String id, String title, String author) {
        super(id, title);
        this.author = author;
    }

    public String getAuthor() {
        return author;
    }

    @Override
    public String getItemDetails() {
        return "Book [ID: " + getId() + ", Title: " + getTitle() + ", Author: " + author + "]";
    }
}

// Subclass Magazine
class Magazine extends LibraryItem {
    private String issue;

    public Magazine(String id, String title, String issue) {
        super(id, title);
        this.issue = issue;
    }

    public String getIssue() {
        return issue;
    }

    @Override
    public String getItemDetails() {
        return "Magazine [ID: " + getId() + ", Title: " + getTitle() + ", Issue: " + issue + "]";
    }
}

// Custom Exception
class ItemNotFoundException extends Exception {
    public ItemNotFoundException(String message) {
        super(message);
    }
}

// Library class with Generics and Wildcards
class Library {
    private List<LibraryItem> items = new ArrayList<>();

    public void addItem(LibraryItem item) {
        items.add(item);
    }

    public LibraryItem getItem(String id) throws ItemNotFoundException {
        return items.stream()
                .filter(item -> item.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new ItemNotFoundException("Item with ID " + id + " not found."));
    }

    public void displayItems() {
        items.forEach(item -> System.out.println(item.getItemDetails()));
    }

    public void deleteItem(String id) throws ItemNotFoundException {
        LibraryItem item = getItem(id);
        items.remove(item);
        System.out.println("Item with ID " + id + " has been removed.");
    }
}

// Client class
class Client {
    private String id;
    private String name;
    private String email;

    public Client(String id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public String getClientDetails() {
        return "Client [ID: " + id + ", Name: " + name + ", Email: " + email + "]";
    }

    public String getId() {
        return id;
    }
}

// Main class
public class LibraryManagementSystem {
    private static Library library = new Library();
    private static List<Client> clients = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        while (true) {
            System.out.println("\nMenu:");
            System.out.println("1. Add Library Item");
            System.out.println("2. Retrieve Library Item");
            System.out.println("3. Display All Library Items");
            System.out.println("4. Delete Library Item");
            System.out.println("5. Add Client");
            System.out.println("6. Retrieve Client");
            System.out.println("7. Display All Clients");
            System.out.println("8. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); 

            switch (choice) {
                case 1 -> addLibraryItem();
                case 2 -> retrieveLibraryItem();
                case 3 -> library.displayItems();
                case 4 -> deleteLibraryItem();
                case 5 -> addClient();
                case 6 -> retrieveClient();
                case 7 -> displayClients();
                case 8 -> {
                    System.out.println("Exiting... Goodbye!");
                    return;
                }
                default -> System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void addLibraryItem() {
        System.out.print("Enter item type (Book/Magazine): ");
        String type = scanner.nextLine();

        System.out.print("Enter ID: ");
        String id = scanner.nextLine();

        System.out.print("Enter title: ");
        String title = scanner.nextLine();

        if (type.equalsIgnoreCase("Book")) {
            System.out.print("Enter author: ");
            String author = scanner.nextLine();
            library.addItem(new Book(id, title, author));
        } else if (type.equalsIgnoreCase("Magazine")) {
            System.out.print("Enter issue: ");
            String issue = scanner.nextLine();
            library.addItem(new Magazine(id, title, issue));
        } else {
            System.out.println("Invalid item type.");
        }
    }

    private static void retrieveLibraryItem() {
        System.out.print("Enter item ID: ");
        String id = scanner.nextLine();
        try {
            LibraryItem item = library.getItem(id);
            System.out.println(item.getItemDetails());
        } catch (ItemNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }

    private static void deleteLibraryItem() {
        System.out.print("Enter item ID: ");
        String id = scanner.nextLine();
        try {
            library.deleteItem(id);
        } catch (ItemNotFoundException e) {
            System.out.println(e.getMessage());
        }
    }

    private static void addClient() {
        System.out.print("Enter client ID: ");
        String id = scanner.nextLine();

        System.out.print("Enter name: ");
        String name = scanner.nextLine();

        System.out.print("Enter email: ");
        String email = scanner.nextLine();

        clients.add(new Client(id, name, email));
    }

    private static void retrieveClient() {
        System.out.print("Enter client ID: ");
        String id = scanner.nextLine();

        clients.stream()
                .filter(client -> client.getId().equals(id))
                .findFirst()
                .ifPresentOrElse(
                        client -> System.out.println(client.getClientDetails()),
                        () -> System.out.println("Client with ID " + id + " not found."));
    }

    private static void displayClients() {
        clients.forEach(client -> System.out.println(client.getClientDetails()));
    }
}
