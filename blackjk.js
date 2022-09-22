let carde = [];

let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl)
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
console.log(carde);	

let player ={
	name : "chandan",
	chips : 125
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" +player.chips;

function getRandomCard(){
	let randomCard = Math.floor(Math.random() * 13);

if(randomCard > 10){
	return 10;
}
else if(randomCard === 1){
	return 11;
}
else{
	return randomCard;
}
}

function startGame(){
	 isAlive = true;
	let firstCard = getRandomCard(); 
let secondCard = getRandomCard();
 carde = [firstCard , secondCard];

 sum = firstCard + secondCard;
	renderGame();
}

function renderGame(){

cardsEl.textContent = "cards :" ;

for( let i =0; i< carde.length; i++ ){

	cardsEl.textContent += carde[i]+ " ";
}
sumEl.textContent = "sum :"+ sum;

if(sum < 20 ){
	message = "Do you want to draw a new card";
}

else if(sum === 21){
		message = "whooo! yo've got blackjack! ";
		hasBlackJack = true;

}else{
	message ="you are out of game";
	isAlive = false;
}

messageEl.textContent = message;
}

function newCard(){

	if(isAlive === true && hasBlackJack === false){

	console.log("Drawing the new card from the deck!")
	let card = getRandomCard();
	sum+=card;
	carde.push(card);
	//console.log(carde);

	renderGame();	
	}
	
}
