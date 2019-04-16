const minAge = 16;

let fname = "Baby";
let lname = "Driver";
let age = 3;

if (age >= minAge) {
  console.log(fname + " " + lname + " can drive and has driven for " + eval(age - minAge) + " years.");
}

else{
  for(let i=5; i>0; i--){
    console.log(i);
  }
}
