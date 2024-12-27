#include <iostream>
using namespace std;

class Node
{
public:
    Node *right;
    Node *left;
    int data;
    Node(int _data)
    {
        right = NULL;
        left = NULL;
        data = _data;
    }
};
class Tree
{
private:
    Node *root;
    Node *getNodeByData(int data);
    Node *getParent(Node *n);
    Node *getMaxRight(Node *n);
    Node *getMaxLeft(Node *n);
    void displayTree(Node *n);

public:
    Tree() : root(NULL) {}
    void add(int data);
    int findDataInTree(int data);
    int getMaxRightByData(int data);
    int getMinValue(int data);
    int getParentData(int data);
    void removeNode(int data);
    void displayTreeUser();
};

void Tree::displayTreeUser()
{

    displayTree(root);
}
void Tree::displayTree(Node *n)
{
    if (n == NULL)
        return;
    displayTree(n->left);
    cout << n->data << " --";
    displayTree(n->right);
}
void Tree::removeNode(int data)
{
    Node *n = getNodeByData(data);
    if (n == NULL)
        throw "Node not found";
    if (n == root)
    {
        if (n->left == NULL && n->right == NULL)
            root = NULL;
        else if (n->left == NULL)
            root = n->right;
        else if (n->right == NULL)
            root = n->left;
        else
        {
            getMaxRight(root->left)->right = n->right;
            root = root->left;
        }
    }
    else
    {
        Node *parent = getParent(n);
        Node *newChild = NULL;
        if (n->left == NULL && n->right == NULL)
            newChild == NULL;
        else if (n->left == NULL)
            newChild = n->right;
        else if (n->right == NULL)
            newChild = n->left;
        else
        {
            getMaxRight(root->left)->right = n->right;
            newChild = n->left;
        }
        if (parent->left == n)
            parent->left = newChild;
        else
            parent->right = newChild;
    }
    delete n;
}
Node *Tree::getNodeByData(int data)
{
    Node *curr = root;
    while (curr != NULL)
    {
        if (data == curr->data)
            return curr;
        else if (data > curr->data)
            curr = curr->right;
        else
        {
            curr = curr->left;
        }
    }
    return NULL;
}
int Tree::findDataInTree(int data)
{
    if (getNodeByData(data))
        return 1;
    else
        return 0;
}
void Tree::add(int data)
{
    Node *newNode = new Node(data);
    if (root == NULL)
    {
        root = newNode;
    }
    else
    {
        Node *curr = root;
        Node *prev = NULL;
        while (curr != NULL)
        {
            prev = curr;
            if (data > curr->data)
                curr = curr->right;
            else
            {
                curr = curr->left;
            }
        }
        if (prev->data > data)
            prev->left = newNode;
        else
        {
            prev->right = newNode;
        }
    }
}
Node *Tree::getParent(Node *n)
{
    Node *curr = root;
    while (curr != NULL)
    {
        if (n == curr->right || n == curr->left)
        {
            return curr;
        }
        else if (n->data > curr->data)
            curr = curr->right;
        else
            curr = curr->left;
    }
    return NULL;
}
Node *Tree::getMaxRight(Node *n)
{
    Node *curr = n;
    // if no right curr will be returned
    while (curr->right != NULL)
        curr = curr->right;
    return curr;
}
int Tree::getParentData(int data)
{
    Node *node = getNodeByData(data);
    if (node == root)
        throw "The root has no parent";
    if (node != NULL)
    {
        Node *curr = root;
        if (curr->right == node || curr->left == node)
            return curr->data;
    }
    throw "Data hasnot been found";
}
int Tree::getMaxRightByData(int data)
{
    Node *curr = getNodeByData(data);
    if (curr == NULL)
    {
        throw "Node Not found";
    }
    else
    {
        return getMaxRight(curr)->data;
    }
}
Node *Tree::getMaxLeft(Node *n)
{
    Node *curr = n;
    while (curr->left != NULL)
        curr = curr->left;
    return curr;
}
int Tree::getMinValue(int data)
{
    Node *n = getNodeByData(data);
    if (n == NULL)
        throw "NUll";
    else
    {

        return getMaxLeft(n)->data;
    }
}
int main()
{
    Tree t;

    // Test Case 1: Adding and Displaying Nodes
    cout << "Test Case 1: Adding and Displaying Nodes" << endl;
    t.add(70);
    t.add(50);
    t.add(90);
    t.add(20);
    t.add(60);
    t.add(80);
    t.add(100);
    t.displayTreeUser();
    cout << endl
         << endl;

    // Test Case 2: Removing a Leaf Node
    cout << "Test Case 2: Removing a Leaf Node (20)" << endl;
    t.removeNode(20);
    t.displayTreeUser();
    cout << endl
         << endl;

    // Test Case 3: Removing a Node with One Child
    cout << "Test Case 3: Removing a Node with One Child (90)" << endl;
    t.removeNode(90);
    t.displayTreeUser();
    cout << endl
         << endl;

    // Test Case 4: Removing a Node with Two Children
    cout << "Test Case 4: Removing a Node with Two Children (70)" << endl;
    t.removeNode(70);
    t.displayTreeUser();
    cout << endl
         << endl;

    // Test Case 5: Finding Data in the Tree
    cout << "Test Case 5: Finding Data in the Tree" << endl;
    cout << "Find 80: " << t.findDataInTree(80) << endl; // Expected: 1
    cout << "Find 25: " << t.findDataInTree(25) << endl; // Expected: 0
    cout << endl;

    // Test Case 6: Getting Parent Data
    cout << "Test Case 6: Getting Parent Data" << endl;
    try
    {
        cout << "Parent of 60: " << t.getParentData(60) << endl;   // Expected: 50
        cout << "Parent of 100: " << t.getParentData(100) << endl; // Expected: 80
    }
    catch (const char *e)
    {
        cout << e << endl;
    }
    cout << endl;

    // Test Case 7: Getting Max Right
    cout << "Test Case 7: Getting Max Right" << endl;
    try
    {
        cout << "Max Right of 50: " << t.getMaxRightByData(50) << endl; // Expected: 60
        cout << "Max Right of 80: " << t.getMaxRightByData(80) << endl; // Expected: 100
    }
    catch (const char *e)
    {
        cout << e << endl;
    }
    cout << endl;

    // Test Case 8: Getting Min Value
    cout << "Test Case 8: Getting Min Value" << endl;
    try
    {
        cout << "Min Value of 70: " << t.getMinValue(70) << endl;   // Expected: 50
        cout << "Min Value of Root: " << t.getMinValue(50) << endl; // Expected: 50
    }
    catch (const char *e)
    {
        cout << e << endl;
    }
    cout << endl;

    // Test Case 9: Removing the Root Node
    cout << "Test Case 9: Removing the Root Node (50)" << endl;
    t.removeNode(50);
    t.displayTreeUser();
    cout << endl
         << endl;

    // Test Case 10: Removing Non-existent Node
    cout << "Test Case 10: Removing Non-existent Node (25)" << endl;
    try
    {
        t.removeNode(25);
    }
    catch (const char *e)
    {
        cout << e << endl; // Expected: Node not found
    }
    cout << endl;

    // Test Case 11: Handling an Empty Tree
    cout << "Test Case 11: Handling an Empty Tree" << endl;
    t.removeNode(60);
    t.removeNode(80);
    t.removeNode(100);
    cout << "Tree after removing all nodes: ";
    t.displayTreeUser(); // Expected: No output
    cout << endl
         << endl;

    // Test Case 12: Adding Duplicate Values
    cout << "Test Case 12: Adding Duplicate Values (80)" << endl;
    try
    {
        t.add(80);
        t.add(80); // Attempting to add a duplicate
        t.displayTreeUser();
    }
    catch (const char *e)
    {
        cout << e << endl;
    }
    cout << endl;

    return 0;
}
