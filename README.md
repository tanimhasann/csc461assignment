# csc461assignment
🔹 Fixed-Size Arrays (Static at Compile Time)
The size of the array is determined during compilation and cannot be altered afterward.

In C++, memory is typically allocated on the stack.

In JavaScript, arrays initialized with fixed values (e.g., [1, 2, 3]) resemble this behavior.

Although the size remains constant, the elements within the array can still be modified.

🔹 Stack-Allocated Dynamic Arrays
The array size is known only during program execution, not compile time.

In C++, variable-length arrays (VLAs) on the stack allow this pattern (e.g., int n; cin >> n; int arr[n];).

In JavaScript, a similar effect is achieved with new Array(n) where n is defined at runtime.

Suitable when the required size is determined based on user input or runtime data.

🔹 Fixed-Size Heap Arrays
These arrays are allocated on the heap and have a predefined size.

In C++, created using new int[5], which must later be manually deallocated with delete[].

JavaScript's new Array(5) mimics this by reserving space in memory, though the array is still managed automatically.

🔹 Fully Dynamic Heap Arrays
Stored in the heap and capable of changing size during the program’s execution.

C++ uses std::vector, which resizes automatically and handles memory management internally.

JavaScript arrays are inherently dynamic, supporting methods like .push() and .pop() for resizing on the fly.
