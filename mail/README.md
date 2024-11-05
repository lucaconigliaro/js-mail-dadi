# Mail
_Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON USARE INCLUDES!_

---

### DATI
- Lista email;
- Chiedere all'utente di inserire l'email.


### ESECUZIONE LOGICA

  trovato = false.
- Per ogni email della lista
  Se l'email dell'utente è uguale all'email corrente 
     trovata = true
  


### OUTPUT
if(trovato) {
    Ok, puoi entrare
} else {
    Non sei registrato
}