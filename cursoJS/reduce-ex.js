const numeros = [43, 50, 65, 12]
 
const soma = numeros.reduce((acum, atual) => atual + acum, 0) //acumulador é o resultado da ação após a arrow function, iniciando com zero. Atual é o número atual do array que foi iterado.                 

console.log(soma)