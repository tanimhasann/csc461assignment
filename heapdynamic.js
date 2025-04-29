const heapDynamicArray = () => {
    const size = Number(prompt("Enter array size:"));
    const array = new Array(size);
  
    for (let i = 0; i < size; i++) {
      array[i] = i * 2;
    }
  
    console.log(array.join(" "));
  };
  
  heapDynamicArray();
  