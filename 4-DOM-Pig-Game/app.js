/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying ;//, dice;

init();

//dice = 6;
//dice = Math.floor(Math.random()*6) + 1;
//console.log(dice);

//document.querySelector('#current-'+activePlayer).textContent = dice;

//document.querySelector('#current-'+activePlayer).textContent = '<em>' + dice + '</em>'; // when using textContent the dice value will be coming as em <-- try this out ot understand more

//setter
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';

//getter
//var x = document.querySelector('#score-0').textContent;// to read the value using DOM
//console.log(x);

// using querySelector to change CSS



document.querySelector('.btn-roll').addEventListener('click', function() {

	if(gamePlaying) {
	
	// 1. Random Number
	var dice = Math.floor(Math.random()*6) + 1;

	// 2. Display the result
	var diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-'+ dice + '.png';

	// 3. Update the  round score IF the rolled number was not 1
	if(dice != 1) {
		// Add Score
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore;

	} else {
		// Next Player turn
		

		nextPlayer();

		/*
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.added('active');
		*/
	}

	}
});

document.querySelector('.btn-hold').addEventListener('click', function() {

	if(gamePlaying) {
     	
     	// Add CURRENT score to GLOBAL score
     	scores[activePlayer]  +=  roundScore;

     	// UPDATE the UI   
     	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

     	// Check if Player won the game
     	if (scores[activePlayer] >= 20) {
     		document.querySelector('#name-'+activePlayer).textContent = 'Winner';
     		//console.log(' Player ' + activePlayer + ' wond the game' );

     		document.querySelector('.dice').style.display='none';

     		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     		gamePlaying = false;

     	} else {
     		//Next Player
     	nextPlayer();
     	}  
     	}   	
});


document.querySelector('.btn-new').addEventListener('click', init);




function init() {
	gamePlaying = true;
	scores = [ 0, 0 ];
	roundScore = 0;
	activePlayer = 0;

	document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');





}


function nextPlayer() {

			// Next Player turn
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.added('active');

}































