function pam(array, callback) {
  const result = [];          

  for (let i = 0; i < array.length; i++) {
    const newValue = callback(array[i], i, array); 
    result.push(newValue);         
  }

  return result;                
}