
// Creare lista email
const listMail = [`luca@gmail.com`, `francesco@gmail.com`, `michele@gmail.com`];

//Chiedere all'utente di inserire l'email
const userMail = prompt(`Inserisci la tua email`);

//Verificare se è presente l'email utente nella lista che abbiamo e stampare l'esito della verifica
let isFound = false;

for (let i = 0; i < listMail.length; i++) {
    const curMail = listMail[i];
    console.log(i, userMail, curMail, isFound);

    if (curMail === userMail) {
        isFound = true;
        break;
    } 
    
}
console.log(isFound);

if(isFound) {
    console.log("Email trovata, puoi entrare");
} else {
    console.log("Non sei registrato");
}