#include <iostream>
using namespace std;

template <class T>
class CircularQueue {
private:
    struct Node {
        T data;
        Node* next;
    };
    Node *front, *rear;

public:
    CircularQueue() : front(nullptr), rear(nullptr) {}

    bool isEmpty() {
        return front == nullptr;
    }

    void enqueue(T element) {
        Node* newNode = new Node{element, nullptr};
        if (isEmpty()) {
            front = rear = newNode;
            rear->next = front; // Point rear to front to make it circular
        } else {
            rear->next = newNode;
            rear = newNode;
            rear->next = front;
        }
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else if (front == rear) {
            cout << "Dequeued: " << front->data << endl;
            delete front;
            front = rear = nullptr;
        } else {
            Node* temp = front;
            cout << "Dequeued: " << front->data << endl;
            front = front->next;
            rear->next = front;
            delete temp;
        }
    }

    void display() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else {
            Node* current = front;
            cout << "Queue: ";
            do {
                cout << current->data << " ";
                current = current->next;
            } while (current != front);
            cout << endl;
        }
    }
};

int main() {
    CircularQueue<int> q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    q.dequeue();
    q.display();
}
