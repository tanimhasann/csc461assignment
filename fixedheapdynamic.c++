#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter fixed size of array: ";
    cin >> n;

    int* arr = new int[n];  // Heap allocation with fixed size

    for (int i = 0; i < n; ++i) 
    {
        arr[i] = i + 10;
    }

    cout << "Array elements: ";
    for (int i = 0; i < n; ++i) 
    {
        cout << arr[i] << " ";
    }

    delete[] arr;  // Free heap memory
    return 0;
}
