const nomes = ["Julio", "Ana", "Marcos", "Samuel"]; //um array pode ser atribuido a uma const, pois seus index podem ser manipulados

console.log(nomes[4]);

nomes.push("Junior"); //adiciona um valor ao último index do array;

nomes.pop(); //deleta um valor do último index do array;

console.log(nomes[4]);

const numeros = [10, 2, 15, 8];

numeros.pop();

const media = numeros[0] + numeros[1] + numeros[2] + numeros[3] / numeros.length;

console.log(media);
