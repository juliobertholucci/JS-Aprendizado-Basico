let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);

const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const desestruturar = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosnumeros] = [1, 2, 3, 4, 5, 6]

console.log(num1, num2, outrosnumeros);

const pessoa = {

    nome: 'Julio',
    idade: 21

}

const pessoaMaisTelefone = {...pessoa, telefone: 35998705890}

console.log(pessoa, pessoaMaisTelefone);

const { idade } = pessoa;

console.log(idade);



