let x = prompt("Enter your first number:");
let y = prompt("Enter your second number:");

alert(`${x} squared equals ${squareIt(x)} \n${x} times ${y} equals ${ multiplyIt(x, y)}`);

function squareIt(num){
  return x * x;
}

function multiplyIt(num1, num2){
  return num1 * num2;
}
