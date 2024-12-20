#include <iostream>
using namespace std;

struct nodeType {
    int info;
    nodeType* next;
};

class linkedListType {
public:
    linkedListType();
    ~linkedListType();

    void insertBefore(int index, int value);
    void insertAfter(int index, int value);
    int getCount() const;
    int getDataByIndex(int index) const;
    void display() const;

private:
    nodeType* first;
    nodeType* last;
    int length;
};

linkedListType::linkedListType() {
    first = last = NULL;
    length = 0;
}

linkedListType::~linkedListType() {
    nodeType* current;
    while (first != NULL) {
        current = first;
        first = first->next;
        delete current;
    }
    last = NULL;
    length = 0;
}

void linkedListType::insertBefore(int index, int value) {
    if (index < 0 || index > length) {
        cout << "ERROR: Index out of range" << endl;
        return;
    }

    nodeType* newNode = new nodeType;
    newNode->info = value;

    if (index == 0) {
        newNode->next = first;
        first = newNode;
        if (length == 0)
            last = newNode;
    } else {
        nodeType* current = first;
        for (int i = 1; i < index; i++)
            current = current->next;

        newNode->next = current->next;
        current->next = newNode;
    }

    length++;
}

void linkedListType::insertAfter(int index, int value) {
    if (index < 0 || index >= length) {
        cout << "ERROR: Index out of range" << endl;
        return;
    }

    nodeType* newNode = new nodeType;
    newNode->info = value;

    nodeType* current = first;
    for (int i = 0; i < index; i++)
        current = current->next;

    newNode->next = current->next;
    current->next = newNode;
    if (current == last)
        last = newNode;

    length++;
}

int linkedListType::getCount() const {
    return length;
}

int linkedListType::getDataByIndex(int index) const {
    if (index < 0 || index >= length) {
        cout << "ERROR: Index out of range" << endl;
        return -1; // Return -1 to indicate an error
    }

    nodeType* current = first;
    for (int i = 0; i < index; i++)
        current = current->next;

    return current->info;
}

void linkedListType::display() const {
    if (first == NULL) {
        cout << "List is empty." << endl;
        return;
    }

    nodeType* current = first;
    cout << "Linked List: ";
    while (current != NULL) {
        cout << current->info << " -> ";
        current = current->next;
    }
    cout << "NULL" << endl;
}

int main() {
    linkedListType list;

    list.insertBefore(0, 10);
    list.insertBefore(1, 20);
    list.insertAfter(1, 15);

    cout << "Count: " << list.getCount() << endl;
    cout << "Data at index 1: " << list.getDataByIndex(1) << endl;

    list.display();

    return 0;
}
