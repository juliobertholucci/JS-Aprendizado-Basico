const listaEstudante = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjoire', 'Thais', 'Marcos', 'Bia', 'Julio'];

const sala1 = listaEstudante.slice(0, listaEstudante.length/2); //o primeiro parâmetro indica onde o corte inicia, e o segundo parâmetro
//onde o corte termina. Vale lembrar que o último index do corte não será cortado.
const sala2 = listaEstudante.slice(listaEstudante.length/2);
console.log(sala1);
console.log(sala2);


