console.log(5 * 'a'); //Exibirá o resoltado Not a Number (NaN).

console.log(5 * '5'); //O JS tem uma função de conversão implicita, onde tentará converter antes de realizar a operação.

const nome = parseInt('Julio'); //converter valores que não podem ser convertidos para números resultará em NaN
console.log(nome);

const boolean = true; //converter booleanos em parseInt resultará em NaN
console.log(parseInt(boolean));

const boolean2 = false; //porém podemos converter booleanos utilizando Number()
console.log(Number(boolean2));

console.log(Math.sqrt(-1)); //operações matemáticas que não resultam em números reais retornarão NaN

console.log(5 + NaN); //operações onde um dos valores é NaN ou pode ser convertido em um NaN

console.log(Infinity - Infinity); //operações com Infinity (subtração ou divisão)

console.log('--------------');

const numero = 10;
const Name = 'Ana';

console.log(Number.isNaN(Name)); //utilziar o método Number.isNaN só irá retornar NaN se o objeto for NaN explicitamente
console.log(Number.isNaN(numero));
console.log(Number.isNaN(NaN));

console.log('--------------');

console.log(isNaN(numero));
console.log(isNaN(Name)); //utilizar o método isNaN retornará NaN para qualquer objeto que seja NaN



