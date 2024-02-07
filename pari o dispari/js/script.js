let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");

/* Creo le funzioni e ne verifico l'immissione dei dati */ 

/* Inserimento numero da 1 a 5 da parte dell'user */ 
function insertNumber() {
    let myNumber;

    do {
        
        myNumber = prompt('Inserisci un numero da 1 a 5');

        /* Verifico che il dato non sia un numero e che non sia un valore minore di 1 o maggiore di 5,
            e ne prendo il risultato */ 
        if (isNaN(myNumber) || (myNumber < 1 || myNumber > 5)) {
            
            alert('Il valore inserito non è valido riprova');

        } else {

            myNumber = Number(myNumber);
            return myNumber;

        } 

    } while (!(myNumber >= 1 && myNumber <= 5));
}

/* Creo un numero casuale da 1 a 5 e ne prendo il risultato */ 
function pcNumber() {

    let randomNumber = (Math.floor(Math.random() *5) + 1);

    return randomNumber;

}

/* Sommo i due valori in memoria */ 
function sum (a, b) {
    let sum = a + b;

    return sum;
}


///////////////////////////////////////////////////////////////////////////

/* Creo la variabile con la richiesta se Pari o la somma sarà pari o dispari */ 
let evenodd;

do {

    evenodd = prompt('Pari o Dispari?');

    if (!isNaN(evenodd) || !(evenodd === 'pari' || evenodd === 'dispari')) {
            
        alert('Il valore inserito non è valido riprova');

    } 

} while (!(evenodd == 'pari' || evenodd == 'dispari'));


/* Creiamo le variabili ed effettuiamo la somma */ 
let userNumber = insertNumber();
let ranNumber = pcNumber();

sum(userNumber, ranNumber);

let autosum;


/* Verifichiamo se la somma è pari o dispari */ 
if (sum(userNumber, ranNumber) % 2 == 0){
    autosum = ('il somma é pari');
} else {
    autosum = ('il somma é dispari');
}

/* Confermiamo se l'user ha vinto o perso e ne diamo il risultato */ 
let epilogue;

if ((sum(userNumber, ranNumber) % 2 == 0 && evenodd == 'pari') || (sum(userNumber, ranNumber) % 2 !== 0 && evenodd == 'dispari')){
    epilogue = ('Bravo, hai indovinato');
} else {
    epilogue = ('Mi dispace, hai perso');
}

/* Mostriamo a schermo il risultato */ 
titleElement.innerHTML = `Il numero da te scelto è ${userNumber}, il computer ha scelto ${ranNumber}, ${autosum}`;
resultElement.innerHTML = `${epilogue}`;