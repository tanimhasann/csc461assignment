let size = parseInt(prompt("Enter array size:"));
let arr = new Array(size);  // dynamic allocation, fixed size

for (let i = 0; i < size; i++) {
  arr[i] = i * 2;
}

console.log("Array:", arr);
