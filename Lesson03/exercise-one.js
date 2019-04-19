//declare empty string for result
let myString = '';

//create array min 5 strings
let myArray = ['This', 'is', 'a', 'practice', 'array'];
console.log(myArray);

//add element end of array
myArray.push('script');
console.log(myArray);

//remove third element
myArray.splice(2,1);
console.log(myArray);

//Create a string from elements and comma separate
myString = myArray.join(',');
console.log(myString);
