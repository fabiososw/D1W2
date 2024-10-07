/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali datatype sono:
STRING: I valori string sono valori di tipo letterale, sono contornati da apici che possono essere doppi, singoli o obliqui, non rappresentano un valore numerico anche se sono numeri ma solo un testo.
NUMBER: Rappresenta un valore numerico, si scrive senza apici.
BOOLEAN: può essere un risultato di un operazione che ha come possibili output solo vero o falso (true/false)
UNDEFINED: Assenza di valore, è preferibile non utilizzarla manualmente ma solo lasciarla dare ai sistemi come possibile risposta in caso di errore in modo da differenziarla da NULL
NULL: Assenza di valore, è preferibile utilizzarla quando si desidera avere un valore nullo. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Fabio";
console.log (myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
let numero3 = numero1 + numero2;
console.log (numero3);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
{ const myName = ("D'Angelo")
console.log (myName) }
// ERRORE Uncaught SyntaxError: Identifier 'myName' has already been declared (at D1.js:57:7) 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4 - x
console.log (y)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = ("john");
let name2 = ("John");
let uguaglianza = name1 === name2
console.log(uguaglianza)
let name3 = name2.toLowerCase();
{ let uguaglianza = name1 === name3
console.log(uguaglianza) }
