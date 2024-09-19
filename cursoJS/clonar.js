const notas = [8, 8, 7, 6]

const novaNota = notas
novaNota.push(10);

console.log(notas);
console.log(novaNota);

//nesse código é adicionado o valor 10 em ambos os arrays, por ser uma atribuição por referência 


const numeros = [20, 5, 30]

const novoNumero = [... numeros]; //operação de clonar

novoNumero.push(13)

console.log(numeros);
console.log(novoNumero);

//nesse código o array foi clonado e atribuido a uma nova variável.
