#include <iostream>
using namespace std;

const int MAX_SIZE = 5;

class QueueArray {
private:
    int front, rear;
    int arr[MAX_SIZE];

public:
    QueueArray() : front(-1), rear(-1) {}

    bool isEmpty() {
        return front == -1;
    }

    bool isFull() {
        return rear == MAX_SIZE - 1;
    }

    void enqueue(int element) {
        if (isFull()) {
            cout << "Queue is full!" << endl;
        } else {
            if (front == -1) front = 0;
            arr[++rear] = element;
        }
    }

    void dequeue() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else {
            cout << "Dequeued: " << arr[front] << endl;
            if (front == rear) {
                front = rear = -1; // Reset queue
            } else {
                front++;
            }
        }
    }

    void display() {
        if (isEmpty()) {
            cout << "Queue is empty!" << endl;
        } else {
            cout << "Queue: ";
            for (int i = front; i <= rear; i++) {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }
};

int main() {
    QueueArray q;
    q.enqueue(10);
    q.enqueue(20);
    q.enqueue(30);
    q.display();
    q.dequeue();
    q.display();
}
