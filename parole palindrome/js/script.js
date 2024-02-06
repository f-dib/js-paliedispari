let resultElement = document.querySelector("#result");
let parola;

function inspect() {

    
    let text = false;
    
    while (text == false) {
        
        parola = prompt('Inserisci una parola palindroma');

        if (!isNaN(parola)){
        
            alert('Hai inserito un valore non valido riprova');
        
        } else {
            
            for (let i = 0; i < Math.floor(parola.length / 2); i++){
            
                console.log(parola[i]);
                console.log(parola[parola.length - (1 + i)]);
    
                if (!(parola[i] == parola[parola.length - (1 + i)])){
                    
                    return ('la parola non è palindroma');
                
                }
    
            }
    
            text == true;
            return ('la parola è palindroma');      

        }

    }


}

console.log(inspect());