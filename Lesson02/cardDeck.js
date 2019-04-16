let suits = ["hearts", "diamonds", "clubs", "spades"];
let faces = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

let lenS = suits.length;
let lenF = faces.length;

// loop through suits
for (let i = 0; i < lenS; i++){
  let curSuit = suits[i];
  // for each suit, loop through face values and log concat
  for (let j = 0; j < lenF; j++){
    let curFace = faces[j];

    console.log(curFace + " of " + curSuit);
  }
}
