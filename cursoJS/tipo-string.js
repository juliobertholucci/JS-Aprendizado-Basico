const estudo = 'Node JS'; //podemos utilizar aspas simples ou duplas
const nome = "Julio";

const AspasDuplas = 'Meu lema é "Bom!"' //para escrever com aspas duplas utilize aspas simples
const AspasSimples = "Meu lema é 'Bom!'" //para escrever com aspas simpels utilize aspas duplas

//template de string
const concatenacao = `meu nome é ${nome} e eu estudo ${estudo}`;
console.log(concatenacao);

const senha = 'HashMD5' + nome.toLowerCase(); //utilizamos concatenação simples para realizar funções.
console.log(senha);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

console.log("---------------");