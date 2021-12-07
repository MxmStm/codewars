function find_average(array) {
    // your code here
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
      count ++;
      sum += array[i];
    }
    
    return (array.length === 0) ? 0 : sum / count;
}
