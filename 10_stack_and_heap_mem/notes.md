- stack -> primitive
- heap -> non- primitive 

- In JavaScript, primitive data types (like numbers and booleans) are stored directly in the call stack when variables are declared. However, objects and complex data types (arrays, functions, objects) are stored in the heap, and references to them are stored in the call stack or in other objects.

It's important to note that JavaScript engines handle memory management and optimization differently. Modern JavaScript engines, like V8 (used in Chrome and Node.js), implement sophisticated memory management techniques to optimize performance and memory usage. These engines use techniques like garbage collection to reclaim memory from objects that are no longer in use.