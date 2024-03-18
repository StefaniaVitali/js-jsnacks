console.log('Ciao!')

/*JSNACK 1:
 L’utente inserisce due numeri in successione, con due prompt.
 Il software stampa il maggiore*/
console.log('jsnack1');

const cardElement1 = document.getElementById('jsnack1-card');

//chiedere all'utente il primo numero con prompt
const num1 = parseInt(prompt ('Scegli un numero')); //Number
console.log(num1);
//chidere all'utente il secondo numero con prompt
const num2 = parseInt(prompt ('Scegli un altro numero')); //Number
console.log(num2);

//stampare il maggiore:
//SE num1 è più grande di num2 stampa num 1
if (num1 > num2){
    console.log(num1)
    cardElement1.innerHTML = 'Il numero più grande è ' + num1
   
//ALTRIMENTI stampa num2    cardElement1.innerHTML = 'Il numero più grande è ' + num1 ;
} else {
    console.log(num2)
    cardElement1.innerHTML = 'Il numero più grande è ' + num2 
};

// FINE ESERCIZIO 1----------------------------------------------------------------------

/*JSNACK 2:
 L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/

console.log('jsnack2');

const cardElement2 = document.getElementById('jsnack2-card');

//chiedere all'utente la prima parola
const parola1 = prompt('ora scegli una parola'); //string
console.log(parola1);
//chiedere all'utente la seconda parola
const parola2 = prompt("Ora scegli un'altra parola"); //string
console.log(parola2);

//stampare la parola più corta, poi la più lunga
//SE la lunghezza di parola1 è minore di parola2 stampa parola 1 
if(parola1.length < parola2.length){
    console.log(parola1);
    cardElement2.innerHTML = 'la parola più corta è: ' + parola1;

  //ALTRIMENTI stampa parola2  
} else {
    console.log(parola2)
    cardElement2.innerHTML = 'la parola più corta è: ' + parola2
};

// FINE ESERCIZIO 2----------------------------------------------

/*JSNACK 3
 Il software deve chiedere per 10 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.*/

console.log('js-snack3');

const cardElement3 = document.getElementById('jsnack3-card');

//Creare una costante con il numero di iterazioni utente
const numIterazioni = 10;

//creare un arrey vuoto da popolare con le iterazione dell'utente
const numbers = [];

//fare partire il ciclo for
// FINCHE' la variabile è <= 10 chiedi all'utente tramite prompt un numero
for (let i = 0; i < numIterazioni; i++){
    let randomNum = parseInt(prompt('digita un numero')) //number
    console.log(i+1, randomNum)
    //pushiamo il numero ottenuto nell'array
    numbers.push(randomNum)
    
}
// e aggiungi questo numero nell'array
console.log(numbers);
//siamo fuori dal primo ciclo for

//se volessi validare i dati


//sommare i valori dell'array
//somma ogni valore dell'array per tutta la lunghezza dell'array
let sumNumbers = 0

for(let i = 0; i < numbers.length; i++){
    sumNumbers += numbers[i]
   
}

console.log(sumNumbers)

if (randomNum = !isNaN){
    cardElement3.innerHTML = 'la somma dei valori scelti è: ' + sumNumbers
} else {
    cardElement3.innerHTML = 'I dati inseriti non sono corretti'
}


//stampare il risultato della somma dei valori dell'arrey

//COMMENTO ALL'ESERCIZIO JSNACK: il controllo di randomNum = !isNaN si 
//poteva fare direttamente nel ciclo for, per cui se il dato non è un numero
//il valore non viene pushiato nell'array

// FINE ESERCIZIO 3-------------------------------------------------


/*JSNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

const cardElement4 = document.getElementById('jsnack4-card');

// creazione array con nomi invitati alla festa

const invitati = ['Marco', 'Paola', 'Francesco', 'Pippo', 'Manuela']; //arrey
//chiedere tramite promt il nome all'utente
const askName = prompt('Scrivi il tuo nome'); //string

//verificare se il nome è nella lista

if(invitati.includes(askName)){
  console.log('Puoi partecipare')
  cardElement4.innerHTML = 'Puoi partecipare!'
} else{
  console.log('Non sei invitato')  
  cardElement4.innerHTML = 'Ci spiace, non sei stato invitato!'
}
//dire se può partecipare o no alla festa

// FINE ESERCIZIO 4-------------------------------------------------

/*JSNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/

