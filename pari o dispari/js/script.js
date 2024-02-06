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

if (sum(userNumber, ranNumber) % 2 == 0){
    console.log('il numero è pari');
} else {
    console.log('il numero è dispari');
}

if (sum(userNumber, ranNumber) % 2 == 0 && evenodd == 'pari'){
    console.log('Bravo è pari, hai indovinato');
} else if (sum(userNumber, ranNumber) % 2 !== 0 && evenodd == 'dispari') {
    console.log('Bravo è dispari, hai indovinato');
} else {
    console.log('Sei una merda, hai perso');
}