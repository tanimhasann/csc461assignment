const createDynamicStackArray = () => {
    const length = Number(prompt("How many elements?"));
    const data = [];
  
    for (let index = 0; index < length; index++) {
      data.push(index * 2);
    }
  
    data.forEach((value) => console.log(value));
  };
  
  createDynamicStackArray();
  