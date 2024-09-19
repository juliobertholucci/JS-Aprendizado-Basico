const estudantesSala = ['Julio', 'Dani', 'Fernanda', 'Julia', 'Ana', 'Kaio'];

console.log(estudantesSala);

estudantesSala.splice(1, 0, 'Hugo'); //o método splice permite deletar dados de um array e adicionar em seguida.
//primeiro parâmetro significa a posição inicial do corte, o segundo parâmetro representa a quantidade de elementos que serão retirados
//o terceiro parâmetro significa o valor que será adicionado dentro dessa posição.

console.log(estudantesSala);