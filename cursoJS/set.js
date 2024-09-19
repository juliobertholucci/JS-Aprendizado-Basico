const nomes = ['Ana', 'Ana', 'Kaio', 'Celos', 'Kaio', 'Cesar'] //arrays com dados repetidos

const novosNomes = new Set(nomes) //é parecido com um array mas não é um, não podendo utilizar os métodos de arrays

const array = [...novosNomes] //aqui é convertido para um array

console.log(novosNomes);


