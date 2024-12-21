#include <iostream>
using namespace std;

template <class T>
class QueueLinkedList {
private:
    struct Node {
        T data;
        Node* next;
    };
    Node *front, *rear;

public:
    QueueLinkedList() : front(nullptr), rear(nullptr) {}

    bool isEmpty() {
        return front == nullptr;
    }

    void enqueue(T element) {
        Node* newNode = new Node{element, nullptr};
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else {
            Node* temp = front;
            cout << "Dequeued: " << front->data << endl;
            front = front->next;
            if (front == nullptr) rear = nullptr;
            delete temp;
        }
    }

    void display() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else {
            Node* current = front;
            cout << "Queue: ";
            while (current) {
                cout << current->data << " ";
                current = current->next;
            }
            cout << endl;
        }
    }
};

int main() {
    QueueLinkedList<int> q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    q.dequeue();
    q.display();
}
