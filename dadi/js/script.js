let player
let cpu

// Generiamo un numero random per ciascun giocatore
player = Math.floor(Math.random() * 6) + 1;
console.log(`Player1 ${player}`);

cpu = Math.floor(Math.random() * 6) + 1;
console.log(`Player2 ${cpu}`);

//Diamo la condizione per capire chi vince o se c'è un pareggio

let winner

if(player > cpu){
    winner = ('Player1 win');
} else if (player < cpu) {
 winner = ('Player2 win');
} else {
    winner = ('The match ended in a draw');
}

 console.log(winner)