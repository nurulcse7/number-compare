function biggestNumber (numbers){
    let biggest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
      const index = i;
      const element = numbers[index];
      if(element > biggest){
          // console.log(index, element);
          biggest = element;
      }
  }
  return biggest;
  }
  const myNumbers = [2, 1, 3, 4 ];
  const bigNumbers = biggestNumber(myNumbers);
  console.log( 'Biggest Number', bigNumbers); 


  // Print: Biggest Number 4