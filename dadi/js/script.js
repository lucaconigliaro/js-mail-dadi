// Generiamo un numero random per ciascun giocatore
const player = Math.floor(Math.random() * 6) + 1;
console.log(`Player1 ${player}`);

const cpu = Math.floor(Math.random() * 6) + 1;
console.log(`Player2 ${cpu}`);

//Diamo la condizione per capire chi vince o se c'è un pareggio

let message

if(player > cpu) {
    message = ('Player1 win');
} else if (player < cpu) {
 message = ('Player2 win');
} else {
    message = ('The match ended in a draw');
}

 console.log(message)