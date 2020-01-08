console.log("Up and running!");

//let cardOne = "queen1";
//let cardTwo = "queen2";
//let cardThree = "king1";
//let cardFour = "king2";

const cards = [ "queen" , "queen" , "king" , "king"];

let cardsInPlay = [];



function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);


//let cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

//	if (cardsInPlay.length === 2 ) {
 // Code to be executed if condition1 is true
//} else if (cardsInPlay[0] ? cardsInPlay === 2  alert("You found a match!") : alert("Sorry, try again.") );  {
 // Code to be executed if condition1 is false and condition2 is true
//} else if (condition3) {
 // Code to be executed if condition1 and condition2 are false and condition3 is true
//} else {
// Code to be executed if condition1, condition2, and condition3 are false
//} 

function flipCard(cardId) {
	console.log( "User flipped" + cards[cardId]);

	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(1);

checkForMatch();

console.log(cardsInPlay);