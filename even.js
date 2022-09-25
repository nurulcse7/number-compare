function getEvenNumbersOfAnArray(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      const element = numbers[index];
      if (element % 2 === 0) {
        // console.log(index, element);
        evenNumbers.push(element);
      }
    }
    return evenNumbers;
  }
  const myNumbers = [12, 65, 45, 78, 32, 45, 91];
  const evenNumbers = getEvenNumbersOfAnArray(myNumbers);
  console.log('even number', evenNumbers); 
  
  
  //print: even number [ 12, 78, 32 ]