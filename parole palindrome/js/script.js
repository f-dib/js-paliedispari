let resultElement = document.querySelector("#result");
let word;
let result;

/* Creo funzione di controllo delle parole palindrome */ 
function inspect() {

    
    let text = false;
    
    /* Inserisco un ciclo che confronti tutte le lettere della parola inserita */ 
    while (text == false) {
        
        word = prompt('Capisco se la parola che inserisci è palindroma');

        if (!isNaN(word)){
        
            alert('Hai inserito un valore non valido riprova');
        
        } else {
            
            for (let i = 0; i < Math.floor(word.length / 2); i++){
    
                if (!(word[i] == word[word.length - (1 + i)])){
                    
                    result = `La parola non é palindroma`
                    return ('la parola non è palindroma');
                
                }
    
            }
            
            result = `La parola é palindroma`
            text == true;
            return ('la parola è palindroma');      

        }

    }


}


/* Lancio la funzione e ne mostro a schermo il risultato */ 
inspect();

resultElement.innerHTML = `${result}`;