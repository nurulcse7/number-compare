// Max and Min Calculation  (VR 21- 6 03:30)
// 01. using function ( 3 number/parameter with function)

const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('Jim will get the cake');
}
else if (dela > jim && dela > chinku){
    console.log('Dela will eat cake in this bela');
}
else{
    console.log('Chinku will get the cake');
} // print: Chinku will get the cake

// 02. using Math.max and Math.min 
const result = [69, 97, 99];
console.log(Math.max(69, 97, 99)) // print: 99
console.log(Math.min(69, 97, 99)) // print: 69
