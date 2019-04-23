//create array w/at least 5 strings
let myArray = ['hot dogs', 'french fries', 'goldfish', 'strawberries', 'blueberries', 'broccoli'];

//get array length
let arrLength = myArray.length;

//iterate with for loop
for(let i=0; i<arrLength; i++){
   //console log each element plus index, sep with comma
  console.log(`${i},${myArray[i]}`);
}
