/* Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string. */

let a = 4;
let b = 10;

function addBinary(a, b) {
  let bin = "";
  let c = a + b;
  while (c > 0) {
    bin = (c % 2) + bin;
    c = Math.floor(c / 2);
  }
  return bin;
}
console.log("il numero binario di 14 è:", addBinary(a, b));

/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */

let frase = "The quick brown fox jumps over the lazy dog";

function isPangram(
  string,
  array = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
) {
  let check = true;
  string = string.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    if (!string.includes(array[i])) {
      check = false;
      break;
    }
  }
  return check;
}

console.log(isPangram(frase));


/* trovare in un'array solo le persone con ruolo dev */


const ruolipersone = [
  {
    nome: "davide",
    ruolo: "dev",
  },
  {
    nome: "robert",
    ruolo: "admin",
  },
  {
    nome: "gigi",
    ruolo: "dev",
  },
  {
    nome: "giovanni",
    ruolo: "creator",
  },
  {
    nome: "matteo",
    ruolo: "niente",
  },
];
/* metodo 1 */
let ruoliDev = [];
ruolipersone.forEach(dev =>{
  if(dev.ruolo === "dev"){
    ruoliDev.push(dev);
  }
})

console.log(ruoliDev, "metodo 1");

/* metodo 2 */

const ruolideDue = ruolipersone.filter((p) => p.ruolo === "dev");

console.log(ruolideDue , "metodo 2");


/* metodo 3 */
let ruoloDevTre = [];
for(let i = 0; i < ruolipersone.length; i++){
  if(ruolipersone[i].ruolo === "dev"){
    ruoloDevTre.push(ruolipersone[i]);
  }
}

console.log(ruoloDevTre, "metodo 3")