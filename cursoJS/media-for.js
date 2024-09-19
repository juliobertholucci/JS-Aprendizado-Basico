const notas = [20, 10, 5, 6, 7, 8];

let soma = 0;

for (let i = 0; i < notas.length; i++){

    soma += notas[i];

}

const media = soma / notas.length;

console.log(media.toFixed(2));

