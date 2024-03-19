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

//COMMENTO ALL'ESERCIZIO JSNACK2: se l'utente non scrive niente il codice si blocca

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

//COMMENTO ALL'ESERCIZIO JSNACK2: il controllo di randomNum = !isNaN si 
//poteva fare direttamente nel ciclo for, per cui se il dato non è un numero
//il valore non viene pushiato nell'array

// FINE ESERCIZIO 3-------------------------------------------------


/*JSNACK 4
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/

console.log('js-snack4')
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

//COMMENTO ALL'ESERCIZIO JSNACK4: come fare se l'utente scrive il nome tutto minuscolo o tutto maiuscolo?

// FINE ESERCIZIO 4-------------------------------------------------

/*JSNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/

console.log('js-snack5')

const cardElement5 = document.getElementById('jsnack5-card');

//creare un array vuoto
const arrDispari = []; //array

//costante iterazioni
let arrIter = 6;

//Chiedi per 6 volte all’utente di inserire un numero -> ciclio for

for(let i = 0; i < arrIter; i++){

    //chiedere il numero e trasformare la stringa in numero
    const numEs5 = parseInt(prompt('Digita un numero')); //numero
    console.log(numEs5);

    //calcolare il resto
    //creare una costante
    const resto2 = numEs5 % 2

    //SE resto2 è dispari (!== 0) pushare nell'array
    if(resto2 !==0) { 
        arrDispari.push(numEs5)
    }

}

//stampare i valori dell'array
console.log(arrDispari);
cardElement5.innerHTML = 'i numeri dispari scelti sono ' + arrDispari


// FINE ESERCIZIO 5-------------------------------------------------

/*JSNACK 6
Fate generare un numero random da 0 a 10 al computer,
 e chiedete all'utente di inserire un suo numero. 
 Se il numero scelto dall'utente è uguale al numero del computer 
 informate l'utente che ha vinto, altrimenti ha perso.*/

console.log('js-jsnack6');

const cardElement6 = document.getElementById('jsnack6-card');
const inputElement6 = document.getElementById('numeroJsnack6');
const buttonElement6 = document.getElementById('submit6');

//Fate generare un numero random da 0 a 10 al computer:
//creare una costante 

const maxValue = 10;
let randomValue = Math.floor((Math.random() * maxValue) + 1) //number
console.log(randomValue);
console.log(inputElement6, buttonElement6); 

buttonElement6.addEventListener('click', function(){
    //recuperare il numero dall'input
    const numEs6 = parseInt((inputElement6.value)) //number
    console.log(numEs6, typeof numEs6)
    
    //SE numEs6 === a randomValue
    if (numEs6 === randomValue){
        //stampiamo hai vinto
        console.log('HAI VINTO')
        cardElement6.innerHTML = 'HAI VINTO!'

     //ALTRIMENTI
    }  else {
         // stampiamo hai perso
        console.log('HAI PERSO')
        cardElement6.innerHTML = 'HAI PERSO!'
    }  
    
});

// FINE ESERCIZIO 6-------------------------------------------------

/*JSNACK 7
Scrivere un programma che stampi la tabellina del 2, 
fino al numero 1000.
Modificate poi il programma in modo che 
venga chiesto all'utente il numero massimo consentito, 
e stampare tutta la tabellina del 2 fino al numero inserito.*/

console.log('jsnack7')

const inputElement7 = document.getElementById('numeroJsnack7');
const buttonElement7 = document.getElementById('submit7');

// tabellina del 2 fino a 1000
   //creare variabile numero da dividere per 2
let numTabellina2 = 1000
console.log(numTabellina2);
   //creare variabile resto %2
// const tabellina2 = numTabellina2 % 2

//per 1000 volte controllare 
for (let i = 0; i <numTabellina2; i++){
   
    //se 1000 è divisibile per due 
   if(i % 2 ===0){
     console.log(i)
   }

}

//invocare il bottone al click
buttonElement7.addEventListener('click', function(){
   
    //recuperare il numero dall'input
    //chiedere all'utente di scegliere il valore di numTabellina 2
    numTabellina2 = parseInt(inputElement7.value); //number
    console.log(numTabellina2, typeof numTabellina2);

    for (let i = 0; i <numTabellina2; i++){
   
        //se 1000 è divisibile per due 
       if(i % 2 ===0){
         console.log(i)
       }
    
    }

});

//COMMENTO ALL'ESERCIZIO JSNACK7:
//Avendo scritto il ciclo for 2 volte uguale, 
//esiste un modo per accorpare tutto una volta sola?

// FINE ESERCIZIO 7-------------------------------------------------

/*JSNACK 8
Fate generare un numero random da 0 a 10 al computer, 
e chiedete all'utente di inserire un suo numero. 
Se il numero scelto dall'utente è uguale al numero del computer 
informate l'utente che ha vinto, altrimenti ha perso. 
A questo punto fate giocare l'utente, 
fintanto che non vince la partita contro il PC :)*/

console.log('jsnack8');

const cardElement8 = document.getElementById('jsnack8-card');

//Generare un numero random da 0 a 10 al compute
const maxValue8 = 10;
let numRandom8 = Math.floor((Math.random() * maxValue8) +1) //number
console.log(numRandom8);


// PER un numero max di 10 volte 
for(let i = 0; i<=maxValue8 ; i++){  
    
    //chiedere all'utente un numero per cui
    let numEs8 = parseInt(prompt('Indovina il numero da 0 a 10')) //number
    console.log(numEs8)
     
     //SE il numero è = a numRandom8 
    if (numEs8 === numRandom8){

        //stampare che ha vinto 
        console.log('hai vinto')
        alert('hai vinto')
        cardElement8.innerHTML = 'Bravo hai indovinato il numero era' + numRandom8
        //fine ciclo
        break

      //ALTRIMENTI stampare che ha perso
    } else {
        parseInt(prompt('Hai perso! Riprova, sarai più fortunato!'))
    }  
 
}

//COMMENTO ALL'ESERCIZIO JSNACK8:


// FINE ESERCIZIO 7-------------------------------------------------

/*JSNACK 10
Scrivere un programma a cui venga chiesto all'utente 
di inserire numeri uno dopo l'altro.
Quando l'utente scriverà 2 volte consecutive 
lo stesso numero allora il programma dovrà terminare.*/












 










