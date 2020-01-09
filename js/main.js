console.log("Up and running!");


const cards = [
	{ 
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
	},
		{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
		},
			{
			rank: 'king',
			suit: 'hearts',
			cardImage: 'images/king-of-hearts.png'
			},
				{
				rank: 'king',
				suit: 'diamonds',
				cardImage: 'images/king-of-diamonds.png'
				}

];

let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	alert("You found a match!");
	} 
		else {
		  alert("Sorry, try again.");
		}
};

function flipCard(cardId) {
	console.log( "User flipped "+ cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);

	//let cardImage = [cards.cardImage];
	//let suit = (cards.suit);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

		};

flipCard(0);
flipCard(1);

checkForMatch();




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


//let cardOne = "queen1";
//let cardTwo = "queen2";
//let cardThree = "king1";
//let cardFour = "king2";

// const cards = [ "queen" , "queen" , "king" , "king"];


//function checkForMatch() {
//	if (cardsInPlay[0] === cardsInPlay[1]) {
  //console.log("You found a match!");
//} else {
  //console.log("Sorry, try again.");
//}
//};

//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);


//let cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);
