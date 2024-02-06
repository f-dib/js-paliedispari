let resultElement = document.querySelector("#result");

function insertNumber() {
    let myNumber;

    do {
        
        myNumber = prompt('Inserisci un numero da 1 a 5');

        if (isNaN(myNumber) || (myNumber < 1 || myNumber > 5)) {
            
            alert('Il valore inserito non è valido riprova');

        } else {

            myNumber = Number(myNumber);
            return myNumber;

        } 

    } while (!(myNumber >= 1 && myNumber <= 5));
}

function pcNumber() {

    let randomNumber = (Math.floor(Math.random() *5) + 1);

    return randomNumber;

}


function sum (a, b) {
    let sum = a + b;

    return sum;
}


///////////////////////////////////////////////////////////////////////////


let evenodd;

do {

    evenodd = prompt('Pari o Dispari?');

    if (!isNaN(evenodd) || !(evenodd === 'pari' || evenodd === 'dispari')) {
            
        alert('Il valore inserito non è valido riprova');

    } else {

        console.log(evenodd)

    } 

} while (!(evenodd == 'pari' || evenodd == 'dispari'));



let userNumber = insertNumber();
let ranNumber = pcNumber();
console.log(userNumber);
console.log(ranNumber);
sum(userNumber, ranNumber);
console.log(sum(userNumber, ranNumber));
let pari;
let dispari;

if (sum(userNumber, ranNumber) % 2 == 0){
    pari = ('il numero è pari');
} else {
    dispari = ('il numero è dispari');
}

let vittoria;
let sconfitta;

if (sum(userNumber, ranNumber) % 2 == 0 && evenodd == 'pari'){
    vittoria = ('bravo è pari, hai indovinato');
} else if (sum(userNumber, ranNumber) % 2 !== 0 && evenodd == 'dispari') {
    vittoria = ('bravo è dispari, hai indovinato');
} else {
    sconfitta = ('sei una merda, hai perso');
}

resultElement.innerHTML = `Il numero da te scelto è ${userNumber}, il computer ha scelto ${ranNumber}, ${pari || dispari}, ${vittoria || sconfitta}`;