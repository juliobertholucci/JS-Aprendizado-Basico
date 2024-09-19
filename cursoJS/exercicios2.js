
//Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

const string = 'aaa';
console.log(string.length); //conta a quantidade de caracteres
console.log(string.toUpperCase());

//Declare duas variáveis, uma inicializada com valor null
//e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

const vNull = null;
let vUndefined;

console.log(vNull);
console.log(vUndefined);

//Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes 
//tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

const numero = 10;
const palavra = 'olá';
const verdade = true;

console.log(`${palavra} ${numero} é ${verdade}`);

//Crie uma variável numérica e uma string. Faça a conversão da variável
//numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

const numeroConvertido = String(numero);
const textoConvertido = Number(palavra);

console.log(numeroConvertido);
console.log(textoConvertido);

//Crie uma variável com uma string e utilize métodos de manipulação de strings,
//como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

const Textos = 'Ah to cansado';

const UpperCase = Textos.toLocaleUpperCase();
const LowerCase = Textos.toLowerCase();
const corte = Textos.slice(0, 5);

console.log(UpperCase);
console.log(LowerCase);
console.log(corte);