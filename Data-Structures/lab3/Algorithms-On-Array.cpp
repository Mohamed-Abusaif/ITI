#include <iostream>
#include <chrono>
using namespace std;

class Node {
public:
    int index;
    Node* next;

    Node(int value) : index(value), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;
    Node* tail;
    int size;

public:
    LinkedList() : head(nullptr), tail(nullptr), size(0) {}

    void append(int data) {
        Node* newNode = new Node(data);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
        size++;
    }

    int getSize() const {
        return size;
    }

    void printList() const {
        Node* current = head;
        while (current) {
            cout << current->index << " ";
            current = current->next;
        }
        cout << "\n";
    }

    ~LinkedList() {
        Node* current = head;
        while (current) {
            Node* temp = current;
            current = current->next;
            delete temp;
        }
    }
};

LinkedList linearSearch(int* arr, int target, int size) {
    LinkedList l;
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            l.append(i);
        }
    }
    return l;
}

int binarySearch(int* arr, int target, int size) {
    int left = 0;
    int right = size - 1;
    int iteration = 0;
    while (left <= right) {
        int mid = (left + right) / 2;
        iteration++;
        if (arr[mid] == target) {
            cout << "Element found in iteration " << iteration << endl;
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

void bubbleSort(int* arr, int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {0, 45, 2, 34, 52, 35, 234, 235, 24, 3, 254, 2, 542, 3, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    auto start = chrono::high_resolution_clock::now();

    // Linear Search
    cout << "Linear Search for value 3: ";
    LinkedList l = linearSearch(arr, 3, size);
    l.printList();

    // Bubble Sort
    bubbleSort(arr, size);
    cout << "Array after Bubble Sort: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Binary Search
    int index = binarySearch(arr, 3, size);
    cout << "Element found at index: " << index << endl;

    auto end = chrono::high_resolution_clock::now();
    chrono::duration<double> elapsed = end - start;
    cout << "Execution time: " << elapsed.count() << " seconds" << endl;

    return 0;
}
