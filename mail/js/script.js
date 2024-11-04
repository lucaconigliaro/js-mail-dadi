
// Creare lista email
const listMail = [`luca@gmail.com`, `francesco@gmail.com`, `michele@gmail.com`];

//Chiedere all'utente di inserire l'email
userMail = prompt(`Inserisci la tua email`);

//Verificare se è presente l'email utente nella lista che abbiamo e stampare l'esito della verifica
let message;

for (let i = 0; i < listMail.length; i++) {
    const curMail = listMail[i];

    if (curMail === userMail) {
        message = (`Utente registrato`);
        break;
    } else {
        message = (`Utente non registrato`);
    }
}
console.log(message)
