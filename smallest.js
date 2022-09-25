function smallestNumber (numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
      const index = i;
      const element = numbers[index];
      if(element < smallest){
          // console.log(index, element);
          smallest = element;
      }
  }
  return smallest;
  }
  const myNumbers = [2, 1, 3, 4 ];
  const smallNumbers = smallestNumber(myNumbers);
  console.log( 'Small Number', smallNumbers); 


  // Print: Small Number 1