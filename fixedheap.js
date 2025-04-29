const fixedHeapArray = () => {
    const size = Number(prompt("Enter fixed array size:"));
    const arr = new Array(size);  // Fixed-size heap array
  
    for (let i = 0; i < size; i++) {
      arr[i] = i + 10;
    }
  
    console.log("Array elements:", arr.join(" "));
  };
  
  fixedHeapArray();
  